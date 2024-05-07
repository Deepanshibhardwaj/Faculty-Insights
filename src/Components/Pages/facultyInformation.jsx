import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Faculty from './Cards';
import './faculty.css';

const FacultyInformation = () => {
    const [facultyData, setFacultyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    console.log(facultyData)

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {facultyData.map((faculty) => (
                <div key={faculty.id}>
                    <Faculty photo={faculty.photo} position={faculty.position} name={faculty.name} email={faculty.email} cabinNumber={faculty.cabinNumber}/>
                </div>
            ))}
        </div>
    );
};

export default FacultyInformation;
