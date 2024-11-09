import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Otherwise, render the protected component
    return children;
};

export default PrivateRoute;
