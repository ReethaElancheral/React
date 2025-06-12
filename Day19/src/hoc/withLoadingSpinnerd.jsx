
const withLoadingSpinner = (WrappedComponent) => {
  return ({ loading, ...props }) => {
    if (loading) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="spinner" style={{
            width: '40px',
            height: '40px',
            border: '5px solid lightgray',
            borderTop: '5px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: 'auto'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoadingSpinner;
