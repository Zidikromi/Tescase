import axios from "axios";
const baseUrl = 'https://pokeapi.co/api/v2/';

export const GetPokemon = async (initialCount = 30, offset = 0) => {
  try {
    const pokemonList = await axios.get(`${baseUrl}pokemon/?limit=${initialCount}&offset=${offset}`);
    const results = pokemonList.data.results;
    const pokemonData = await Promise.all(
      results.map(async (pokemon) => {
        const detailedPokemon = await axios.get(pokemon.url);
        return detailedPokemon.data;
      })
    );

    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};


export const GetTypes = async () => {

    const TypeList = await axios.get(`${baseUrl}type`);
    const results = TypeList.data.results
    return results;
};



