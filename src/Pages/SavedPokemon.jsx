
import React from 'react';
import Navbar from '../components/Navbar';
import CardSave from '../components/CardSave';
import { PokemonProvider } from '../context/PokemonContext';


const SavedPokemon = () => {


  return (
    <div className='w-full'>
      {/* <Navbar /> */}
      <PokemonProvider>
      <CardSave/>
    </PokemonProvider>
    </div>
  );
};

export default SavedPokemon;
