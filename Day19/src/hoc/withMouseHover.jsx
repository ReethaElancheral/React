import  { useState } from 'react';

const withMouseHoverTracker = (WrappedComponent) => {
  return (props) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    return (
      <div onMouseMove={handleMouseMove}>
        <WrappedComponent {...props} x={coords.x} y={coords.y} />
      </div>
    );
  };
};

export default withMouseHoverTracker;
