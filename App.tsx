import React from 'react';
import Amplify from '@aws-amplify/core';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import config from './aws-exports.js';
import AppStack from './src/components/screens/AppStack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';
import SignUpVerify from './src/components/screens/SignUpVerify';
import AuthLoading from './src/components/screens/AuthLoading';

Amplify.configure(config);

const SignInNavgigation = createStackNavigator({ SignIn });
SignInNavgigation.navigationOptions = () => ({
  title: 'Authenticate',
});

const AuthStack = createStackNavigator({ SignIn, SignUp, SignUpVerify });

const App = createAppContainer(
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

export default () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <App />
  </ApplicationProvider>
);
