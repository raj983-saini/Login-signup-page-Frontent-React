import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email: email,
                password: password,
                remember: rememberMe,
            });

            const token = response.data;

            // Store the token in localStorage or sessionStorage depending on "Remember Me"
            if (rememberMe) {
                localStorage.setItem('jwtToken', token);
            } else {
                sessionStorage.setItem('jwtToken', token);
            }
      
            // Redirect to a protected route (e.g., /welcome)
            navigate('/welcome');
        } catch (err) {
            // Handle errors
            console.error('Login failed:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className='login-box flex justify-center'>
                <div className='side-content'>
                    <h1>Welcome Back!</h1>
                    <ul>
                        <li>Reserve parking spots easily.</li>
                        <li>Get real-time space availability.</li>
                        <li>Secure and reliable access.</li>
                    </ul>
                </div>

                <div className="login-form">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                                special characters, or emoji.
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="form-group mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                            <div>
                            <Link to="/send-otp" className="text-decoration-none">Forgotten password?</Link>
                            </div>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
