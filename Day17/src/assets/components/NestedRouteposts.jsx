
import { useParams, Link } from 'react-router-dom';

function UserPosts() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Posts</h2>
      <p>Showing posts for user ID: {id}</p>

      <ul>
        <li>Post A by User {id}</li>
        <li>Post B by User {id}</li>
      </ul>

      
      <Link to={`/userss/${id}`}>Back to Profile</Link>
    </div>
  );
}

export default UserPosts;
