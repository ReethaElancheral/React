import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataComponent() {
  const [usernames, setUsernames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsernames = async () => {
      setLoading(true); 
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
       
        const names = res.data.map(user => user.username);
        setUsernames(names);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error fetching usernames');
      } finally {
        setLoading(false); 
      }
    };

    fetchUsernames();
  }, []);

  if (loading) return <p>Loading usernames…</p>;
  if (error)   return <p className="error">Error: {error}</p>;

  return (
    <ul>
      {usernames.map((name, idx) => (
        <li key={idx}>{name}</li>
      ))}
    </ul>
  );
}

export default DataComponent;
