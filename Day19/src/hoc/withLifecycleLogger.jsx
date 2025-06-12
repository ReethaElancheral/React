import  { useEffect } from 'react';

const withLifecycleLogger = (WrappedComponent) => {
  const ComponentWithLogging = (props) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithLogging.displayName = `withLifecycleLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithLogging;
};

export default withLifecycleLogger;
