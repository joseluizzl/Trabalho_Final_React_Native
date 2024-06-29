import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from '../CamposInput/styles'

interface InputFieldProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};
