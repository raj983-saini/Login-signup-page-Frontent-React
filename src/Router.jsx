import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import App from './App'; 
import WelcomeComponent from './components/WelcomeComponent';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Signup from './components/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
  {
    path: "/signup",
    element: <Signup/>,
  },

  {
    path :"/send-otp",
    element : <ForgotPassword/>,
  },
  {
    path :"/reset-password",
    element : <ResetPassword/>,
  },
  {
    path: "/welcome",
    element: (
      <PrivateRoute>
        <WelcomeComponent />
      </PrivateRoute>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router; 
