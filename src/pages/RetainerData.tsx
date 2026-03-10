import SideNav from '../components/SideNav';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import StatsCard from '../components/StatsCard';
import StatusChart from '../components/StatusChart';
import CreatorTable from '../components/CreatorTable';

export default function RetainerData() {
  return (
    <>
      <div className="header-area">
        <Header />
      </div>

      <div className="side-nav-area">
        <SideNav />
      </div>

      <main className="main-content-area">
        <FilterBar />
        <StatsCard />
        <StatusChart />
        <CreatorTable />
      </main>
    </>
  );
}
