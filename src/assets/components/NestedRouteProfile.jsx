
import { useParams, Link } from 'react-router-dom';

function NestedRoutePara() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>


      <Link to={`/userss/${id}/posts`}>View Posts</Link>
    </div>
  );
}

export default NestedRoutePara;
