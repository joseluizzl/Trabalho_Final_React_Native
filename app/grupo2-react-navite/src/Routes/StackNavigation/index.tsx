import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../pages/HomeScreen/HomeScreen"
import GameScreen from "../../screens/GameScreen/GameScreen"
import ButtonTabs from "../ButttonTabs";
import { TelaLogin } from "../../pages/TelaLogin";
import { TelaCadastro } from "../../pages/TelaCadastro";



export type RootStackParamList = {
  TelaLogin: undefined;
  TelaCadastro: undefined;
  GameScreen:undefined;
  TabScreen: undefined; 
  
};

const Stack = createStackNavigator<RootStackParamList>();


export function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="TelaLogin" component={TelaLogin} /> 
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} /> 
      <Stack.Screen name="GameScreen" component={GameScreen} /> 
      <Stack.Screen name="TabScreen" component={ButtonTabs} /> 
    </Stack.Navigator>
  )
}