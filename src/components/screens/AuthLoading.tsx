import React from 'react';
import { Auth } from 'aws-amplify';
import { goToAuth, goToHome } from '../../navigation';
import { View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NavigationComponent } from '../../types/navigation';

const AuthLoading: NavigationComponent = ({}) => {
  React.useEffect(() => {
    const getUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        goToHome();
      } catch (err) {
        goToAuth();
      }
    };

    getUser();
  }, []);

  return (
    <View style={globalStyles.contentContainer}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoading;
