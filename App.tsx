import Amplify from '@aws-amplify/core';
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

export default createAppContainer(
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
