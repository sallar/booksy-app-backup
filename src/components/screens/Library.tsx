import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export const LibraryScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Library</Text>
    </View>
  );
};

LibraryScreen.navigationOptions = () => ({
  title: 'Library',
});
