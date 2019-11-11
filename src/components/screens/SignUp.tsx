import React from 'react';
import { Button, Input, StyleType } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { SIGN_UP_VERIFY_SCREEN } from '.';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

interface SignUpProps {
  componentId: string;
}

const SignUp: React.FunctionComponent<SignUpProps> = ({ componentId }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const passwordRef = React.useRef<any>();
  const emailRef = React.useRef<any>();

  const renderIcon = ({ tintColor }: StyleType) => (
    <Icon
      color={tintColor}
      size={24}
      name={!secureTextEntry ? 'eye' : 'eye-off'}
    />
  );

  return (
    <ScrollView style={globalStyles.container}>
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
            // navigation.navigate('SignUpVerify', {
            //   username,
            // });
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
              // autoFocus
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
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
                disabled={!props.isValid}
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
                  }}
                  // onPress={() => navigation.navigate('SignIn')}
                >
                  Have an account? Sign in.
                </Button>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => {
                    Navigation.showModal({
                      stack: {
                        children: [
                          {
                            component: {
                              name: SIGN_UP_VERIFY_SCREEN,
                              passProps: {
                                username: 'sallar',
                              },
                            },
                          },
                        ],
                      },
                    });
                  }}
                  // onPress={() => navigation.navigate('SignUpVerify')}
                >
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

// @ts-ignore
SignUp.options = () => ({
  topBar: {
    title: {
      text: 'Register',
    },
  },
});

export default SignUp;
