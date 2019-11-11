import React from 'react';
import { Button, Input } from 'react-native-ui-kitten';
import {
  OptionsModalPresentationStyle,
  Navigation,
} from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { View, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';

const schema = yup.object().shape({
  username: yup.string().required(),
  code: yup.number().required(),
});

const SignUpVerify: React.FunctionComponent<{
  username: string;
  componentId: string;
}> = ({ componentId, username = '' }) => {
  const codeRef = React.useRef<any>();

  useNavigationButtonPress(e => {
    Navigation.dismissModal(componentId);
  }, componentId);

  return (
    <ScrollView style={globalStyles.container}>
      <Formik
        validationSchema={schema}
        initialValues={{ username, code: '' }}
        onSubmit={async ({ username, code }) => {
          try {
            await Auth.confirmSignUp(username, code);
            // navigation.navigate('SignIn');
          } catch (err) {
            console.error('Error confirming signing up: ', err);
          }
        }}>
        {props => (
          <>
            <Input
              style={globalStyles.input}
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              placeholder="Username"
              autoCompleteType="off"
              textContentType="username"
              autoCapitalize="none"
              autoFocus={!username}
              disabled={!!username}
              returnKeyType="next"
              onSubmitEditing={() => codeRef.current && codeRef.current.focus()}
            />
            <Input
              style={globalStyles.input}
              value={props.values.code}
              onChangeText={props.handleChange('code')}
              onBlur={props.handleBlur('code')}
              keyboardType="number-pad"
              placeholder="Verification Code"
              autoFocus={!!username}
              returnKeyType="done"
              onSubmitEditing={() => props.handleSubmit()}
              ref={codeRef}
            />
            <View style={globalStyles.spacer}>
              <Button
                disabled={!props.isValid}
                onPress={() => props.handleSubmit()}>
                Confirm Sign Up
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  // onPressOut={() => navigation.navigate('SignIn')}
                >
                  Have an account? Sign in.
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

//@ts-ignore
SignUpVerify.options = () => ({
  statusBar: {
    visible: true,
  },
  modalPresentationStyle: OptionsModalPresentationStyle.pageSheet,
  topBar: {
    title: {
      text: 'Modal',
    },
    rightButtons: {
      id: 'dismiss',
      systemItem: 'done',
    },
  },
});

export default SignUpVerify;
