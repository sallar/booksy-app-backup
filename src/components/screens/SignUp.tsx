import { Container, Content, Form, Item, Input, Label } from 'native-base';
import React from 'react';

const SignIn = () => (
  <Container>
    <Content>
      <Form>
        <Item floatingLabel={true}>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel={true} last={true}>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </Item>
        <Item floatingLabel={true} last={true}>
          <Label>Email</Label>
          <Input />
        </Item>
      </Form>
    </Content>
  </Container>
);

export default SignIn;
