import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import image from '../../assets/home.png'
import iconAllan from '../../assets/charmander.png'
import iconDaniel from '../../assets/bullbasaur.png'
import iconJose from '../../assets/pikachu.png'
import iconLeilson from '../../assets/squirtle.png'
import iconLuciano from '../../assets/meowth.png'
export function Creditos() {

    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.backgroundImage}
        >   
        <View style={styles.container}>
            <Text style={styles.title}>Créditos</Text>
           
            <Text style={styles.integrantes}>Desenvolvido pelo Grupo 2</Text>
            
            <View style={styles.container_img}>
                <Image style={styles.img} source={iconAllan}/>
                <Text style={styles.name}>Allan Lima Angelo</Text>
            </View>
            <View style={styles.container_img}>
                <Image style={styles.img} source={iconDaniel}/>
                <Text style={styles.name}>Daniel Ribeiro</Text>
            </View>
            <View style={styles.container_img}>
              <Image style={styles.img} source={iconJose}/>
                <Text style={styles.name}>José Luiz da Silva Barbosa</Text>
            </View>
            <View style={styles.container_img}>
                <Image style={styles.img} source={iconLeilson}/>
                <Text style={styles.name}>Leilson Marques Felicio</Text>
            </View>
            <View style={styles.container_img}>
                <Image style={styles.img} source={iconLuciano}/>
                <Text style={styles.name}>Luciano Costa</Text>
            </View>
        </View>
        </ImageBackground>
    )
}