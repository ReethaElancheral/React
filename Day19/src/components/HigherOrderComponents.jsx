import withTitleUpdate from "../hoc/withTitleUpdate";

const Hoc = () => {
  return (
    <div>
      <h2>This is the Page Content</h2>
      <p>Check the browser tab title!</p>
    </div>
  );
};

export default withTitleUpdate(Hoc);
