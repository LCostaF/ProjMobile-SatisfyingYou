import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../style/globalStyles';

const Input = ({ value, onChangeText, secureTextEntry, validateFunction = () => {} }) => {
  const handleTextChange = (text) => {
    onChangeText(text);
    validateFunction(text);
  };

  return (
    <TextInput
      style={globalStyles.txtInput}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={handleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Input;
