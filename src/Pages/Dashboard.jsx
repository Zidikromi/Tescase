import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Search from '../components/Search';

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
        <Card searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default Dashboard;
