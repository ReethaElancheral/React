
const withRenderLog = (WrappedComponent) => {
  return (props) => {
    console.log('Component Rendered with props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withRenderLog;
