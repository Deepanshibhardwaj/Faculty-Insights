import React, { useState } from 'react';
import './faculty.css';
import View from './view'; 

function Faculty({ photo, name, cabinNumber, position, email }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    const handleClose = () => {
        setShowDetails(false); // Close the detailed view page
    };

    return (
        <div className="facultys">
             <div className={`faculty ${showDetails ? 'blur' : ''}`}>
                <img
                    src={photo}
                    alt="myPic"
                    className="faculty_img"
                />
                <div className="faculty_info">
                    <span className="faculty_name">{name}</span>
                    <h3 className="faculty_position">{position}</h3>
                    <h3 className="faculty_cabin">{cabinNumber}</h3>
                    <h3 className="faculty_mail">{email}</h3>
                    <button className="view_more_button" onClick={handleClick}>View More</button>
                </div>
            </div>
            {showDetails && (
                <View
                    photo={photo}
                    name={name}
                    cabinNumber={cabinNumber}
                    position={position}
                    email={email}
                    onClose={handleClose} 
                 
                />
            )}
        </div>
    );
}

export default Faculty;
