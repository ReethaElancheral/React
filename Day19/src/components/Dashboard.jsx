import withTitleUpdate from "../hoc/withTitleUpdate";
import withLifecycleLogger from "../hoc/withLifecycleLogger";

const EnhancedDashboard = withLifecycleLogger(withTitleUpdate(Dashboard));

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This component uses multiple HOCs.</p>
    </div>
  );
}

export default EnhancedDashboard;
