import { useState, useEffect } from "react";
import axiosInstance from "../../api/Axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/users", { name, email });
      setMessage(`User Created : ${response.data.name}`);
    } catch (error) {
      setMessage("error Creating User");
      console.error(error);
    }
  };

  return (
    <>
    <h2>6. POST Request: Create a form and send user data to an API using Axios. </h2>
      <h2>Create User - POST Method</h2>
      <form onSubmit={handleCreate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button type="submit">Create</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
};

export default CreateUser;
