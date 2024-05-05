import React from 'react';
import ReactDOM from "react-dom";
import './faculty.css';
import Fdata from './data';
import Faculty from './Cards';
console.log(Fdata[0]);


ReactDOM.createRoot(root).render(
    <>
        <Faculty
            image={Fdata[0].image}
            fname={Fdata[0].fname}
            position={Fdata[0].position}
            Cabinno={Fdata[0].Cabinno}
            email={Fdata[0].email}
        />
        <Faculty
            image={Fdata[1].image}
            fname={Fdata[1].fname}
            position={Fdata[1].position}
            Cabinno={Fdata[1].Cabinno}
            email={Fdata[1].email}
        />
        <Faculty
            image={Fdata[2].image}
            fname={Fdata[2].fname}
            position={Fdata[2].position}
            Cabinno={Fdata[2].Cabinno}
            email={Fdata[2].email}
        />
        <Faculty
            image={Fdata[3].image}
            fname={Fdata[3].fname}
            position={Fdata[3].position}
            Cabinno={Fdata[3].Cabinno}
            email={Fdata[3].email}
        />
        <Faculty
            image={Fdata[4].image}
            fname={Fdata[4].fname}
            position={Fdata[4].position}
            Cabinno={Fdata[4].Cabinno}
            email={Fdata[4].email}
        />


    </>,

    document.getElementById('root')

);
export default Faculty;