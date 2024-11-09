import React, { useState } from 'react';
import axios from 'axios';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post('http://localhost:8080/api/auth/reset-password', {
                otp: otp,
                newPassword: newPassword,
            });

            // Assuming the server returns a success message
            setSuccessMessage(response.data.message || 'Password has been successfully reset. You can now log in.');

            // Optionally navigate to the login page after successful reset
            // navigate('/login');

        } catch (err) {
            console.error('Error resetting password:', err.response.data);
            setError('Failed to reset password. Please check your OTP and try again.');
        }
    };

    return (
        <div className="login-container">
            <div className='login-box flex justify-center'>
                <div className='side-content'>
                    <h1>Reset Your Password</h1>
                    <ul>
                        <li>Enter the OTP sent to your email.</li>
                        <li>Choose a new password.</li>
                    </ul>
                </div>

                <div className="login-form">
                    <form onSubmit={handleResetPassword}>
                        <div className="form-group mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input
                                type="text"
                                className="form-control"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                            <div id="otpHelp" className="form-text">
                                Enter the OTP sent to your registered email.
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                                special characters, or emoji.
                            </div>
                        </div>

                        {error && <div className="text-danger mb-3">{error}</div>}
                        {successMessage && <div className="text-success mb-3">{successMessage}</div>}

                        <input type="submit" className="btn btn-primary" value="Reset Password" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
