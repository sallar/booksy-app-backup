import React from 'react';
import { Button } from 'react-native-ui-kitten';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../../styles/global';
import { goToAuth } from '../../navigation';
import { ScrollView } from 'react-native';
import { NavigationComponent } from '../../types/navigation';

export const ProfileScreen: NavigationComponent = ({}) => {
  return (
    <ScrollView style={globalStyles.container}>
      <Button
        onPressOut={async () => {
          await Auth.signOut();
          goToAuth();
        }}>
        Logout
      </Button>
    </ScrollView>
  );
};

ProfileScreen.options = () => ({
  topBar: {
    title: {
      text: 'Profile',
    },
  },
});

export default ProfileScreen;
