import { useState, useEffect } from "react";
import axiosInstance from "../../api/Axios";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
    await axiosInstance.put(`/users/${id}`);
      setMessage("User Deleted");
    } catch (error) {
      setMessage("error Deleting User");
      console.error(error);
    }
  };

  return (
    <>
    <h2>8. DELETE Request: Delete user data by making a DELETE request. </h2>
      <h2>Delete User - Delete Method</h2>

      <form onSubmit={handleDelete}>

          <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="User ID"
        />
    
    
        <button type="submit">Delete</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
};

export default DeleteUser;
