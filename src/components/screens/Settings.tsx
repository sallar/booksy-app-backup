import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../../styles/global';

export const SettingsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Settings</Text>

      <Button
        onPressOut={() => {
          Auth.signOut();
          navigation.navigate('AuthLoading');
        }}
      >
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

SettingsScreen.navigationOptions = () => ({
  title: 'Profile',
});
