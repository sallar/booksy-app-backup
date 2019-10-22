import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';

const SignIn: NavigationStackScreenComponent = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    await Auth.signIn(username, password);
    navigation.navigate('App');
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel={true}>
            <Label>Username</Label>
            <Input
              value={username}
              onChangeText={setUsername}
              autoCompleteType="off"
              textContentType="username"
              autoCapitalize="none"
            />
          </Item>
          <Item floatingLabel={true} last={true}>
            <Label>Password</Label>
            <Input
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textContentType="password"
            />
          </Item>
          <Button full={true} style={{ marginTop: 20 }} onPressOut={login}>
            <Text>Sign In</Text>
          </Button>
        </Form>
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
