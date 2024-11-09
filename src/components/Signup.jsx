import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css'; // Reuse the same CSS as your login page
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Sending signup data to the server
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                contact: contact,
                email: email,
                password: password,
            });

            // Navigate to login or any other page after successful signup
            navigate('/login');
        } catch (err) {
            // Handle errors
            console.error('Signup failed:', err.response?.data || err.message);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="login-container"> {/* Reuse the same container */}
            <div className='login-box flex justify-center'>
                <div className='side-content'>
                    <h1>Join Us!</h1>
                    <ul>
                        <li>Enjoy seamless account creation.</li>
                        <li>Access all premium features.</li>
                        <li>Stay updated with the latest offers.</li>
                    </ul>
                </div>

                <div className="login-form">
                    <form onSubmit={handleSignup}>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>

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
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>

                        {error && <p className="text-danger">{error}</p>}

                        <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
