import withDataFetching from "../hoc/withDataFetching";

const UserList = ({ data, loading, error }) => {
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withDataFetching('https://jsonplaceholder.typicode.com/users')(UserList);
