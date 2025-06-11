
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfileMiniProject = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
      setUser(null);
      setLoading(true);
    };
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h2>User Profile: {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserProfileMiniProject;
