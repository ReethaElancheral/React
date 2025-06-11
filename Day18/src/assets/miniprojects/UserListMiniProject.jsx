import { useState, useEffect } from 'react';
import axios from 'axios';

function UserListNew() {
  const [users, setUsers] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState('');       

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
        setError('');
      } catch (err) {
        setError(err.response?.status 
          ? `Error ${err.response.status}: ${err.response.statusText}` 
          : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error)   return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className='userlistmini'>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> — {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListNew;
