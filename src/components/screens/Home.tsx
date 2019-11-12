import React from 'react';
import { RefreshControl, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon, Layout } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import ScrollView from '../ScrollView';

const HomeScreen: React.FunctionComponent = () => {
  const { data, refetch, refetching } = useQuery<ListShelfsQuery>(listShelfs);

  if (!data) {
    return (
      <Layout style={globalStyles.contentContainer}>
        <ActivityIndicator />
      </Layout>
    );
  }

  const renderIcon = (style: any) => <Icon {...style} name="book" />;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refetching} onRefresh={refetch} />
      }>
      <List
        data={data.listShelfs ? data.listShelfs.items : []}
        renderItem={({ item, index }: any) => (
          <ListItem title={item.name} key={index} icon={renderIcon} />
        )}
      />
    </ScrollView>
  );
};

// @ts-ignore
HomeScreen.options = () => ({
  topBar: {
    searchBar: true,
    searchBarHiddenWhenScrolling: true,
    searchBarPlaceholder: 'Discover books...',
    title: {
      text: 'Booksy',
    },
  },
});

export default HomeScreen;
