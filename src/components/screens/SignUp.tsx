import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import React from 'react';
import { validateEmail } from '../../utils/helpers';
import { Auth } from 'aws-amplify';

const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);

  const [step, setStep] = React.useState(0);

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

  const signUp = () => {
    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
      },
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
          {step === 0 && (
            <>
              <Item floatingLabel={true} error={usernameError}>
                <Label>Username</Label>
                <Input value={username} onChangeText={changeUsername} />
                {usernameError && <Icon name="close-circle" />}
              </Item>
              <Item floatingLabel={true} error={passwordError}>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={changePassword} value={password} />
                {passwordError && <Icon name="close-circle" />}
              </Item>
              <Item floatingLabel={true} error={emailError}>
                <Label>Email</Label>
                <Input onChangeText={changeEmail} value={email} />
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
            </>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
