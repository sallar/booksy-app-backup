import React from 'react';
import { Button } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { ScrollView } from 'react-native';

export const AddShelf: React.FunctionComponent = ({}) => {
  return (
    <ScrollView style={globalStyles.container}>
      <Button>TBA</Button>
    </ScrollView>
  );
};

// @ts-ignore
AddShelf.options = () => ({
  modalPresentationStyle: 'pageSheet',
  topBar: {
    title: {
      text: 'Add Shelf',
    },
  },
});

export default AddShelf;
