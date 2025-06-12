
import withStyleWrapper from "../hoc/withStyleWrapper";

const GreetingCard = ({ message, user }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>User: {user}</p>
    </div>
  );
};


const customStyles = {
  border: '2px solid #4CAF50',
  padding: '16px',
  margin: '16px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

export default withStyleWrapper(customStyles)(GreetingCard);
