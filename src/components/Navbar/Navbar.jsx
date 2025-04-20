import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌤️ MoodSphere</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add-mood" className="nav-link">Add Mood</Link>
        <Link to="/history" className="nav-link">History</Link>
        <Link to="/recommendations" className="nav-link">Recommendations</Link>
      </div>
    </nav>
  );
};

export default Navbar;