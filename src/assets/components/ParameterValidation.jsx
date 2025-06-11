import React from 'react'
import {useParams} from "react-router-dom";


const ParameterValidation = () => {
   const { id, name } = useParams();

 
  const userId = id || '0';
  const userName = name || 'Guest';

  
  const isValidId = !isNaN(userId);
  const isValidName = typeof userName === 'string' && userName.trim().length > 0;

 
  if (!isValidId || !isValidName) {
    return (
      <div>
        <h2>Invalid User</h2>
        <p style={{ color: 'red' }}>
          Error: Invalid ID or Name in URL.
        </p>
        <p>Go back to the <a href="/">Home page</a>.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>User Name:</strong> {userName}</p>
    </div>
  );
}

export default ParameterValidation;
