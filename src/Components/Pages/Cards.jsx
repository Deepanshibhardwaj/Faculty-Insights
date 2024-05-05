import React from 'react';

function Faculty(props) {
    
    return (
        
            <div className="facultys">
                <div className="faculty">
                    <img
                        src={props.image}
                        alt="myPic"
                        className="faculty_img"

                    />
                    <div className="faculty_info">
                        <span className="faculty_name">{props.fname}</span>
                        <h3 className="faculty_position" >{props.position}</h3>
                        <h3 className="faculty_cabin" >{props.Cabinno} </h3>
                        <h3 className="faculty_mail" >{props.email}</h3>



                    </div>


                </div>

            </div>

        

    )

}
export default Faculty;