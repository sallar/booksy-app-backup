import React from 'react';
import { Text } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { globalStyles } from '../../styles/global';

export const HomeScreen: NavigationStackScreenComponent = () => {
  return (
    <Layout style={globalStyles.container}>
      <Text>Home</Text>
    </Layout>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'Booksy',
});
