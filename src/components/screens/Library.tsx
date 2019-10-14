import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';

export const LibraryScreen = () => {
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const shelvesData = await API.graphql(graphqlOperation(listShelfs));
      console.log(shelvesData);
    };
    getData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Library</Text>
    </View>
  );
};

LibraryScreen.navigationOptions = () => ({
  title: 'Library',
});
