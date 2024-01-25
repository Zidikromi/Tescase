
import React from 'react';
import Navbar from '../components/Navbar';
import CardSave from '../components/CardSave';
import { PokemonProvider } from '../context/PokemonContext';


const SavedPokemon = () => {


  return (
    <>
      <Navbar />
      <PokemonProvider>
      <CardSave/>
    </PokemonProvider>
    </>
  );
};

export default SavedPokemon;
