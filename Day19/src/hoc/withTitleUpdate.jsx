import React, { useEffect } from 'react';

const withTitleUpdate = (WrappedComponent) => {
  const ComponentWithTitle = (props) => {
    useEffect(() => {
      document.title = WrappedComponent.name || 'Component';
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithTitle.displayName = `withTitleUpdate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithTitle;
};

export default withTitleUpdate;
