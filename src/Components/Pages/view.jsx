import React from 'react';
import './faculty.css';

const View = ({ photo, name, cabinNumber, position, email,onClose  }) => {
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
    </div>
  );
};

export default View;
