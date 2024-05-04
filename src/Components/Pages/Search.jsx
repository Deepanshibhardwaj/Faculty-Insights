import React, { useState } from 'react';
import './search.css';
import {IoSearchOutline} from 'react-icons/io5';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="s-wrapper">
      <div className="s-container">
        <img src="./logo3.png" alt="logo" width={500} />
        <div className=" input-box">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            onChange={handleSearch}
            placeholder="Search Faculty"
          />
           

        </div>
      </div>
      
      
    </section>
  );
};

export default Search;
