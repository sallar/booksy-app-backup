import React from 'react';
import { Navigation } from 'react-native-navigation';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';
import SignUpVerifyScreen from './SignUpVerify';
import AuthLoadingScreen from './AuthLoading';
import {
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  SIGN_UP_VERIFY_SCREEN,
  AUTH_LOADING_SCREEN,
} from './constants';

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
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={dark}>
            <ScreenComponent {...props} />
          </ApplicationProvider>
        </>
      ),
      () => ScreenComponent,
    );
  });
};
