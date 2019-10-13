import Amplify from '@aws-amplify/core';
import config from './aws-exports.js';
import AppStack from './src/components/screens/AppStack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';
import AuthLoading from './src/components/screens/AuthLoading';

Amplify.configure(config);

const SignInNavgigation = createStackNavigator({ SignIn });
SignInNavgigation.navigationOptions = () => ({
  title: 'Authenticate',
});

const SignUpNavigation = createStackNavigator({ SignUp });
SignUpNavigation.navigationOptions = () => ({
  title: 'Authenticate',
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      SignIn: SignInNavgigation,
      SignUp: SignUpNavigation,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
