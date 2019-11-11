/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: true,
      background: {
        translucent: true,
      },
    },
    bottomTabs: {
      translucent: true,
      drawBehind: true,
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'navigation.playground.WelcomeScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Hello',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  //   icon: 'back',
                  text: 'Layouts',
                  testID: 'test',
                  badge: '2',
                  iconColor: 'red',
                  selectedIconColor: 'blue',
                },
              },
            },
          },
        ],
      },
    },
  });
});
