import React, { useEffect, useState } from 'react';
import { GetPokemon, } from '../api';

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

const Card = ({ searchQuery }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [visiblePokemon, setVisiblePokemon] = useState([]);
    const [visiblePokemonCount, setVisiblePokemonCount] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await GetPokemon(300);
          setPokemonData(result);
          setVisiblePokemon(result.slice(0, visiblePokemonCount));
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [visiblePokemonCount]);
  
    useEffect(() => {
      // Filter the Pokemon based on the search query
      const filteredPokemon = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      // Update the visible Pokemon with the filtered results
      setVisiblePokemon(filteredPokemon.slice(0, visiblePokemonCount));
    }, [searchQuery, pokemonData, visiblePokemonCount]);
  
    const loadMorePokemon = () => {
      setVisiblePokemonCount((prevCount) => prevCount + 30);
    };

    return (
        <div>
        <div className='flex flex-wrap justify-center mx-20'>
        {visiblePokemon.map((content, i) => (
                <div key={i} className="card w-72 bg-base-100 shadow-xl m-4"> 
                    <figure className=''>
                        <img src={content.sprites.other.dream_world.front_default} className='w-44 h-44' alt={content.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-bold">
                            {content.name}
                        </h2>
                        <p className='text-gray-400 text-sm font-bold'>Height: <span className='text-black'>{content.height / 10} m</span></p>
                        <p className='text-gray-400 text-sm font-bold'>Weight: <span className='text-black'>{content.weight / 10} Kg</span></p>
                        <p className='text-gray-400 text-sm font-bold'>Types:</p>
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
                        <button className="btn bg-red-600 hover:bg-red-800 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Save</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Input name alias for the Pokemon.!</h3>
                                <input type="text" className='input border-black w-full' name="" id="" />
                                <div className="modal-action">
                                    <form method="dialog">
                                        
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            ))}
          
        </div>
        <div className='py-10'>
        {!searchQuery && ( 
          isLoading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <button className='btn flex justify-center mx-auto bg-red-500 hover:bg-red-700 text-white' onClick={loadMorePokemon}>Load More</button>
          )
        )}
            </div>
        </div>

    );
};

export default Card;
