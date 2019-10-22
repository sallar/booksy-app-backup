import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Formik
          validationSchema={schema}
          initialValues={{ username: '', password: '' }}
          onSubmit={async ({ username, password }) => {
            await Auth.signIn(username, password);
            navigation.navigate('App');
          }}
        >
          {props => (
            <Form>
              <Item floatingLabel={true} error={!!props.errors.username}>
                <Label>Username</Label>
                <Input
                  value={props.values.username}
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  autoCompleteType="off"
                  textContentType="username"
                  autoCapitalize="none"
                />
                {props.errors.username && <Icon name="close-circle" />}
              </Item>
              <Item floatingLabel={true} last={true} error={!!props.errors.password}>
                <Label>Password</Label>
                <Input
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  secureTextEntry
                  textContentType="password"
                />
                {props.errors.password && <Icon name="close-circle" />}
              </Item>
              <Button
                full
                style={{ marginTop: 20 }}
                onPress={props.handleSubmit}
                disabled={!props.isValid}
              >
                <Text>Sign In</Text>
              </Button>
            </Form>
          )}
        </Formik>
        <Button
          transparent
          onPressOut={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text>Don't have an account? Create one.</Text>
        </Button>
      </Content>
    </Container>
  );
};

SignIn.navigationOptions = () => ({
  title: 'Sign In',
});

export default SignIn;
