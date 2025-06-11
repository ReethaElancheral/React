
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FilterUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '1rem' }}>
          <p><strong>{user.name}</strong></p>
          <Link to={`/userlist/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FilterUserList;
