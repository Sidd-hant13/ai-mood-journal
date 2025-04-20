import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMood from './pages/AddMood';
import MoodHistory from './pages/MoodHistory';
import Recommendations from './pages/Recommendations';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-mood" element={<AddMood />} />
      <Route path="/history" element={<MoodHistory />} />
      <Route path="/recommendations" element={<Recommendations />} />
    </Routes>
  );
}