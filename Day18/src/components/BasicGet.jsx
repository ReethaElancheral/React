import axios from "axios";

import { useEffect, useState } from "react";

const UserListGet = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
      })

      .catch((error) => {
        console.error("Error Fetching users", error);
      });
  }, []);

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default UserListGet;
