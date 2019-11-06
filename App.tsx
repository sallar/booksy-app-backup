import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import Amplify from '@aws-amplify/core';
import { mapping, light, dark } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppStack from './src/components/screens/AppStack';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';
import SignUpVerify from './src/components/screens/SignUpVerify';
import AuthLoading from './src/components/screens/AuthLoading';
import { StyledHeader, getNavigationOptions } from './src/components/NavigationBar';
import config from './aws-exports.js';

Amplify.configure(config);

const AuthStack = createStackNavigator(
  { SignIn, SignUp, SignUpVerify },
  {
    defaultNavigationOptions: ({ theme }) => getNavigationOptions(theme),
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ApplicationProvider mapping={mapping} theme={colorScheme === 'dark' ? dark : light}>
      <IconRegistry icons={EvaIconsPack} />
      <AppContainer theme={colorScheme} />
    </ApplicationProvider>
  );
};

export default App;
