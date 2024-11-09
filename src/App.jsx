import React from 'react';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
  <h1>Welcome to the App</h1>
  <Link to="/login">Login</Link>
  <Link to ="/signup"> signup</Link>
    </div>
  );
}

export default App;