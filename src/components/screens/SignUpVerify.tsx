import React from 'react';
import { Button, Input } from 'react-native-ui-kitten';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { View, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
import { navigateToRoot } from '../../navigation';
import { SIGN_IN_SCREEN } from './constants';

const schema = yup.object().shape({
  username: yup.string().required(),
  code: yup.number().required(),
});

const SignUpVerify: React.FunctionComponent<{
  username: string;
  componentId: string;
}> = ({ componentId, username = '' }) => {
  const usernameRef = React.useRef<any>();
  const codeRef = React.useRef<any>();

  useNavigationComponentDidAppear(() => {
    if (usernameRef.current && codeRef.current) {
      if (username) {
        codeRef.current.focus();
      } else {
        usernameRef.current.focus();
      }
    }
  }, componentId);

  return (
    <ScrollView
      style={globalStyles.container}
      keyboardShouldPersistTaps="handled">
      <Formik
        validationSchema={schema}
        initialValues={{ username, code: '' }}
        onSubmit={async ({ username, code }) => {
          try {
            await Auth.confirmSignUp(username, code);
            navigateToRoot(componentId, SIGN_IN_SCREEN);
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
              returnKeyType="done"
              onSubmitEditing={() => props.handleSubmit()}
              ref={codeRef}
            />
            <View style={globalStyles.spacer}>
              <Button
                disabled={!props.dirty || !props.isValid}
                onPress={() => props.handleSubmit()}>
                Confirm Sign Up
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => {
                    navigateToRoot(componentId, SIGN_IN_SCREEN);
                  }}>
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
  topBar: {
    title: {
      text: 'Verify',
    },
  },
});

export default SignUpVerify;
