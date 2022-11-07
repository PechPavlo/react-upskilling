import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import Visualization from './pages/Visualization';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route
            path="/react-upskilling/"
            element={<Navigate replace to="/react-upskilling/visualization" />}
          />
          <Route path="/react-upskilling/listing" element={<Listing />} />
          <Route
            path="/react-upskilling/visualization"
            element={<Visualization />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
