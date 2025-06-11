import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CleanupUserDetails = () => {
   const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error("Error fetching user:", error);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;        
      setUser(null);           
      setLoading(true);         
    };
  }, [id]);

  if (loading) return <p>Loading user details...</p>;

  return (
    <div>
      <h2>User Details for ID: {id}</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
    </div>
  );
}

export default CleanupUserDetails;
