import React from 'react';
import { SafeAreaView } from 'react-native';
import { HeaderProps } from 'react-navigation-stack';
import { ThemeContext } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { BottomTabBarProps } from 'react-navigation-tabs/lib/typescript/src/types';
import {
  TopNavigation,
  TopNavigationProps,
  withStyles,
  ThemeType,
  ThemedStyleType,
} from 'react-native-ui-kitten';
import { getThemeColor } from '../utils/theme';

const Header: React.FunctionComponent<TopNavigationProps & HeaderProps> = ({
  themedStyle,
  navigation,
  scene,
}) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined && typeof options.headerTitle === 'string'
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <TopNavigation title={title} alignment="center" />
    </SafeAreaView>
  );
};

export const StyledHeader = withStyles(Header, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));

const ThemedBottomTabBar: React.FunctionComponent<
  BottomTabBarProps & { themedStyle: ThemedStyleType }
> = ({ themedStyle, ...props }) => {
  return (
    <ThemeContext.Consumer>
      {() => <BottomTabBar {...props} style={themedStyle.tabBar} />}
    </ThemeContext.Consumer>
  );
};

export const StyledBottomBar = withStyles(ThemedBottomTabBar, (theme: ThemeType) => ({
  tabBar: {
    backgroundColor: theme['background-basic-color-1'],
  },
  test: theme['background-basic-color-1'],
}));

export const getNavigationOptions = (theme: string) => ({
  headerStyle: {
    backgroundColor: getThemeColor(theme, 'background-basic-color-1'),
  },
  headerTintColor: getThemeColor(theme, 'text-basic-color'),
});
