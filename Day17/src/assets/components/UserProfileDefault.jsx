import React from 'react'
import {useParams} from "react-router-dom";

const UserProfileDefault = () => {
    
  const { id, name } = useParams();


  const userId = id || '0';
  const userName = name || 'Guest';

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>User Name:</strong> {userName}</p>
    </div>
  );
}

export default UserProfileDefault;
