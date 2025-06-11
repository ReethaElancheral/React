import React from 'react'

import {useParams} from "react-router-dom";

const OptionalPara = () => {

 const { id } = useParams();
  return (
    <div>
      <h2>User Profile</h2>
      {id ? (
        <p>User ID: {id}</p>
      ) : (
        <p>No User ID provided.</p>
      )}
    </div>
  )
}

export default OptionalPara;
