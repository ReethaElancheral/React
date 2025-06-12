import  { useEffect } from 'react';


const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log('Component Rendered');
    });

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
