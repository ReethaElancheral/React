import React from 'react'
import {useParams} from "react-router-dom";

const UserProfiletwo = () => {

    const {id} = useParams();

  return (
   <>
<h2>User Profile</h2>
<p>User ID: {id}</p>

   </>
  )
}

export default UserProfiletwo;
