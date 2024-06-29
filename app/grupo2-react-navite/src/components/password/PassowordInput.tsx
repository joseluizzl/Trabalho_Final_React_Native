import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Input from '../inputTelaLogin/Input'; 
import styles from './styles';

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword, showPassword, togglePasswordVisibility }) => {
  return (
    <View style={styles.passwordContainer}>
      <Input
        style={{ flex: 1 }}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
        <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
