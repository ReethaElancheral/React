import React, { useEffect, useState } from 'react';

const withLoadingAndError = (url, delay = 2000) => (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
          return res.json();
        })
        .then((fetchedData) => {
        
          setTimeout(() => {
            setData(fetchedData);
            setLoading(false);
          }, delay);
        })
        .catch((err) => {
          setTimeout(() => {
            setError(err.message);
            setLoading(false);
          }, delay);
        });
    }, [url, delay]);

    if (loading)
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      );

    if (error)
      return <p style={{ color: 'red', padding: '10px' }}>Error: {error}</p>;

    return <WrappedComponent {...props} data={data} />;
  };

  EnhancedComponent.displayName = `withLoadingAndError(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return EnhancedComponent;
};

export default withLoadingAndError;
