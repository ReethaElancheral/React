
import withConditionalRender from "../hoc/withConditionalRender";

const UserGreeting= ({ message, user }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>User: {user}</p>
    </div>
  );
};


export default withConditionalRender('shouldRender')(UserGreeting);
