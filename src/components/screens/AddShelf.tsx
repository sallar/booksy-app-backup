import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import * as yup from 'yup';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Button, Input } from 'react-native-ui-kitten';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { Formik } from 'formik';
import { globalStyles } from '../../styles/global';
import { convertToKey } from '../../utils/helpers';
import { createShelf } from '../../graphql/mutations';
import { dismissModal } from '../../navigation';

interface AddShelfProps {
  componentId: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required.'),
});

export const AddShelf: React.FunctionComponent<AddShelfProps> = ({
  componentId,
}) => {
  const nameRef = useRef<any>(null);

  useNavigationComponentDidAppear(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, componentId);

  return (
    <ScrollView style={globalStyles.container}>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={schema}
        onSubmit={async ({ name }) => {
          await API.graphql(
            graphqlOperation(createShelf, {
              input: { name, key: convertToKey(name) },
            }),
          );
          dismissModal(componentId);
        }}>
        {props => (
          <>
            <Input
              style={globalStyles.input}
              value={props.values.name}
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              placeholder="Shelf Name"
              ref={nameRef}
            />
            <View style={globalStyles.spacer}>
              <Button
                onPress={props.handleSubmit}
                disabled={!props.dirty || !props.isValid}>
                Add New Shelf
              </Button>
            </View>
          </>
        )}
      </Formik>
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
