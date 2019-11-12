import React from 'react';
import { Icon, Button, Input, StyleType } from 'react-native-ui-kitten';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../../styles/global';
import { SIGN_UP_SCREEN } from './constants';
import { navigateTo, goToHome } from '../../navigation';

// @ts-ignore
import Illustration from '../../../assets/ui/book-shop.svg';

const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

interface SignInProps {
  componentId: string;
}

const SignIn: React.FunctionComponent<SignInProps> = ({ componentId }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const usernameRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();

  const renderIcon = (style: StyleType) => {
    return <Icon {...style} name={!secureTextEntry ? 'eye' : 'eye-off'} />;
  };

  useNavigationComponentDidAppear(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, componentId);

  return (
    <ScrollView
      style={globalStyles.container}
      keyboardShouldPersistTaps="always">
      <View style={styles.hero}>
        <Illustration width={180} height={180} />
      </View>
      <Formik
        validationSchema={schema}
        validateOnMount={true}
        initialValues={{ username: '', password: '' }}
        onSubmit={async ({ username, password }) => {
          console.log(username, password);
          await Auth.signIn(username, password);
          console.log('Signed in');
          goToHome();
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
              returnKeyType="next"
              ref={usernameRef}
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
              <Button
                onPress={() => props.handleSubmit()}
                disabled={!props.dirty || !props.isValid}>
                Sign In
              </Button>
              <View style={globalStyles.spacer}>
                <Button
                  appearance="ghost"
                  status="basic"
                  size="small"
                  onPress={() => navigateTo(componentId, SIGN_UP_SCREEN)}>
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
