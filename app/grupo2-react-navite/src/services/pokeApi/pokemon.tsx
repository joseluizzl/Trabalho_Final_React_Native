import axios from 'axios';
import { Pokemon } from '../../models/pokemon';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = async (id: number): Promise<Pokemon> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data as Pokemon;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isValidPokemonId = (id: number): boolean => {
  return (id >= 1 && id <= 898) || (id >= 10001 && id <= 10249);
};