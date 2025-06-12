import withAuth from "../hoc/withAuth";

const UserDashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default withAuth(UserDashboard);
