import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export const SettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Settings</Text>
    </View>
  );
};

SettingsScreen.navigationOptions = () => ({
  title: 'Profile',
});
