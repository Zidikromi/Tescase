import React, { useEffect, useState } from 'react'
import { GetPokemon, } from '../api'
import { usePokemonContext } from '../context/PokemonContext'

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
    const [pokemonData, setPokemonData] = useState([])
    const [visiblePokemon, setVisiblePokemon] = useState([])
    const [visiblePokemonCount, setVisiblePokemonCount] = useState(30)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const { savedPokemon, savePokemon } = usePokemonContext()
    const [aliasInput, setAliasInput] = useState('')



    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const result = await GetPokemon(300)
                setPokemonData(result)
                setVisiblePokemon(result.slice(0, visiblePokemonCount))
                console.log(result)
            } catch (error) {
                console.error('Error fetching Pokémon data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [visiblePokemonCount])

    useEffect(() => {
 
        const filteredPokemon = pokemonData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )

    
        setVisiblePokemon(filteredPokemon.slice(0, visiblePokemonCount))
    }, [searchQuery, pokemonData, visiblePokemonCount])

    const loadMorePokemon = () => {
        setVisiblePokemonCount((prevCount) => prevCount + 30)
    }

    const handleSaveClick = (content) => {
        setSelectedPokemon({ ...content, alias: '' })
        document.getElementById('my_modal_2').showModal()
    }

    useEffect(() => {
        console.log('Saved Pokemon:', savedPokemon)
    }, [savedPokemon])


       const handleSavePokemon = () => {
        const aliasValue = aliasInput.trim()
        if (aliasValue) {
            const savedData = { ...selectedPokemon, alias: aliasValue }
            savePokemon(savedData)
            document.getElementById('my_modal_2').close()
        } else {
            console.error('Alias cannot be empty')
        }
    }

    return (
        <div>
            <div className='flex flex-wrap justify-center mx-20'>
                {visiblePokemon.map((content, i) => (
                    <div key={i} className="card w-72 bg-base-100 shadow-xl m-4">
                        <figure className=''>
                            <img
                                src={content.sprites.other['official-artwork'].front_default}
                                className='w-44 h-44'
                                alt={content.name}
                            />
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
                            <button
                                className="btn bg-red-600 hover:bg-red-800 text-white"
                                onClick={() => handleSaveClick(content)} // Step 4
                            >
                                Save
                            </button>                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Put an alias name to pokemon!</h3>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Example: Maman"
                                        className="input input-bordered w-full bg-gray-100 mt-2"
                                        value={aliasInput}
                                        onChange={(e) => setAliasInput(e.target.value)} // Step 3
                                    />                                    <button
                                        className='w-full bg-red-500 hover:bg-red-700 btn mt-5 text-white'
                                        onClick={handleSavePokemon} // Step 3
                                    >
                                        Save Pokemon
                                    </button>                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button></button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                ))}

            </div>
            <div className='py-10'>
            {!searchQuery && !isLoading && (
                <button className='btn flex justify-center mx-auto bg-red-500 hover:bg-red-700 text-white' onClick={loadMorePokemon}>Load More</button>
            )}
            </div>
        </div>

    )
}

export default Card
