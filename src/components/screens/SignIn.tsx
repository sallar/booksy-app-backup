import React from 'react';
import { Layout, Button, Input, Icon, StyleType } from 'react-native-ui-kitten';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
// @ts-ignore
import Illustration from '../../../assets/ui/book-shop.svg';

const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

const SignIn: NavigationStackScreenComponent = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const passwordRef = React.useRef<any>();

  const renderIcon = (style: StyleType) => (
    <Icon {...style} name={!secureTextEntry ? 'eye' : 'eye-off'} />
  );

  return (
    <Layout style={globalStyles.container}>
      <View style={styles.hero}>
        <Illustration width={180} height={180} />
      </View>
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
              style={globalStyles.input}
              value={props.values.username}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              autoCompleteType="off"
              textContentType="username"
              autoCapitalize="none"
              placeholder="Username"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current && passwordRef.current.focus()}
            />
            <Input
              style={globalStyles.input}
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              secureTextEntry={secureTextEntry}
              icon={renderIcon}
              onIconPress={() => setSecureTextEntry(!secureTextEntry)}
              textContentType="password"
              placeholder="Password"
              ref={passwordRef}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              onSubmitEditing={() => props.handleSubmit()}
            />
            <View style={globalStyles.spacer}>
              <Button onPress={() => props.handleSubmit()} disabled={!props.isValid}>
                Sign In
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => navigation.navigate('SignUp')}
                >
                  Don't have an account? Create one.
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </Layout>
  );
};

const styles = StyleSheet.create({
  hero: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});

SignIn.navigationOptions = () => ({
  title: 'Sign In',
});

export default SignIn;
