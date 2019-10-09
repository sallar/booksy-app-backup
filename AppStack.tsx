import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './src/components/screens/Home';
import { LibraryScreen } from './src/components/screens/Library';
import { SettingsScreen } from './src/components/screens/Settings';

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

export default AppStack;
