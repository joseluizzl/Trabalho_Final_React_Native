import React, { useEffect, useState } from 'react'
import { View, Image, Text, FlatList, Touchable, TouchableOpacity, ImageBackground } from 'react-native'
import { styles } from './styles';
import board from "../../assets/arena.jpg"
import { getPokemon, isValidPokemonId } from '../../services/pokeApi/pokemon';
import { Pokemon } from '../../models/pokemon';
import { ModalAttributes } from '../../Modal/ModalAttributes';
import { Card } from '../../components/card/card';

export const Board = () => {
  const [playerDeck, setPlayerDeck] = useState<Pokemon[]>([]);
  const [computerDeck, setComputerDeck] = useState<Pokemon[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [ modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectPokemon,setSelectPokemon] = useState<Pokemon | null>(null)
  const [selectStats,setSelectStats] = useState<number | null>(null)


  console.log("TESTE")

  
  const fetchPokemonDeck = async () => {
    const fetchPokemon = async (usedIds: Set<number>): Promise<Pokemon> => {
      let id: number;
      do {
        id = Math.floor(Math.random() * 10250) + 1;
      } while (!isValidPokemonId(id) || usedIds.has(id));
      usedIds.add(id);
      return getPokemon(id);
    };

    const usedIds = new Set<number>();

     const playerPromises = Array(6).fill(null).map(() => fetchPokemon(usedIds));
    const computerPromises = Array(6).fill(null).map(() => fetchPokemon(usedIds));

    const playerResults = await Promise.all(playerPromises);
    const computerResults = await Promise.all(computerPromises);

    setPlayerDeck(playerResults);
    setComputerDeck(computerResults);
  };

  useEffect(() => {
    fetchPokemonDeck();
  }, []);

 const handlePlay = () => {
  console.log("INICIO")
  if(selectStats !== null && selectPokemon){
    const computerPokemon = computerDeck[currentRound];
    const computerStat = computerPokemon.stats[Math.floor(Math.random() * computerPokemon.stats.length)].base_stat;

    if(selectStats  > computerStat){
      alert("Você ganhou!")
      console.log("Você ganhou!")
    }else if(selectStats  < computerStat){
      alert("Você perdeu!")
      console.log("Você perdeu")
    } else{
      alert("Empate!")
      console.log("Empate")
    }
    setModalVisible(false);
    setSelectStats(null);
    console.log("FINAL")
  }
 }
 return (
    <View style={styles.container}>
       
       <ImageBackground source={board} style={styles.img}>

       <View style={styles.container_computerDeck}>
        <FlatList 
          data={computerDeck}
          renderItem={({item}) => (      
              <Image source={{ uri: item.sprites.other["official-artwork"].front_default }} style={styles.deck_image} />   
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
 
    <View  style={styles.container_playerDeck}>
      <FlatList 
        data={playerDeck}
        renderItem={({item}) => (  
           
          <TouchableOpacity
          onPress={() =>    
            { 
              setSelectPokemon(item)
              setModalVisible(true)
            }
          }
          style={styles.container_playerDeck_touch}
          >          
            <Image source={{ uri: item.sprites.other["official-artwork"].front_default }} style={styles.deck_image} />   
          </TouchableOpacity> 
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
      </View>
      { modalVisible && selectPokemon && 
      <ModalAttributes
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      pokemon={selectPokemon}
      setSelectStats={setSelectStats}
      selectStats={selectStats}
      handlePlay={handlePlay}
      
      />}            
      </ImageBackground>
    </View>
  );

};