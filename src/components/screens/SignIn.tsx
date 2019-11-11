import React from 'react';
import { Layout, Button, Input, StyleType } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
import { Navigation } from 'react-native-navigation';
import { SIGN_UP_SCREEN } from '.';

// '../../../assets/ui/book-shop.svg'

const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

interface SignInProps {
  componentId: string;
}

const SignIn: React.FunctionComponent<SignInProps> = ({ componentId }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const passwordRef = React.useRef<any>();

  const renderIcon = ({ tintColor }: StyleType) => (
    <Icon
      name={!secureTextEntry ? 'eye' : 'eye-off'}
      size={24}
      color={tintColor}
    />
  );

  return (
    <ScrollView style={globalStyles.container}>
      {/* <View style={styles.hero}>
        <Illustration width={180} height={180} />
      </View> */}
      <Formik
        validationSchema={schema}
        initialValues={{ username: '', password: '' }}
        onSubmit={async ({ username, password }) => {
          await Auth.signIn(username, password);
          /* navigation.navigate('App'); */
        }}>
        {props => (
          <>
            <Input
              style={globalStyles.input}
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              autoCompleteType="off"
              textContentType="username"
              autoCapitalize="none"
              placeholder="Username"
              // autoFocus
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
            />
            <Input
              style={globalStyles.input}
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              secureTextEntry={secureTextEntry}
              // icon={renderIcon}
              onIconPress={() => setSecureTextEntry(!secureTextEntry)}
              textContentType="password"
              placeholder="Password"
              ref={passwordRef}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              onSubmitEditing={() => props.handleSubmit()}
            />
            <View style={globalStyles.spacer}>
              <Button
                onPress={() => props.handleSubmit()}
                disabled={!props.isValid}>
                Sign In
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => {
                    Navigation.push(componentId, {
                      component: {
                        name: SIGN_UP_SCREEN,
                      },
                    });
                  }}>
                  Don't have an account? Create one.
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
SignIn.options = () => ({
  topBar: {
    title: {
      text: 'Sign In',
    },
  },
});

const styles = StyleSheet.create({
  hero: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});

export default SignIn;
