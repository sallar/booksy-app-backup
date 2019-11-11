import React from 'react';
import { Layout, Spinner } from 'react-native-ui-kitten';
import { Auth } from 'aws-amplify';
import { goToAuth } from '../../navigation';

const AuthLoading: React.FunctionComponent = ({}) => {
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        // navigation.navigate('App');
      } catch (err) {
        console.log(err);
        goToAuth();
      }
    };

    getUser();
  }, []);

  return (
    <Layout style={{ flex: 1 }}>
      <Spinner />
    </Layout>
  );
};

export default AuthLoading;
