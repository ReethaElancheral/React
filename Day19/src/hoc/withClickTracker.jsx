import React, { useState } from 'react';

const withClickTracker = (WrappedComponent) => {
  const ClickTracker = (props) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      setClickCount((prev) => prev + 1);
    };

    return (
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>Button clicked: {clickCount} times</p>
        <WrappedComponent {...props} clickCount={clickCount} />
      </div>
    );
  };

  ClickTracker.displayName = `withClickTracker(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ClickTracker;
};

export default withClickTracker;
