import withLogger from "../hoc/withLogger";

const ComponentRender = () => {
  return <div>Hello from MyComponent! - check log</div>;
};

export default withLogger(ComponentRender);
