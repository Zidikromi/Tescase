import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Search from '../components/Search';
import { PokemonProvider } from '../context/PokemonContext';
import Filter from '../components/filter';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='w-full'>
      <Navbar  />
      
      <Search onSearch={handleSearch} />
      <div className='mt-10'>
      <PokemonProvider>
        <Card searchQuery={searchQuery} />
        </PokemonProvider>
      </div>
    </div>
  );
}

export default Dashboard;
