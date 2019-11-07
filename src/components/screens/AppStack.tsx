import React from 'react';
import { createStackNavigator, NavigationStackScreenComponent } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './Home';
import { LibraryScreen } from './Library';
import { SettingsScreen } from './Settings';
import { ProfileScreen } from './Profile';
import { getNavigationOptions, StyledBottomBar, TabBarIcon } from '../NavigationBar';

interface ScreensMap {
  [key: string]: NavigationStackScreenComponent;
}

const defaultNavigationOptions = ({ theme }) => getNavigationOptions(theme);
const createTabNavigator = (title: string, icon: string, screens: ScreensMap) =>
  createStackNavigator(screens, {
    defaultNavigationOptions,
    navigationOptions: {
      title,
      tabBarIcon: (props: any) => <TabBarIcon name={icon} {...props} />,
    },
  });

const HomeNavigator = createTabNavigator('Home', 'home', {
  HomeScreen,
});
const LibraryNavigator = createTabNavigator('Book Shelves', 'book-open', { LibraryScreen });
const ProfileNavigator = createTabNavigator('Profile', 'person', { ProfileScreen });
const SettingsNavigator = createTabNavigator('Settings', 'settings', { SettingsScreen });

const AppStack = createBottomTabNavigator(
  {
    HomeNavigator,
    LibraryNavigator,
    ProfileNavigator,
    SettingsNavigator,
  },
  {
    tabBarComponent: StyledBottomBar,
  }
);

export default AppStack;
