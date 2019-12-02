import React from 'react';
import { Text } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { ScrollView } from 'react-native';
import { NavigationComponent } from '../../types/navigation';

export const SearchScreen: NavigationComponent = ({}) => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text>Hello</Text>
    </ScrollView>
  );
};

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
