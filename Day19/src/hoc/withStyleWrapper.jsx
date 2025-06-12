

const withStyleWrapper = (styles) => (WrappedComponent) => {
  return (props) => (
    <div style={styles}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withStyleWrapper;
