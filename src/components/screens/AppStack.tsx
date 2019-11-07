import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './Home';
import { LibraryScreen } from './Library';
import { SettingsScreen } from './Settings';
import { getNavigationOptions, StyledBottomBar } from '../NavigationBar';
import { getThemeColor } from '../../utils/theme';

const defaultNavigationOptions = ({ theme }) => getNavigationOptions(theme);

const HomeNavigator = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      title: 'Home',
    },
  }
);

const LibraryNavigator = createStackNavigator(
  { LibraryScreen },
  {
    defaultNavigationOptions,
    navigationOptions: {
      title: 'Book Shelves',
    },
  }
);

const SettingsNavigator = createStackNavigator(
  { SettingsScreen },
  {
    defaultNavigationOptions,
    navigationOptions: {
      title: 'Profile',
    },
  }
);

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
    tabBarComponent: StyledBottomBar,
  }
);

export default AppStack;
