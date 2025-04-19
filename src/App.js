import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoodProvider } from './context/MoodContext';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './AppRoutes';
import './styles/global.css';

function App() {
  return (
    <MoodProvider>
      <Router>
        <div className="app-background">
          <div className="app-blur-layer">
            <Navbar />
            <main className="app-main">
              <AppRoutes />
            </main>
          </div>
        </div>
      </Router>
    </MoodProvider>
  );
}

export default App;