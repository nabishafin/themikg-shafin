import StatsCard from "../../components/StatsCard";
import EarningsChart from "../../components/EarningsChart";

const Dashboard = () => {
  return (
    <div className=" bg-black ">
      <div className=" mx-auto space-y-6">
        {/* Stats Cards */}
        <StatsCard />

        {/* Earnings Chart */}
        <EarningsChart />
      </div>
    </div>
  );
};

export default Dashboard;
