import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import Success from './components/Success';
import NotFound from './pages/NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/success" element={<Success />} />
    <Route path="/doctor/:id" element={<DoctorProfile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
