import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaLogin } from '../../pages/TelaLogin';
import { TelaCadastro } from '../../pages/TelaCadastro';
import { MyStack } from '../StackNavigation';
import { Image } from 'react-native';
import iconHome from '../../assets/regras.png';
import iconCreditos from '../../assets/credito.jpg';
import { Creditos } from '../../pages/Creditos';
import { styles } from './styles';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Creditos: undefined;
  HomeScreen: undefined;
  TelaLogin:undefined;

};

export default function ButtonTabs() {

    return (
        <Tab.Navigator> 
          <Tab.Screen 
          name="HomeScreen" component={HomeScreen} 
          options={{  tabBarIcon: () => (
            <Image source={iconHome} style={styles.icons} />
          ), headerShown: false }} 
          />
           <Tab.Screen 
          name="Creditos" 
          component={Creditos} 
          options={{
            tabBarIcon: () => (
              <Image source={iconCreditos} style={styles.icons} />
            ),
            headerShown: false,
          }} 
        />
      </Tab.Navigator>
    );
}




