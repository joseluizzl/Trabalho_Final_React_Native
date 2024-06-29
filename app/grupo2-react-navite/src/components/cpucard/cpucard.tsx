import React, { useState } from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import { Pokemon } from '../../models/pokemon';
import styles from './styles';

interface CpuCardProps {
  pokemon: Pokemon;
}

export const CpuCard: React.FC<CpuCardProps> = ({ pokemon }) => {
  const [loading, setLoading] = useState(true);

  const imageUrl = pokemon.sprites.other.showdown.front_default
    ? pokemon.sprites.other.showdown.front_default
    : pokemon.sprites.other['official-artwork'].front_default;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
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
    </View>
  );
};

export default CpuCard;