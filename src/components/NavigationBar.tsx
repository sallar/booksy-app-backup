import React from 'react';
import { HeaderProps } from 'react-navigation-stack';
import { TopNavigation, TopNavigationProps, withStyles, ThemeType } from 'react-native-ui-kitten';
import { getThemeColor } from '../utils/theme';
import { SafeAreaView } from 'react-native';

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

export const getNavigationOptions = (theme: string) => ({
  headerStyle: {
    backgroundColor: getThemeColor(theme, 'background-basic-color-1'),
  },
  headerTintColor: getThemeColor(theme, 'text-basic-color'),
});
