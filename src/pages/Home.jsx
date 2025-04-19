import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';
import './Home.css';

const Home = () => {
  const { moods } = useContext(MoodContext);
  const recentMoods = moods.slice(0, 3).reverse();

  return (
    <div className="home-page">
      <div className="glass-container">
        <h1>Welcome to MoodSphere</h1>
        <p className="subtitle">Track your emotions with beautiful analytics</p>
        
        <Link to="/add-mood" className="primary-btn">
          Log Your Mood
        </Link>

        <div className="mood-history-section">
          <h2>Your Mood Journey</h2>
          
          {recentMoods.length > 0 ? (
            <div className="mood-cards">
              {recentMoods.map(mood => (
                <div 
                  key={mood.id}
                  className="mood-card"
                  style={{ borderLeft: `4px solid ${mood.color}` }}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <div>
                    <p className="mood-name">{mood.mood}</p>
                    <p className="mood-date">
                      {new Date(mood.date).toLocaleDateString('en-US', {
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">No moods recorded yet</p>
          )}

          <Link to="/history" className="secondary-btn">
            View Full History &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;