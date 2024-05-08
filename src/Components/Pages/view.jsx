import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './faculty.css';

const View = ({ photo, name, cabinNumber, position, email, onClose, teacherCode }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/schedule/${teacherCode}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          setError(`Server responded with status code: ${error.response.status}`);
        } else if (error.request) {
          setError('No response received from server');
        } else {
          setError('Error setting up the request');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [teacherCode]); // Include teacherCode as a dependency

  return (
    <div className="overlay">
      <div className="view">
        <button className="close_button" onClick={onClose}>×</button>

        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <p>Cabin Number: {cabinNumber}</p>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
      </div>
      
      <div className="schedule-details">
        <h2>Schedule Details</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
            {Object.entries(data).map(([day, schedules]) => (
              <div key={day} className="day-schedule">
                <h3>{day}</h3>
                <ul>
                  {schedules.map((schedule, index) => (
                    <li key={index} className="schedue-item">
                      <p>Time Slot: {schedule.timeSlot}</p>
                      <p>Classroom: {schedule.classroom}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
