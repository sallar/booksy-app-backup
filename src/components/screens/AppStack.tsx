import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './Home';
import { LibraryScreen } from './Library';
import { SettingsScreen } from './Settings';

const HomeNavigator = createStackNavigator({
  HomeScreen,
});
HomeNavigator.navigationOptions = () => ({
  title: 'Home',
});

const LibraryNavigator = createStackNavigator({ LibraryScreen });
LibraryNavigator.navigationOptions = () => ({
  title: 'Book Shelves',
});

const SettingsNavigator = createStackNavigator({ SettingsScreen });
SettingsNavigator.navigationOptions = () => ({
  title: 'Profile',
});

const AppStack = createBottomTabNavigator(
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
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default AppStack;
