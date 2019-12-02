/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { Appearance } from 'react-native-appearance';
import Amplify from '@aws-amplify/core';
import { MemoryStorageNew } from './src/StorageService';
import { registerScreens } from './src/components/screens';
import { AUTH_LOADING_SCREEN } from './src/components/screens/constants';
import { getThemeColors } from './src/styles/colors';

import config from './aws-exports.js';

Amplify.configure({
  ...config,
  storage: MemoryStorageNew,
});
registerScreens();

const setThemeOptions = theme => {
  const colors = getThemeColors(theme);

  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: colors.backgroundColor,
    },
    topBar: {
      visible: true,
      drawBehind: true,
      background: {
        translucent: true,
      },
      rightButtonColor: colors.buttonColor,
      leftButtonColor: colors.buttonColor,
    },
    bottomTab: {
      selectedIconColor: colors.buttonColor,
      iconColor: colors.inactiveButtonColor,
      textColor: colors.inactiveButtonColor,
      selectedTextColor: colors.buttonColor,
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
};

Appearance.addChangeListener(({ colorScheme }) => {
  setThemeOptions(colorScheme);
});

Navigation.events().registerAppLaunchedListener(() => {
  setThemeOptions(Appearance.getColorScheme());
});
