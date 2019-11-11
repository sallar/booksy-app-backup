import React from 'react';
import { Navigation } from 'react-native-navigation';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';

import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';
import SignUpVerifyScreen from './SignUpVerify';
import AuthLoadingScreen from './AuthLoading';

export const SIGN_IN_SCREEN = 'booksy.SignInScreen';
export const SIGN_UP_SCREEN = 'booksy.SignUpScreen';
export const SIGN_UP_VERIFY_SCREEN = 'booksy.SignUpVerifyScreen';
export const AUTH_LOADING_SCREEN = 'booksy.AuthLoadingScreen';

export const Screens = new Map<string, React.FunctionComponent<any>>();

Screens.set(SIGN_IN_SCREEN, SignInScreen);
Screens.set(SIGN_UP_SCREEN, SignUpScreen);
Screens.set(SIGN_UP_VERIFY_SCREEN, SignUpVerifyScreen);
Screens.set(AUTH_LOADING_SCREEN, AuthLoadingScreen);

export const registerScreens = () => {
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(
      key,
      () => props => (
        <ApplicationProvider mapping={mapping} theme={dark}>
          <ScreenComponent {...props} />
        </ApplicationProvider>
      ),
      () => ScreenComponent,
    );
  });
};
