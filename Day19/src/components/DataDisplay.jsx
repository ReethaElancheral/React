import withLoadingSpinner from "../hoc/withLoadingSpinnerd";

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h3>Data Loaded:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default withLoadingSpinner(DataDisplay);
