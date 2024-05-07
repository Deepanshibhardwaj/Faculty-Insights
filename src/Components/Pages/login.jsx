import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import collegeLogo from './collegelogo.jpeg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleContinue = async () => {
        try {
            // Make a POST request to your login API endpoint
            const response = await axios.post('http://localhost:8081/auth/student-login', {
                email,
                password
            });
            if (response.data.token) {
              localStorage.setItem('token', JSON.stringify(response.data.token));
              localStorage.setItem('user', JSON.stringify(response.data.student));
              navigate('/Search');
            } else {
              setError('Invalid email or password');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <img src={collegeLogo} alt="College Logo" className="college-logo"/>
                <h1>Login</h1>
                <div className="loginsignup-fields"></div>
                <input
                    type="email"
                    placeholder='Email/Username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleContinue}>Continue</button>
            {error && <p className="error-message">{error}</p>}
            <p className="loginsignup-login"> Login through your college mail</p>
        </div>
    );
}

export default Login;
