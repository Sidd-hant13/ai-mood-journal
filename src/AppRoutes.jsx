import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMood from './pages/AddMood';
import MoodHistory from './pages/MoodHistory';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-mood" element={<AddMood />} />
      <Route path="/history" element={<MoodHistory />} />
    </Routes>
  );
}