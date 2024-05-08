import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import collegeLogo from './collegelogo.jpeg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role is student
    const [error, setError] = useState('');

    const handleContinue = async () => {
        try {
            // Make a POST request to your login API endpoint with role included
            if(role == 'student'){
                const response = await axios.post('http://localhost:8081/auth/student-login', {
                    email,
                    password,
                });
                if (response.data.token) {
                  localStorage.setItem('token', JSON.stringify(response.data.token));
                  localStorage.setItem('user', JSON.stringify(response.data.user));
                  navigate('/Search');
                } else {
                  setError('Invalid email or password');
                }
            } else{
                const response = await axios.post('http://localhost:8081/auth/teacher-login', {
                    email,
                    password,
                });
                if (response.data.token) {
                  localStorage.setItem('token', JSON.stringify(response.data.token));
                  localStorage.setItem('user', JSON.stringify(response.data.user));
                  navigate('/Search');
                } else {
                  setError('Invalid email or password');
                }
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
                <div className='radiocss'>
                    <label>
                        <input
                            type="radio"
                            value="student"
                            checked={role === 'student'}
                            onChange={() => setRole('student')}
                        />
                        Student
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="teacher"
                            checked={role === 'teacher'}
                            onChange={() => setRole('teacher')}
                        />
                        Teacher
                    </label>
                </div>
            </div>
            <button onClick={handleContinue}>Continue</button>
            {error && <p className="error-message">{error}</p>}
            <p className="loginsignup-login"> Login through your college mail</p>
        </div>
    );
}

export default Login;
