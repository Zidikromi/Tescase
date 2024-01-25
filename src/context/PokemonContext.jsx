import React, { createContext, useContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [savedPokemon, setSavedPokemon] = useState(() => {
    // Retrieve saved Pokemon from local storage on initial load
    const savedPokemonFromStorage = localStorage.getItem('savedPokemon');
    return savedPokemonFromStorage ? JSON.parse(savedPokemonFromStorage) : [];
  });

  const savePokemon = (pokemon) => {
    setSavedPokemon((prevSavedPokemon) => [...prevSavedPokemon, pokemon]);
  };

  useEffect(() => {
    // Update local storage whenever savedPokemon changes
    localStorage.setItem('savedPokemon', JSON.stringify(savedPokemon));
  }, [savedPokemon]);

  return (
    <PokemonContext.Provider value={{ savedPokemon, savePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);