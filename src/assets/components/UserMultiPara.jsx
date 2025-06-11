import React from 'react'
import {useParams} from "react-router-dom"

const UserMultiPara = () => {

    const{id,name}=useParams();

  return (
   
    <>
    <h2>User Profile with Multi Parameters</h2>
    <p>User ID: {id}</p>
    <p>User Name: {name}</p>
    
    </>
  )
}

export default UserMultiPara;
