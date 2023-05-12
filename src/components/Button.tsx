import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <ButtonContainer activeOpacity={0.8} {...props}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
`;

const ButtonLabel = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default Button;