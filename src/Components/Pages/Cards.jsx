import React, { useEffect, useState } from 'react';
import './faculty.css';
import View from './view'; 
import axios from 'axios';

function Faculty({ photo, name, cabinNumber, position, email, teacherCode }) {
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    const handleClose = () => {
        setShowDetails(false);
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
                    teacherCode = {teacherCode}
                    onClose={handleClose} 
                />
            )}

            {/* Display schedule details */}
    
        </div>
    );
}

export default Faculty;
