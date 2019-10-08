import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Amplify from '@aws-amplify/core';
import { withAuthenticator } from 'aws-amplify-react-native';
import { HomeScreen } from './src/components/screens/Home';
import { LibraryScreen } from './src/components/screens/Library';
import { SettingsScreen } from './src/components/screens/Settings';
import config from './aws-exports.js';

Amplify.configure(config);

const HomeNavigator = createStackNavigator({
  HomeScreen,
});
HomeNavigator.navigationOptions = () => ({
  title: 'Home',
});

const LibraryNavigator = createStackNavigator({ LibraryScreen });
LibraryNavigator.navigationOptions = () => ({
  title: 'Library',
});

const SettingsNavigator = createStackNavigator({ SettingsScreen });
SettingsNavigator.navigationOptions = () => ({
  title: 'Profile',
});

const TabNavigator = createBottomTabNavigator(
  {
    HomeNavigator,
    LibraryNavigator,
    SettingsNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = '';
        if (routeName === 'HomeNavigator') {
          iconName = `ios-home`;
        } else if (routeName === 'SettingsNavigator') {
          iconName = `ios-person`;
        } else if (routeName === 'LibraryNavigator') {
          iconName = `ios-book`;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

// export default withAuthenticator(createAppContainer(TabNavigator), {
//   signUpConfig: {
//     defaultCountryCode: '358',
//   },
// });
export default createAppContainer(TabNavigator);
