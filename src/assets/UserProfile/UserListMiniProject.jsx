
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserListMiniProject = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/userprofile/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserListMiniProject;
