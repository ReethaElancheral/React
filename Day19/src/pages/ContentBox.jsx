import withTheme from "../hoc/withTheme";

const ContentBox = ({ message }) => {
  return <p>{message}</p>;
};

export default withTheme(ContentBox);
