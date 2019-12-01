import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SIGN_IN_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN,
} from './components/screens/constants';

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

export const goToHome = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              options: {
                bottomTab: {
                  icon: require('../assets/ui/read-home.png'),
                  text: 'Library',
                },
              },
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  icon: require('../assets/ui/read-search.png'),
                  text: 'Find Books',
                },
              },
              children: [
                {
                  component: {
                    name: SEARCH_SCREEN,
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  icon: require('../assets/ui/id-card.png'),
                  text: 'Profile',
                },
              },
              children: [
                {
                  component: {
                    name: PROFILE_SCREEN,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};

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
