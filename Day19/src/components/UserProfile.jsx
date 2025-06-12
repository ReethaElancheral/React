import withLifecycleLogger from "../hoc/withLifecycleLogger";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User: {user}</h2>
    </div>
  );
};

export default withLifecycleLogger(UserProfile);
