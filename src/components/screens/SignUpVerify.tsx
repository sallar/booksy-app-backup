import React from 'react';
import { Layout, Button, Input } from 'react-native-ui-kitten';
import { View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';

const schema = yup.object().shape({
  username: yup.string().required(),
  code: yup.number().required(),
});

const SignUpVerify: NavigationStackScreenComponent<{ username: string }> = ({ navigation }) => {
  const codeRef = React.useRef<any>();
  const incomingUsername = navigation.getParam('username') || '';

  return (
    <Layout style={globalStyles.container}>
      <Formik
        validationSchema={schema}
        initialValues={{ username: incomingUsername, code: '' }}
        onSubmit={async ({ username, code }) => {
          try {
            await Auth.confirmSignUp(username, code);
            navigation.navigate('SignIn');
          } catch (err) {
            console.error('Error confirming signing up: ', err);
          }
        }}
      >
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
              autoFocus={!incomingUsername}
              disabled={!!incomingUsername}
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
              autoFocus={!!incomingUsername}
              returnKeyType="done"
              onSubmitEditing={() => props.handleSubmit()}
              ref={codeRef}
            />
            <View style={globalStyles.spacer}>
              <Button disabled={!props.isValid} onPress={() => props.handleSubmit()}>
                Confirm Sign Up
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPressOut={() => navigation.navigate('SignIn')}
                >
                  Have an account? Sign in.
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </Layout>
  );
};

SignUpVerify.navigationOptions = () => ({
  title: 'Verify Account',
});

export default SignUpVerify;
