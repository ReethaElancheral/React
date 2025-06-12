import { useState, useEffect } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
  const ComponentWithData = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [url]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };

  ComponentWithData.displayName = `withDataFetching(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithData;
};

export default withDataFetching;
