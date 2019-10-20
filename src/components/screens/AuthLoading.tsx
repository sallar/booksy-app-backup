import React from 'react';
import { Container, Content, Spinner } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';

const AuthLoading: NavigationStackScreenComponent = ({ navigation }) => {
  React.useEffect(() => {
    const getUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        navigation.navigate('App');
      } catch (err) {
        navigation.navigate('Auth');
      }
    };

    getUser();
  }, []);

  return (
    <Container>
      <Content>
        <Spinner color="black" />
      </Content>
    </Container>
  );
};

export default AuthLoading;
