import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { globalStyles } from '../../styles/global';
import { Layout, Text } from 'react-native-ui-kitten';

export const SettingsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Layout style={globalStyles.container}>
      <Text>Settings</Text>
    </Layout>
  );
};

SettingsScreen.navigationOptions = () => ({
  title: 'Settings',
});
