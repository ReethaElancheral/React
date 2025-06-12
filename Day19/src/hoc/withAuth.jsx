

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (!props.isAuthenticated) {
      return <div style={{ color: 'red' }}>Access Denied. Please log in.</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
