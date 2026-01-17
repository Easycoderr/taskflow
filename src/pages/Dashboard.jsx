import StatsCards from "../features/dashboard/StatsCards";
import Heading from "../UI/Heading";

function Dashboard() {
  return (
    <div className="bg-bg dark:bg-bg-dark space-y-10 overflow-y-auto">
      <div className="text-text dark:text-text-dark space-y-3">
        <Heading>Dashboard</Heading>
        <h3 className="text-lg sm:text-xl font-medium tracking-tight">
          Good morning, EasyCoder
        </h3>
      </div>
      {/* Stats cards */}
      <StatsCards />
    </div>
  );
}

export default Dashboard;
