import withAuthProtection from "../hoc/withAuthProtection";

const SecretPage = () => {
  return (
    <div>
      <h2>Secret Dashboard</h2>
      <p>This content is only visible to authenticated users.</p>
    </div>
  );
};

export default withAuthProtection(SecretPage);
