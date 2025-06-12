import withMouseHoverTracker from "../hoc/withMouseHover";

const HoverDisplay = ({ x, y }) => {
  return (
    <div style={{ padding: '20px', border: '2px dashed #555' }}>
      <h3>Hover inside this box</h3>
      <p>Mouse X: {x}</p>
      <p>Mouse Y: {y}</p>
    </div>
  );
};

export default withMouseHoverTracker(HoverDisplay);
