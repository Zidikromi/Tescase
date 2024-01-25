import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Search from '../components/Search';
import { PokemonProvider } from '../context/PokemonContext';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      <div className='mt-10'>
      <PokemonProvider>
        <Card searchQuery={searchQuery} />
        </PokemonProvider>
      </div>
    </>
  );
}

export default Dashboard;
