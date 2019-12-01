import React from 'react';
import { Button, Text } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { ScrollView } from 'react-native';

export const SearchScreen: React.FunctionComponent = ({}) => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text>Hello</Text>
    </ScrollView>
  );
};

// @ts-ignore
SearchScreen.options = () => ({
  topBar: {
    searchBar: true,
    searchBarPlaceholder: 'Search by Title, Author, ISBN, ...',
    searchBarHiddenWhenScrolling: true,
    title: {
      text: 'Find Books',
    },
  },
});

export default SearchScreen;
