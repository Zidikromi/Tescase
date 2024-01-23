import axios from "axios";
const baseUrl = 'https://pokeapi.co/api/v2/';

export const GetPokemon = async (initialCount = 30, offset = 0) => {
  try {
    // Fetch the list of Pokémon with the given limit and offset
    const pokemonList = await axios.get(`${baseUrl}pokemon/?limit=${initialCount}&offset=${offset}`);

    // Extract the results from the response
    const results = pokemonList.data.results;

    // Fetch detailed information for each Pokémon in parallel
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



