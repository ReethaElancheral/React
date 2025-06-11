import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CancelToken() {
  const [usernames, setUsernames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users', {
      cancelToken: source.token,
    })
    .then(res => {
      const names = res.data.map(user => user.username);
      setUsernames(names);
      setError(null);
    })
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      } else {
        setError(err.message || 'Error fetching usernames');
      }
    })
    .finally(() => {
      setLoading(false);
    });

    return () => {
      source.cancel('Component unmounted');
    };
  }, []);

  if (loading) return <p>Loading usernames…</p>;
  if (error)   return <p className="error">Error: {error}</p>;

  return (
    <ul>
      {usernames.map((u, i) => <li key={i}>{u}</li>)}
    </ul>
  );
}

export default CancelToken;
