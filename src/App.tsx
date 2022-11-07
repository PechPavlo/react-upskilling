import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import StackModules from './pages/StackModulesPage';
import NotFound from './pages/NotFound';
import StackMapPage from './pages/StackMapPage';
import AddModuleModal from './components/AddModuleModal/AddModuleModal';
import AddStackModal from './components/AddStackModal/AddStackModal';

function App() {
  return (
    <div>
      <MainHeader />
      <AddModuleModal />
      <AddStackModal />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/react-upskilling/stak-map" />}
          />
          <Route
            path="/react-upskilling/"
            element={<Navigate replace to="/react-upskilling/stak-map" />}
          />
          <Route
            path="/react-upskilling/stak-modules"
            element={<StackModules />}
          />
          <Route path="/react-upskilling/stak-map" element={<StackMapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
