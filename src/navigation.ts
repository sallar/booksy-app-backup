import { Navigation } from 'react-native-navigation';
import { SIGN_IN_SCREEN, SIGN_UP_SCREEN } from './components/screens';

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
