import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌤️ MoodSphere</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add-mood" className="nav-link">Add Mood</Link>
      </div>
    </nav>
  );
};

export default Navbar;