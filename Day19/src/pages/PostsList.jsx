import withLoadingAndError from "../hoc/withLoadingandError";

const PostsList = ({ data }) => {
  return (
    <div>
      <h3>Top Posts</h3>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withLoadingAndError('https://jsonplaceholder.typicode.com/users')(PostsList);
