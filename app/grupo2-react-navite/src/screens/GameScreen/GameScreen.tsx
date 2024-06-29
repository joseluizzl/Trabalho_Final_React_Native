import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, Button, Alert, ImageBackground } from 'react-native';
import { getPokemon, isValidPokemonId } from '../../services/pokeApi/pokemon';
import { Pokemon } from '../../models/pokemon';
import { Card } from '../../components/card/card';
import { CpuCard } from '../../components/cpucard/cpucard';
import styles from './styles';
import { UserContext, UserProps } from '../../context/userContext';

export const GameScreen: React.FC = () => {
  const [playerDeck, setPlayerDeck] = useState<Pokemon[]>([]);
  const [computerDeck, setComputerDeck] = useState<Pokemon[]>([]);
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const { user } = useContext(UserContext);

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

    const playerPromises = Array(7).fill(null).map(() => fetchPokemon(usedIds));
    const computerPromises = Array(7).fill(null).map(() => fetchPokemon(usedIds));

    const playerResults = await Promise.all(playerPromises);
    const computerResults = await Promise.all(computerPromises);

    setPlayerDeck(playerResults);
    setComputerDeck(computerResults);
  };

  useEffect(() => {
    fetchPokemonDeck();
  }, []);

  const handleAttributeSelect = (attribute: string, index: number) => {
    setSelectedAttribute(attribute);
    compareAttributes(attribute, index);
  };

  const compareAttributes = (attribute: string, index: number) => {
    const playerPokemon = playerDeck[index];
    const computerPokemon = computerDeck[currentRound];

    const playerStat = playerPokemon.stats.find(stat => stat.stat.name === attribute)?.base_stat || 0;
    const computerStat = computerPokemon.stats.find(stat => stat.stat.name === attribute)?.base_stat || 0;

    let message = `Você escolheu o atributo ${attribute.toUpperCase()}:\n\n`;
    if (playerStat > computerStat) {
      message += `Sua ${attribute.toUpperCase()}: ${playerStat} > ${computerStat}\nVocê venceu esta rodada!`;
      setPlayerScore(prevScore => prevScore + 1);
    } else if (playerStat < computerStat) {
      message += `Sua ${attribute.toUpperCase()}: ${playerStat} < ${computerStat}\nVocê perdeu esta rodada!`;
      setComputerScore(prevScore => prevScore + 1);
    } else {
      message += `Seu ${attribute.toUpperCase()}: ${playerStat} = ${computerStat}\nEmpate!`;
    }

    Alert.alert("Resultado da Rodada", message);

    const newPlayerDeck = playerDeck.filter((_, i) => i !== index);
    setPlayerDeck(newPlayerDeck);

    handleNextRound();
  };

  const handleNextRound = () => {
    if (currentRound < 6) {
      setCurrentRound(prevRound => prevRound + 1);
      setSelectedAttribute(null);
    } else {
      const winner = playerScore > computerScore ? 'Você venceu o jogo!' : playerScore < computerScore ? 'Você perdeu o jogo!' : 'O jogo empatou!';
      Alert.alert(winner);
      handleReloadCards();
    }
  };

  const handleReloadCards = () => {
    fetchPokemonDeck();
    setCurrentRound(0);
    setSelectedAttribute(null);
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <ImageBackground source={require('../../assets/arena.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {playerDeck.length > 0 && computerDeck.length > 0 && (
          <View style={styles.gameContainer}>
            <View style={styles.opponentCardContainer}>
              <CpuCard pokemon={computerDeck[currentRound]} />
            </View>
            <ScrollView horizontal contentContainerStyle={styles.playerDeckContainer}>
              {playerDeck.map((pokemon, index) => (
                <View key={pokemon.id} style={styles.cardWrapper}>
                  <Card pokemon={pokemon} onAttributeSelect={(attribute) => handleAttributeSelect(attribute, index)} />
                </View>
              ))}
            </ScrollView>
            <Text style={styles.score}>Placar: {user ? user.nomeUsuario : 'Usuário'} {playerScore} - {computerScore} Computador</Text>
          </View>
        )}
        <Button title="Reset Game" onPress={handleReloadCards} />
      </View>
    </ImageBackground>
  );
};

export default GameScreen;