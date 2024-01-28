import React, { createContext, useContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [savedPokemon, setSavedPokemon] = useState(() => {
    const savedPokemonFromStorage = localStorage.getItem('savedPokemon');
    return savedPokemonFromStorage ? JSON.parse(savedPokemonFromStorage) : [];
  });

  const savePokemon = (pokemon) => {
    setSavedPokemon((prevSavedPokemon) => [...prevSavedPokemon, pokemon]);
  };

  const deletePokemon = (pokemonAlias) => {
    setSavedPokemon((prevSavedPokemon) =>
      prevSavedPokemon.filter((pokemon) => pokemon.alias !== pokemonAlias)
    );
  };
  

  useEffect(() => {
    localStorage.setItem('savedPokemon', JSON.stringify(savedPokemon));
  }, [savedPokemon]);

  return (
    <PokemonContext.Provider value={{ savedPokemon, savePokemon, deletePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
