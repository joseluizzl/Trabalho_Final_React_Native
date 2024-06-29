import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
);

