import React from 'react';

const View = ({ photo, name, cabinNumber, position, email }) => {
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>Cabin Number: {cabinNumber}</p>
      <p>Position: {position}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default View;
