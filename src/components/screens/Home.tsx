import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
    </View>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'Booksy',
});
