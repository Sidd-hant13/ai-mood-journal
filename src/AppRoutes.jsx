import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMood from './pages/AddMood';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-mood" element={<AddMood />} />
    </Routes>
  );
}