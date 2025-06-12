import withErrorBoundary from "../hoc/withErrorBoundary";

const BrokenComponent = () => {

  throw new Error('This is a simulated error!');
  return <div>You will never see this.</div>;
};

export default withErrorBoundary(BrokenComponent);
