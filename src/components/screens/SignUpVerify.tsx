import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  code: yup.number().required(),
});

const SignUpVerify: NavigationStackScreenComponent<{ username: string }> = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Formik
          validationSchema={schema}
          initialValues={{ username: navigation.getParam('username') || '', code: '' }}
          onSubmit={async ({ username, code }) => {
            try {
              Auth.confirmSignUp(username, code);
              navigation.navigate('SignIn');
            } catch (err) {
              console.error('Error confirming signing up: ', err);
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
                />
              </Item>
              <Item floatingLabel={true} error={props.errors.code && props.touched.code}>
                <Label>Verification code</Label>
                <Input
                  value={props.values.code}
                  onChangeText={props.handleChange('code')}
                  onBlur={props.handleBlur('code')}
                  keyboardType="number-pad"
                />
              </Item>

              <Button
                disabled={!props.isValid}
                full={true}
                style={{ marginTop: 20 }}
                onPress={props.handleSubmit}
              >
                <Text>Confirm Sign Up</Text>
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
      </Content>
    </Container>
  );
};

SignUpVerify.navigationOptions = () => ({
  title: 'Verify Account',
});

export default SignUpVerify;
