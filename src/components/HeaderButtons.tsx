import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons as RNHeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} />
);

export const HeaderButtons = props => {
  return (
    <RNHeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      OverflowIcon={<MaterialIcons name="more-vert" size={23} color="white" />}
      {...props}
    />
  );
};
export { Item } from 'react-navigation-header-buttons';
