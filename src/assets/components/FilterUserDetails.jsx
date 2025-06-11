import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FilterUserDetails = () => {
 const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div>
      <h2>User Details for ID: {id}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default FilterUserDetails;