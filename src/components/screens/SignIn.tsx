import React from 'react';
import { Layout, Text, Button, Input } from 'react-native-ui-kitten';
import { Container, Content, Form, Item, Label, Icon } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';

const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

const SignIn: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Layout style={globalStyles.container}>
      <Formik
        validationSchema={schema}
        initialValues={{ username: '', password: '' }}
        onSubmit={async ({ username, password }) => {
          await Auth.signIn(username, password);
          navigation.navigate('App');
        }}
      >
        {props => (
          <>
            <Input
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              autoCompleteType="off"
              textContentType="username"
              autoCapitalize="none"
              placeholder="Username"
              caption={props.touched.username && props.errors.username}
              status={props.touched.username && props.errors.username ? 'danger' : 'primary'}
            />

            <Input
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              secureTextEntry
              textContentType="password"
              placeholder="Password"
              caption={props.touched.password && props.errors.password}
              status={props.touched.password && props.errors.password ? 'danger' : 'primary'}
            />
            <Button
              style={{ marginTop: 20 }}
              onPress={e => {
                props.handleSubmit();
              }}
              disabled={!props.isValid}
            >
              Sign In
            </Button>
          </>
        )}
      </Formik>
      <Button
        appearance="ghost"
        style={{ marginTop: 10 }}
        onPressOut={() => {
          navigation.navigate('SignUp');
        }}
      >
        Don't have an account? Create one.
      </Button>
    </Layout>
  );
};

SignIn.navigationOptions = () => ({
  title: 'Sign In',
});

export default SignIn;
