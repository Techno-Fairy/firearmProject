import Navbar from '../components/Navbar';
import LeftPanel from '../components/LeftPanel';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className="flex h-screen">
      <LeftPanel />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 ml-70">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}