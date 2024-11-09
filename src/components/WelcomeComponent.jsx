import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth'; // Adjust the path as necessary

const WelcomeComponent = () => {
//   const [welcomeMessage, setWelcomeMessage] = useState('');

//   useEffect(() => {
//     const fetchWelcomeMessage = async () => {
//       const token = getToken(); // Get the token from storage
//       try {
//         const response = await axios.get('/api/auth/welcome', {
//           headers: {
//             Authorization: token // Include token in the headers
//           }
//         });
//         setWelcomeMessage(response.data); // Set the welcome message in state
//       } catch (error) {
//         console.error('Error fetching welcome message:', error);
//         setWelcomeMessage('Error fetching welcome message. Please log in again.');
//       }
//     };

//     fetchWelcomeMessage();
//   }, []);

  return <div>
    {/* {
    welcomeMessage
  } */}
  
  hello</div>;
};

export default WelcomeComponent;
