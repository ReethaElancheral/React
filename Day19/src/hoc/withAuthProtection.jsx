
const withAuthProtection = (WrappedComponent) => {
  const ProtectedComponent = ({ isAuthenticated, ...props }) => {
    if (!isAuthenticated) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          <h2>Access Denied</h2>
          <p>You must be logged in to view this page.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  ProtectedComponent.displayName = `withAuthProtection(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ProtectedComponent;
};

export default withAuthProtection;
