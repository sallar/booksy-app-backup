import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Layout, Button } from 'react-native-ui-kitten';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../../styles/global';

export const ProfileScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Layout style={globalStyles.container}>
      <Button
        onPressOut={() => {
          Auth.signOut();
          navigation.navigate('AuthLoading');
        }}
      >
        Logout
      </Button>
    </Layout>
  );
};

ProfileScreen.navigationOptions = () => ({
  title: 'Profile',
});
