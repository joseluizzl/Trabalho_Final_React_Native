import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import InstructionsModal from '../../Modal/InstructionsModal/InstructionsModal';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';
import homeImage from '../../assets/home.png';
import pokeTrunfo from '../../assets/ash icon.png'
import exit from '../../assets/exit.png'
import byebye from '../../assets/icon2.gif'
import { UserContext } from '../../context/userContext';


interface NavigationHomeScreenProps {
  navigation: NavigationProp<any>
};

const HomeScreen: React.FC<NavigationHomeScreenProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false)
  const { user } = useContext(UserContext);

  function handleExit(){
    setImgVisible(true)
    setTimeout(()=> {
    navigation.navigate('TelaLogin')
    },1500)  
  }


  return (

    <ImageBackground
      source={homeImage}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.status_bar}>
        <Image source={pokeTrunfo}
        style={styles.status_img}
        />
        <Text style={styles.text_bar}>{user ? user.nomeUsuario : 'Usuário'}</Text>
        <Text style={styles.text_bar}>Lv.10</Text>
        <TouchableOpacity 
        onPress={handleExit}
        >
        <Image source={exit}
        style={[styles.status_img, styles.status_img_exit]}
        />
        </TouchableOpacity>
        
      </View>
   
      <View style={styles.container}>
      {imgVisible && 
        <Image source={byebye}
        style={styles.exit_gif}
        />}

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('GameScreen')} style={styles.button}>
          <Text style={styles.buttonText}>JOGAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}>INSTRUÇÕES</Text>
        </TouchableOpacity>
        </View>
        <InstructionsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
