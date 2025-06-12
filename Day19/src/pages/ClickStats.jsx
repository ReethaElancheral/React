import withClickTracker from "../hoc/withClickTracker";

const ClickStats = ({ clickCount }) => {
  return (
    <div>
      <h3>Click Tracker Component</h3>
      <p>Clicks from HOC: {clickCount}</p>
    </div>
  );
};

export default withClickTracker(ClickStats);
