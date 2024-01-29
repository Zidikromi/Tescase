import React, { useContext, useEffect } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const typeColorMap = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
    unknown: '#999999',
    shadow: '#555555',
}

const CardSave = () => {
  const { savedPokemon, deletePokemon } = usePokemonContext();

  const handleDelete = (pokemonAlias) => {
    deletePokemon(pokemonAlias);
    toast.success( `${pokemonAlias} Deleted!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  if (savedPokemon.length === 0) {
    return <div className=' text-gray-600 flex justify-center'>No saved Pokemon.</div>;
  }

  return (
    <div>
      <div className='flex flex-wrap justify-center mx-20'>
        {savedPokemon.map((content, i) => (
          <div key={i} className="card w-72 bg-base-100 shadow-xl m-4">
            
              <figure className='mt-10'>
                <img
                  src={content.sprites.other.dream_world.front_default}
                  className='w-44 h-44'
                  alt={content.name}
                />
              </figure>
           
            <div className="card-body">
              <h2 className="card-title justify-center font-bold">
                {content.alias}
              </h2>
              <p className='text-gray-400 text-sm font-bold'>Height: <span className='text-black'>{content.height / 10} m</span></p>
              <p className='text-gray-400 text-sm font-bold'>Weight: <span className='text-black'>{content.weight / 10} Kg</span></p>
              <ul className='flex gap-2'>
                {content.types.map((type, index) => (
                  <li
                    className="badge font-bold text-white text-center h-5 text-xs rounded-2xl"
                    key={index}
                    style={{ backgroundColor: typeColorMap[type.type.name] || '#CCCCCC' }}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
              <button
                className='btn bg-red-500 hover:bg-red-700 text-white'
                onClick={() => handleDelete(content.alias)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce/>
    </div>
  );
};

export default CardSave;