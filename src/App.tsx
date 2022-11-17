import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import StackModules from './pages/StackModulesPage';
import NotFound from './pages/NotFound';
import StackMapPage from './pages/StackMapPage';
import ModalWrapper from './components/ModalWrapper/ModalWrapper';

function App() {
  return (
    <div>
      <MainHeader />
      <ModalWrapper />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/react-upskilling/stack-map" />}
          />
          <Route
            path="/react-upskilling/"
            element={<Navigate replace to="/react-upskilling/stack-map" />}
          />
          <Route
            path="/react-upskilling/stack-modules"
            element={<StackModules />}
          />
          <Route
            path="/react-upskilling/stack-map"
            element={<StackMapPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
