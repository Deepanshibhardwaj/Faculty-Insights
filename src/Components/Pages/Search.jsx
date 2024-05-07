import React, { useState } from 'react';
import './search.css';
import Banner from '../../Components/Pages/banner';
import FacultyInformation from './facultyInformation';


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
      <Banner/> 
      <FacultyInformation/>     
    </section>
  );
};

export default Search;
