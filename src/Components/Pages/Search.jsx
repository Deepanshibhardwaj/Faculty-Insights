import React, { useState, useEffect } from 'react';
import './search.css';
import Banner from '../../Components/Pages/banner';
import Faculty from './Cards';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [facultyData, setFacultyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/information/teachers');
        setFacultyData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {

    const filtered = facultyData.filter((faculty) =>
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, facultyData]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <Banner />
      <div className="faculty-container">
        {filteredData.map((faculty) => (
          <div key={faculty.id} className="faculty-item">
            <Faculty
              photo={faculty.photo}
              position={faculty.position}
              name={faculty.name}
              email={faculty.email}
              cabinNumber={faculty.cabinNumber}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
