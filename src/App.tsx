import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import IconSidebar from './components/IconSidebar';
import RetainerData from './pages/RetainerData';
import AmbassadorAnalytics from './pages/AmbassadorAnalytics';

function RetainerDataLayout() {
  return (
    <div className="app-layout">
      <div className="icon-sidebar-area">
        <IconSidebar />
      </div>
      <RetainerData />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/retainer-data" replace />} />
      <Route path="/retainer-data" element={<RetainerDataLayout />} />
      <Route path="/ambassador/:id/analytics" element={<AmbassadorAnalytics />} />
    </Routes>
  );
}

export default App;
