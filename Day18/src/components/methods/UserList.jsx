import { useState, useEffect } from "react";
import axiosInstance from "../../api/Axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching users", error);
      });
  }, []);

  if (error) return <div>error:{error}</div>;

  return (
    <>
      <h2>User List Get Method</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default UserList;
