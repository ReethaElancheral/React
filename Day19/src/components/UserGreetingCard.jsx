
import withRenderLog from "../hoc/propsForward";

const UserGreetingCard = ({ message, user }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>User: {user}</p>
    </div>
  );
};

export default withRenderLog(UserGreetingCard);
