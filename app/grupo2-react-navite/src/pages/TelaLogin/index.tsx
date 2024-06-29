import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import Image1 from '../../assets/Design_sem_nome.png';
import LoadingGif from '../../assets/ash.gif'; 
import { apiUser } from '../../services/apiUser/index';
import { UserContext, UserProps } from '../../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmailInput from '../../components/email/EmailInput';
import PasswordInput from '../../components/password/PassowordInput';
import { Button } from '../../components/buttons';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

interface NavigationLoginProps {
  navigation: NavigationProp<any>
};

export function TelaLogin({ navigation }: NavigationLoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); 
  const { user, setUser } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getEmail = async (): Promise<string | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-email');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await getEmail();
      if (storedEmail !== null) {
        setEmail(storedEmail);
      }
    };
    fetchEmail();
  }, []);

  useFocusEffect(
    useCallback(() => {
    
      setEmail('');
      setPassword('');
    }, [])
  );

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !password) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Email inválido', 'Por favor, insira um email válido.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Senha inválida', 'A senha deve conter pelo menos 6 caracteres.');
      return;
    }

    try {
      const response = await apiUser.get('/');

      if (!Array.isArray(response.data)) {
        Alert.alert('Erro', 'Formato de resposta inválido da API');
        console.error('Formato de resposta inválido:', response.data);
        return;
      }

      const user = response.data.find(
        (user: { email: string; senha: string }) =>
          user.email === email && user.senha === password
      );

      if (!user) {
        Alert.alert(
          'Usuário não encontrado',
          'O e-mail ou a senha fornecida está incorreta.'
        );
        
        setEmail('');
        setPassword('');
        return;
      }

      setUser(user);

      try {
        const jsonValue = JSON.stringify(user.email);
        await AsyncStorage.setItem('my-email', jsonValue);
      } catch (error) {
        console.error(error);
      }

      setLoading(true); 
      setTimeout(() => {
        setLoading(false); 
        Alert.alert('Login realizado com sucesso');
        console.log(user.nomeUsuario);
        navigation.navigate('TabScreen', { screen: 'HomeScreen' });
      }, 2000); 

    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
    }
  };

  const handleCadastro = () => {
    navigation.navigate('TelaCadastro')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/Login.jpg')}
        resizeMode="cover"
      >
        <View style={styles.logo}>
          <Image source={Image1} style={styles.imageLogo} />
        </View>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Image source={LoadingGif} style={styles.loadingGif} />
          </View>
        ) : (
          <View style={styles.inputs}>
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </View>
        )}
        {!loading && (
          <View style={styles.buttons}>
            <Button title='Login' onPress={handleLogin} />
            <Button title='Cadastre-se aqui !' onPress={handleCadastro} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
}
