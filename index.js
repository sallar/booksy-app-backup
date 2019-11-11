/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Amplify from '@aws-amplify/core';
import { registerScreens, AUTH_LOADING_SCREEN } from './src/components/screens';
import App from './App';

import config from './aws-exports.js';

Amplify.configure(config);
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: '#222B45',
      topMargin: Navigation.constants().statusBarHeight,
    },
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

// Navigation.events().registerAppLaunchedListener(() => {

//   Navigation.setRoot({
//     root: {
//       bottomTabs: {
//         children: [
//           {
//             stack: {
//               children: [
//                 {
//                   component: {
//                     name: 'navigation.playground.WelcomeScreen',
//                     options: {
//                       topBar: {
//                         title: {
//                           text: 'Hello',
//                         },
//                       },
//                     },
//                   },
//                 },
//               ],
//               options: {
//                 bottomTab: {
//                   //   icon: 'back',
//                   text: 'Layouts',
//                   testID: 'test',
//                   badge: '2',
//                   iconColor: 'red',
//                   selectedIconColor: 'blue',
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// });
