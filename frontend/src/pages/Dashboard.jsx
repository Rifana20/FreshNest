import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="page-container">

        <div className="dashboard-header">
          <div>
            <h1>FreshNest Dashboard</h1>
            <p>
              Track your food inventory, monitor expiry dates,
              and reduce waste efficiently.
            </p>
          </div>
        </div>

        <div className="stats-container">

          <StatsCard
            title="Total Items"
            value="42"
          />

          <StatsCard
            title="Fresh Items"
            value="31"
          />

          <StatsCard
            title="Expiring Soon"
            value="8"
          />

          <StatsCard
            title="Expired"
            value="3"
          />

        </div>

        <div className="dashboard-section">

          <h2>Quick Summary</h2>

          <div className="summary-card">
            <p>
              🥛 Milk expires tomorrow.
            </p>

            <p>
              🥚 Eggs expire in 2 days.
            </p>

            <p>
              🍞 Bread expires in 3 days.
            </p>

            <p>
              💊 Vitamin Tablets have expired.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;