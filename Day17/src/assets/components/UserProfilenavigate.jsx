import React from 'react'
import {useParams} from "react-router-dom";

const UserProfilenavigate = () => {
   const { id, name } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>User ID:</strong> {id}</p>
      <p><strong>User Name:</strong> {name}</p>
    </div>
  )
}

export default UserProfilenavigate;
