import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';

const SignUpVerify: NavigationStackScreenComponent<{ username: string }> = ({ navigation }) => {
  const [username, setUsername] = React.useState(navigation.getParam('username') || '');
  const [usernameError, setUsernameError] = React.useState(false);

  const [code, setCode] = React.useState('');
  const [codeError, setCodeError] = React.useState(false);

  const changeUsername = (text: string) => {
    setUsername(text);
    const error = text.length < 4;
    setUsernameError(error);
  };

  const changeCode = (text: string) => {
    const error = text.length < 6;
    setCode(text);
    setCodeError(error);
  };

  const confirmSignUp = async () => {
    try {
      Auth.confirmSignUp(username, code);
      navigation.navigate('SignIn');
    } catch (err) {
      console.error('Error confirming signing up: ', err);
    }
  };

  const confirmSignUpButtonEnabled = code !== '' && !codeError;

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel={true} error={usernameError}>
            <Label>Username</Label>
            <Input value={username} onChangeText={changeUsername} />
            {usernameError && <Icon name="close-circle" />}
          </Item>
          <Item floatingLabel={true} error={codeError}>
            <Label>Verification code</Label>
            <Input value={code} onChangeText={changeCode} />
            {codeError && <Icon name="close-circle" />}
          </Item>

          <Button
            disabled={!confirmSignUpButtonEnabled}
            full={true}
            style={{ marginTop: 20 }}
            onPressOut={confirmSignUp}
          >
            <Text>Confirm Sign Up</Text>
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
      </Content>
    </Container>
  );
};

SignUpVerify.navigationOptions = () => ({
  title: 'Verify Account',
});

export default SignUpVerify;
