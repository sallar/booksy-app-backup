import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { validateEmail } from '../../utils/helpers';
import { Auth } from 'aws-amplify';

const SignUp: NavigationStackScreenComponent = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);

  const changeUsername = (text: string) => {
    setUsername(text);
    const error = text.length < 4;
    setUsernameError(error);
  };

  const changePassword = (text: string) => {
    const error = text.length < 6;
    setPassword(text);
    setPasswordError(error);
  };

  const changeEmail = (text: string) => {
    const error = validateEmail(text);
    setEmail(text);
    setEmailError(error);
  };

  const signUp = async () => {
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
  };

  const signUpButtonEnabled =
    username !== '' &&
    !usernameError &&
    password !== '' &&
    !passwordError &&
    email !== '' &&
    !emailError;

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel={true} error={usernameError}>
            <Label>Username</Label>
            <Input
              value={username}
              onChangeText={changeUsername}
              textContentType="username"
              autoCapitalize="none"
              autoCompleteType="off"
            />
            {usernameError && <Icon name="close-circle" />}
          </Item>
          <Item floatingLabel={true} error={passwordError}>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              onChangeText={changePassword}
              value={password}
              textContentType="password"
            />
            {passwordError && <Icon name="close-circle" />}
          </Item>
          <Item floatingLabel={true} error={emailError}>
            <Label>Email</Label>
            <Input
              onChangeText={changeEmail}
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
            />
            {emailError && <Icon name="close-circle" />}
          </Item>
          <Button
            disabled={!signUpButtonEnabled}
            full={true}
            style={{ marginTop: 20 }}
            onPressOut={signUp}
          >
            <Text>Sign Up</Text>
          </Button>
        </Form>

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
