
import React from 'react';
import { View } from 'react-native';
import Input from '../inputTelaLogin/Input'; 

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
  return (
    <View>
      <Input
        placeholder="E-mail"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
       
      />
    </View>
  );
};

export default EmailInput;
