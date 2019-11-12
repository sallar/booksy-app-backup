import { Navigation } from 'react-native-navigation';
import { SIGN_IN_SCREEN } from './components/screens/constants';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SIGN_IN_SCREEN,
            },
          },
        ],
      },
    },
  });

export const navigateTo = (
  componentId: string,
  screenName: string,
  passProps: any = {},
) =>
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps,
    },
  });

export const navigateToRoot = (
  componentId: string,
  screenName: string,
  passProps: any = {},
) =>
  Navigation.setStackRoot(componentId, {
    component: {
      name: screenName,
      passProps,
    },
  });

export const showModal = (screenName: string, passProps: any = {}) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screenName,
            passProps,
          },
        },
      ],
    },
  });

export const dismissModal = (componentId: string) =>
  Navigation.dismissModal(componentId);
