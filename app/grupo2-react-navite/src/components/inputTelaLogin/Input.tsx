import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

interface InputProps extends TextInputProps {
  style?: object;
}

const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props}  />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e61025',
    marginVertical: 10,
    color:'#FFF'
    
    
  },
  
});

export default Input;
