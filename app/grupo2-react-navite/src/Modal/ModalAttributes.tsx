import { Modal, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Pokemon } from "../models/pokemon";
import { useState } from "react";
import { Card } from "../components/card2/card2";

interface ModalAttributesProps{
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectStats: number | null;
  setSelectStats: React.Dispatch<React.SetStateAction<number | null>>;
  handlePlay: () => void;
  pokemon: Pokemon;
  
}

export const ModalAttributes = ({modalVisible, setModalVisible,selectStats, setSelectStats, handlePlay, pokemon}
  : ModalAttributesProps
) => {
 
    return (
     <Modal
     animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         setModalVisible(false)
        }}
     >

      <View style={styles.centeredView} >
        <View style={styles.modalView}>
        <Card 
        pokemon={pokemon}
        selectStats={selectStats}
        setSelectStats={setSelectStats}
        />
        <View style={styles.listBtn}>
            <TouchableOpacity
            style={[styles.button]}
              onPress={() => {
                setModalVisible(false)
              }}
            >
              <Text>FECHAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.button]}
              onPress={() => handlePlay()}
            > 
              <Text>JOGAR</Text>
            </TouchableOpacity>
            </View>

       {/* <View >
        {selectStats && <Text>Status selecionados: {selectStats}</Text> }
          <Text >{pokemon.name}</Text>
            {pokemon.stats.map((stat, index) => (
            <TouchableOpacity
            key={index}
            onPress={()=> setSelectStats(stat.base_stat)}
            >
              <Text style={styles.atributos} key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}            
              </Text>
            </TouchableOpacity>
          ))}  
        </View>
          <View style={styles.listBtn}>
            <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(false)
              }}
            >
              <Text>FECHAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
              onPress={() => handlePlay()}
            > 
              <Text>JOGAR</Text>
            </TouchableOpacity>
            </View>*/}
        
        </View>
      </View>

     </Modal>
    );
};