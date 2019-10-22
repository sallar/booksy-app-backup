import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

const SignUp: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Container>
      <Content>
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
              navigation.navigate('SignUpVerify', {
                username,
              });
            } catch (err) {
              console.error('Error signing up: ', err);
            }
          }}
        >
          {props => (
            <Form>
              <Item floatingLabel={true} error={props.errors.username && props.touched.username}>
                <Label>Username</Label>
                <Input
                  value={props.values.username}
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  textContentType="username"
                  autoCapitalize="none"
                  autoCompleteType="off"
                />
              </Item>
              <Item floatingLabel={true} error={props.errors.password && props.touched.password}>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  textContentType="password"
                />
              </Item>
              <Item floatingLabel={true} error={props.errors.email && props.touched.email}>
                <Label>Email</Label>
                <Input
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                />
              </Item>
              <Button
                disabled={!props.isValid}
                full={true}
                style={{ marginTop: 20 }}
                onPress={props.handleSubmit}
              >
                <Text>Sign Up</Text>
              </Button>
            </Form>
          )}
        </Formik>

        <Button
          transparent
          onPressOut={() => {
            navigation.navigate('SignIn');
          }}
        >
          <Text>Have an account? Sign in.</Text>
        </Button>
        <Button
          transparent
          onPressOut={() => {
            navigation.navigate('SignUpVerify');
          }}
        >
          <Text>Want to verify your account?</Text>
        </Button>
      </Content>
    </Container>
  );
};

SignUp.navigationOptions = () => ({
  title: 'Register',
});

export default SignUp;
