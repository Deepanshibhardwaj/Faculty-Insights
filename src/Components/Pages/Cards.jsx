import React from 'react';
import './faculty.css';

function Faculty({photo,name,cabinNumber,position,email}) {
    
    return (
        
            <div className="facultys">
                <div className="faculty">
                    <img
                        src={photo}
                        alt="myPic"
                        className="faculty_img"

                    />
                    <div className="faculty_info">
                        <span className="faculty_name">{name}</span>
                        <h3 className="faculty_position" >{position}</h3>
                        <h3 className="faculty_cabin" >{cabinNumber} </h3>
                        <h3 className="faculty_mail" >{email}</h3>
                    </div>


                </div>

            </div>
    )

}
export default Faculty;