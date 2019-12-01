/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Amplify from '@aws-amplify/core';
import { MemoryStorageNew } from './src/StorageService';
import { registerScreens } from './src/components/screens';
import { AUTH_LOADING_SCREEN } from './src/components/screens/constants';

import config from './aws-exports.js';

Amplify.configure({
  ...config,
  storage: MemoryStorageNew,
});
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: '#222B45',
    },
    topBar: {
      visible: true,
      drawBehind: true,
      background: {
        translucent: true,
      },
      rightButtonColor: '#fff',
      leftButtonColor: '#fff',
    },
    bottomTab: {
      selectedIconColor: '#ffffff',
      iconColor: '#cccccc',
      textColor: '#cccccc',
      selectedTextColor: '#ffffff',
    },
    bottomTabs: {
      translucent: true,
      drawBehind: true,
    },
    animations: {
      push: {
        waitForRender: true,
      },
    },
  });

  Navigation.setRoot({
    root: {
      component: {
        name: AUTH_LOADING_SCREEN,
      },
    },
  });
});
