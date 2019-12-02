import React from 'react';
import { Icon, Button, Input, StyleType } from 'react-native-ui-kitten';
import { View, ScrollView } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
import { Navigation } from 'react-native-navigation';
import { SIGN_UP_VERIFY_SCREEN } from './constants';
import { navigateTo } from '../../navigation';
import { NavigationComponent } from '../../types/navigation';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

const SignUp: NavigationComponent = ({ componentId }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const usernameRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();
  const emailRef = React.useRef<any>();

  const renderIcon = (style: StyleType) => (
    <Icon {...style} name={!secureTextEntry ? 'eye' : 'eye-off'} />
  );

  useNavigationComponentDidAppear(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, componentId);

  return (
    <ScrollView
      style={globalStyles.container}
      keyboardShouldPersistTaps="handled">
      <Formik
        validationSchema={schema}
        initialValues={{ username: '', password: '', email: '' }}
        onSubmit={async ({ username, password, email }) => {
          try {
            await Auth.signUp({
              username,
              password,
              attributes: {
                email,
              },
            });
            navigateTo(componentId, SIGN_UP_VERIFY_SCREEN, {
              username,
            });
          } catch (err) {
            console.error('Error signing up: ', err);
          }
        }}>
        {props => (
          <>
            <Input
              style={globalStyles.input}
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              textContentType="username"
              autoCapitalize="none"
              autoCompleteType="off"
              placeholder="Username"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
              ref={usernameRef}
            />
            <Input
              style={globalStyles.input}
              secureTextEntry={secureTextEntry}
              icon={renderIcon}
              onIconPress={() => setSecureTextEntry(!secureTextEntry)}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              textContentType="password"
              placeholder="Password"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                emailRef.current && emailRef.current.focus()
              }
            />
            <Input
              style={globalStyles.input}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              placeholder="Email"
              status={
                props.touched.email && props.errors.email ? 'danger' : undefined
              }
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => props.handleSubmit()}
            />
            <View style={globalStyles.spacer}>
              <Button
                disabled={!props.dirty || !props.isValid}
                onPress={() => props.handleSubmit()}>
                Sign Up
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => {
                    Navigation.pop(componentId);
                  }}>
                  Have an account? Sign in.
                </Button>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => {
                    navigateTo(componentId, SIGN_UP_VERIFY_SCREEN);
                  }}>
                  Want to verify your account?
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

SignUp.options = () => ({
  topBar: {
    title: {
      text: 'Register',
    },
  },
});

export default SignUp;
