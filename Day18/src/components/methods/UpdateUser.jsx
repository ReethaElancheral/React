import { useState, useEffect } from "react";
import axiosInstance from "../../api/Axios";

const UpdateUser = () => {
  const [id, setId] = useState("");
    const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put(`/users/${id}`, { name});
      setMessage(`User Updated : ${response.data.name}`);
    } catch (error) {
      setMessage("error Updating User");
      console.error(error);
    }
  };

  return (
    <>
    <h2>7. PUT Request: Update user data by making a PUT request. </h2>
      <h2>Update User - PUT Method</h2>

      <form onSubmit={handleUpdate}>

          <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="USER ID"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Name"
        />
      

        <button type="submit">Update</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
};

export default UpdateUser;
