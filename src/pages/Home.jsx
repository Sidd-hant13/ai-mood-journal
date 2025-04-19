import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MoodSphere</h1>
        <p>Track your emotions with beautiful analytics</p>
        <Link to="/add-mood" className="cta-button">Log Your First Mood</Link>
      </div>
    </div>
  );
};

export default Home;