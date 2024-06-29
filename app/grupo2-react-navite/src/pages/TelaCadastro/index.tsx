import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import {apiUser} from '../../services/apiUser/index';
//import { IUser } from '../../../services/apiUser/index';
import { useNavigation } from '@react-navigation/native';
import Image1 from '../../assets/Design_sem_nome.png';
import fundo from '../../assets/TelaFundoCadastro.jpg';
import  { Button }  from '../../components/buttons'; 
import { InputField } from '../../components/CamposInput';

type NavigationProps = {
    navigate: (routeName: string) => void
  };

export function TelaCadastro(){

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');

    const navigation = useNavigation<NavigationProps>();

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }
    
    const handleCadastro = async () => {
        
        if (!nomeCompleto || !email || !senha || !nomeUsuario) {
            Alert.alert('Todos os campos são obrigatórios')
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert('Email inválido');
            return;
        }

        if (senha.length < 6) {
            Alert.alert(
              'Senha inválida',
              'A senha deve conter pelo menos 6 caracteres.'
            );
            return;
          }
       
        try {
            const response = await apiUser.post('/', {
                nomeCompleto,
                email,
                senha,
                nomeUsuario
            },);

            if (response.data.usuarioExistente) {
                Alert.alert('Usuário já está cadastrado');
            } else {
                Alert.alert('Usuário cadastrado com sucesso');
                navigation.navigate('TelaLogin');
            }

            } catch (error) {
                Alert.alert('Ocorreu um erro ao tentar cadastrar o usuário');
                console.error(error);
            }
    };

             const handleVoltar = () => {
                 navigation.navigate('TelaLogin')
             }

    return (
        <View style={styles.container}>
        <ImageBackground 
            source={fundo}
            resizeMode="cover"
            style={styles.imageBackground}
        >
            <View style={styles.container2}>
            <View style={styles.logo}>
                 <Image source={Image1} style={styles.imageLogo} />
            </View>
            <View>
            <InputField
              placeholder="Nome completo"
              value={nomeCompleto}
              onChangeText={setNomeCompleto}
            />
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <InputField
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <InputField
              placeholder="Nome de usuário"
              value={nomeUsuario}
              onChangeText={setNomeUsuario}
            />
          </View>
            <View style={styles.buttons}>
                <Button title='Voltar' onPress={handleVoltar} />
                <Button title='Cadastrar' onPress={handleCadastro}/>
            </View>
            </View>
        </ImageBackground>
    </View>
    );
}