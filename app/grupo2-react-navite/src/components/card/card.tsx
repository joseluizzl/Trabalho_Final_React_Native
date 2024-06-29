import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { Pokemon } from '../../models/pokemon';
import styles from './styles';
import icon from '../../assets/attack.png';

interface CardProps {
  pokemon: Pokemon;
  onAttributeSelect: (attribute: string) => void;
}

export const Card: React.FC<CardProps> = ({ pokemon, onAttributeSelect }) => {
  const [loading, setLoading] = useState(true);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'normal': return { backgroundColor: 'rgba(168, 168, 120, 0.7)', borderColor: '#6D6D4E' };
      case 'fire': return { backgroundColor: 'rgba(240, 128, 48, 0.7)', borderColor: '#9C531F' };
      case 'water': return { backgroundColor: 'rgba(104, 144, 240, 0.7)', borderColor: '#445E9C' };
      case 'electric': return { backgroundColor: 'rgba(248, 208, 48, 0.7)', borderColor: '#A1871F' };
      case 'grass': return { backgroundColor: 'rgba(120, 200, 80, 0.7)', borderColor: '#4E8234' };
      case 'ice': return { backgroundColor: 'rgba(152, 216, 216, 0.7)', borderColor: '#638D8D' };
      case 'fighting': return { backgroundColor: 'rgba(192, 48, 40, 0.7)', borderColor: '#7D1F1A' };
      case 'poison': return { backgroundColor: 'rgba(160, 64, 160, 0.7)', borderColor: '#682A68' };
      case 'ground': return { backgroundColor: 'rgba(224, 192, 104, 0.7)', borderColor: '#927D44' };
      case 'flying': return { backgroundColor: 'rgba(168, 144, 240, 0.7)', borderColor: '#6D5E9C' };
      case 'psychic': return { backgroundColor: 'rgba(248, 88, 136, 0.7)', borderColor: '#A13959' };
      case 'bug': return { backgroundColor: 'rgba(168, 184, 32, 0.7)', borderColor: '#6D7815' };
      case 'rock': return { backgroundColor: 'rgba(184, 160, 56, 0.7)', borderColor: '#786824' };
      case 'ghost': return { backgroundColor: 'rgba(112, 88, 152, 0.7)', borderColor: '#493963' };
      case 'dragon': return { backgroundColor: 'rgba(112, 56, 248, 0.7)', borderColor: '#4924A1' };
      case 'dark': return { backgroundColor: 'rgba(112, 88, 72, 0.7)', borderColor: '#49392F' };
      case 'steel': return { backgroundColor: 'rgba(184, 184, 208, 0.7)', borderColor: '#787887' };
      case 'fairy': return { backgroundColor: 'rgba(238, 153, 172, 0.7)', borderColor: '#9B6470' };
      default: return { backgroundColor: 'rgba(168, 168, 120, 0.7)', borderColor: '#6D6D4E' };
    }
  };

  const type = pokemon.types[0].type.name;
  const { backgroundColor, borderColor } = getTypeColor(type);

  const imageUrl = pokemon.sprites.other.showdown.front_default
    ? pokemon.sprites.other.showdown.front_default
    : pokemon.sprites.other['official-artwork'].front_default;

  return (
    <ScrollView>
      <View style={[styles.card, { backgroundColor, borderColor }]}>
        {!loading && (
          <>
            <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
            <Text style={styles.type}>{pokemon.types.map(t => t.type.name).join(', ')}</Text>
          </>
        )}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#c034eb" style={styles.activityIndicator} />
          </View>
        )}
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        {!loading && (
          <View style={styles.container_attributes}>
            {pokemon.stats.map(stat => (
              <TouchableOpacity key={stat.stat.name}
                onPress={() => onAttributeSelect(stat.stat.name)}
                style={styles.attributes_btn}>
                <Image source={icon} style={styles.attributes_img} />
                <Text style={styles.attributes_text}>{stat.stat.name.toUpperCase()}: {stat.base_stat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Card;