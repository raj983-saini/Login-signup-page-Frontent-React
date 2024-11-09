import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            await axios.post('http://localhost:8080/api/auth/send-otp', JSON.stringify({ email }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // On success, you can show a success message
            setSuccessMessage('OTP sent successfully! Please check your email.');
navigate('/reset-password');
            // Optionally navigate to the Reset Password page
            // navigate('/reset-password');
        } catch (err) {
            console.error('Error sending OTP:', err.response.data);
            setError('Failed to send OTP. Please check the email address.');
        }
    };

    return (
        <div className="login-container">
            <div className='login-box flex justify-center'>
                <div className='side-content'>
                    <h1>Forgot Password</h1>
                    <ul>
                        <li>Enter your registered email to receive an OTP.</li>
                    </ul>
                </div>

                <div className="login-form">
                    <form onSubmit={handleSendOtp}>
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
                                We'll send you an OTP to this email address.
                            </div>
                        </div>

                        {error && <div className="text-danger mb-3">{error}</div>}
                        {successMessage && <div className="text-success mb-3">{successMessage}</div>}

                        <input type="submit" className="btn btn-primary" value="Send OTP" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
