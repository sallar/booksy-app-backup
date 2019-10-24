import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import useDeepCompareEffect from 'use-deep-compare-effect';

interface UseQueryType<ResultType> {
  loading: boolean;
  refetching: boolean;
  error: any;
  data: ResultType;
  refetch: () => void;
}

export const useQuery = <ResultType extends {}, VariablesType extends {} = {}>(
  query: string,
  variables?: VariablesType
): UseQueryType<ResultType> => {
  const [loading, setLoading] = React.useState(true);
  const [refetching, setRefetching] = React.useState(false);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState<ResultType>();

  if (!variables) {
    variables = {} as VariablesType;
  }

  const fetchQuery = async (innerQuery: string, innerVariables?: VariablesType) => {
    try {
      const result = (await API.graphql(graphqlOperation(innerQuery, innerVariables))) as {
        data: ResultType;
      };
      setData(result.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
      setRefetching(false);
    }
  };

  const refetch = () => {
    setRefetching(true);
    fetchQuery(query, variables);
  };

  useDeepCompareEffect(() => {
    fetchQuery(query, variables);
  }, [query, variables]);

  return {
    loading,
    data,
    error,
    refetch,
    refetching,
  };
};
