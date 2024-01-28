import React, { useEffect, useState } from 'react';
import { GetTypes } from '../api';

const Filter = ({ onChange }) => {
  const [types, setTypes] = useState([]);

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetTypes();
        setTypes(result);
      } catch (error) {
        console.error('Error fetching Types data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredTypes = types.filter((type) => type.name !== 'unknown' && type.name !== 'shadow');

  return (
<div className="relative inline-block w-full text-gray-700">
  <select
    onChange={handleSelectChange}
    className="h-10 pl-5 pr-10 w-full bg-white border-2 border-gray-300 rounded-xl appearance-none focus:outline-none focus:border-red-500"
  >
    <option value="all">All</option>
    {filteredTypes.map((type, index) => (
      <option key={index} value={type.name}>
        {type.name}
      </option>
    ))}
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z"
      ></path>
    </svg>
  </div>
</div>

  );
};

export default Filter;