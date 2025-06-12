

const withConditionalRender = (propName) => (WrappedComponent) => {
  return (props) => {
    if (!props[propName]) {
      return null; 
    }
    return <WrappedComponent {...props} />;
  };
};

export default withConditionalRender;
