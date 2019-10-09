import { Container, Content, Spinner } from 'native-base';
import React from 'react';

const AuthLoading = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('SignUp');
  });

  return (
    <Container>
      <Content>
        <Spinner color="black" />
      </Content>
    </Container>
  );
};

export default AuthLoading;
