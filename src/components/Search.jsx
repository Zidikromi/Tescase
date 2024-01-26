import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search Query:', event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    console.log('Performing Search:', searchQuery);
  };

  return (
    <div className='flex justify-between mt-5 mx-32'>
      <div>
        <select className="select select-bordered rounded-md w-44">
          <option disabled selected>Fire</option>
        </select>
      </div>
      <div className='flex'>
      <input
        type="text"
        placeholder="Search Pokemon"
        className="input border-gray-500 rounded-tl-[20px] rounded-bl-[20px] rounded-br-none rounded-tr-none w-full max-w-xs "
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className='btn rounded-tl-none rounded-bl-none rounded-br-2xl rounded-tr-2xl bg-red-500 border-gray-500 hover:bg-red-700' onClick={handleSearch}>
        <IoSearch size={20} color='white' />
      </button>
      </div>
    </div>
  );
}

export default Search;