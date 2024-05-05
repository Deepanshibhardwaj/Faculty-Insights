import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fdata from './data'; // Correct the import path

ReactDOM.render(
    <React.StrictMode>
        <App data={Fdata} /> {/* Pass the data as props */}
    </React.StrictMode>,
    document.getElementById('root')
);
