import React from 'react';
import { withStyles, ThemeType, ThemedStyleType } from 'react-native-ui-kitten';
import { ScrollView as ScrollViewBase, ScrollViewProps } from 'react-native';

const FakeScrollView: React.FunctionComponent<
  ScrollViewProps & { themedStyle?: ThemedStyleType }
> = ({ themedStyle, ...props }) => <ScrollViewBase style={themedStyle.scrollView} {...props} />;

const ScrollView = withStyles(FakeScrollView, (theme: ThemeType) => ({
  scrollView: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));

export default ScrollView;
