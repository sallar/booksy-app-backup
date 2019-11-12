import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FormIconProps {
  width: number;
  height: number;
  tintColor: string;
  name: string;
  onClick: any;
}

export const FormIcon: React.FunctionComponent<FormIconProps> = ({
  name,
  tintColor,
  width,
  onClick,
}) => {
  return (
    <MaterialIcon
      name={name}
      color={tintColor}
      size={width}
      onClick={onClick}
    />
  );
};
