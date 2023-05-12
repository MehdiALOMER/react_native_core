
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components';

interface InputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText }) => {
  return <StyledInput placeholder={placeholder} value={value} onChangeText={onChangeText} />;
};

const StyledInput = styled(TextInput)`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default Input;