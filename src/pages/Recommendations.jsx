import { useState, useEffect, useContext } from 'react';
import { MoodContext } from '../context/MoodContext';
import './Recommendations.css';

const MOOD_CONFIG = {
  Ecstatic: {
    color: '#FFD166',
    quotes: [
      "Happiness is contagious - spread it everywhere!",
      "This is pure joy!",
      "I'm over the moon!"
    ],
    playlists: [
      'PL6Lt7A4aNf0CBtWp2V6AMSHhUCd4sMioh', 
      'PLa1WwD1JjHRoBzBBvvatXILTAobeOxBa3'  
    ]
  },
  Happy: {
    color: '#4895EF',
    quotes: [
      "Joy looks beautiful on you today!",
      "Today is amazing!",
      "Smile - it's free therapy!"
    ],
    playlists: [
      'PL4QNnZJr8sRPeLgoOL9t4V-18xRAuqe_f', 
      'PLeDakahyfrO9EPCwHmosEB_M0tdL1lDwz'  
    ]
  },
  Calm: {
    color: '#06D6A0',
    quotes: [
      "Peace begins with a quiet mind",
      "Breathe deeply, live peacefully",
      "Calm waters run deep"
    ],
    playlists: [
      'PLW_omwEM1aieD_VN_aEUucETFBpZsyFoZ', 
      'PLkVVq1L5dXhF_eGXhVRYXHHX7__7cHOdA'  
    ]
  },
  Neutral: {
    color: '#3F37C9',
    quotes: [
      "Every day is a new opportunity",
      "Balance is the key to everything",
      "Today is what you make it"
    ],
    playlists: [
      'PLMElI5B-dTNUZW-2OdOH95IOaQnhhux52', 
      'PL-F7saF_vW0dl-CrUgs6CG3DDjr4EX_ee'   
    ]
  },
  Tired: {
    color: '#3A0CA3',
    quotes: [
      "Rest is not laziness - it's essential fuel",
      "Even machines need to recharge",
      "Tomorrow is a fresh start"
    ],
    playlists: [
      'PLeq5deLX90_fCIoHVtWowBrhpHFYh4nHW', 
      'PLkZifNnjfjSaodzAQy1xpHBS97TCPVMQA'   
    ]
  },
  Sad: {
    color: '#480CA8',
    quotes: [
      "This storm will pass. You've survived 100% of your worst days.",
      "Tears water the garden of your soul",
      "You're stronger than you think"
    ],
    playlists: [
      'PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W', 
      'PLgzTt0k8mXzHcKebL8d0uYHfawiARhQja'  
    ]
  },
  Angry: {
    color: '#EF476F',
    quotes: [
      "Breathe. Respond, don't react.",
      "Anger is just sadness with muscles",
      "Cool heads prevail"
    ],
    playlists: [
      'PLxA687tYuMWgQgPafj_RHXJlKwTQw2WO0', 
      'PLHPvFW_RZqqNqHEomQ9sFfQGEv5aZwvdy'   
    ]
  },
  Anxious: {
    color: '#7209B7',
    quotes: [
      "This moment is temporary. You are safe right now.",
      "Anxiety is a liar - don't believe everything you feel",
      "One step at a time"
    ],
    playlists: [
      'PLfuKx491eAO7vVrUQCFt3z9Q2NyU19s_D', 
      'PLklhd_AtN_8t8ahSl5lvyGEpMJBNgD59d'  
    ]
  }
};

const Recommendations = () => {
  const { moods } = useContext(MoodContext);
  const [content, setContent] = useState(null);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [playerKey, setPlayerKey] = useState(0); 

  const latestMood = moods[0]?.mood || 'Happy';
  const config = MOOD_CONFIG[latestMood] || MOOD_CONFIG.Happy;

  useEffect(() => {
    const randomQuote = config.quotes[Math.floor(Math.random() * config.quotes.length)];
    const memePaths = [1, 2, 3].map(i => 
      `/memes/${latestMood.toLowerCase()}/${latestMood.toLowerCase()}${i}.jpg`
    );

    setContent({
      mood: latestMood,
      quote: randomQuote,
      memes: memePaths,
      color: config.color,
      playlists: config.playlists || []
    });
    setCurrentPlaylistIndex(0);
    setPlayerKey(prev => prev + 1); 
  }, [latestMood ,config]);

  const getNewMeme = () => {
    setCurrentMemeIndex(prev => (prev + 1) % content.memes.length);
  };

  const switchPlaylist = () => {
    const newIndex = (currentPlaylistIndex + 1) % content.playlists.length;
    setCurrentPlaylistIndex(newIndex);
    setPlayerKey(prev => prev + 1); 
  };

  if (!content) return <div className="loading-spinner"></div>;

  return (
    <div className="recommendations-container">
      <h1>For Your {content.mood} Mood</h1>
      
      <div className="recommendation-card">
        <h2>Inspirational Quote</h2>
        <p className="quote">"{content.quote}"</p>
      </div>

      <div className="recommendation-card">
        <h2>Mood Booster</h2>
        <div className="meme-container">
          <img
            src={content.memes[currentMemeIndex]}
            alt={`${content.mood} mood meme`}
            className="meme-img"
            onError={(e) => {
              e.target.src = content.memes[0];
            }}
          />
        </div>
        <button 
          className="new-meme-btn"
          onClick={getNewMeme}
          disabled={content.memes.length <= 1}
          style={{ backgroundColor: content.color }}
        >
          {content.memes.length > 1 ? 'Get New Meme' : 'No Alternate Memes'}
        </button>
      </div>

      {content.playlists.length > 0 && (
        <div className="recommendation-card">
          <h2>Mood Music</h2>
          <div className="music-player">
            <div className="youtube-embed">
              <iframe
                key={playerKey}
                src={`https://www.youtube.com/embed/videoseries?list=${content.playlists[currentPlaylistIndex]}&autoplay=0&rel=0`}
                title={`${content.mood} mood playlist`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            {content.playlists.length > 1 && (
              <button 
                onClick={switchPlaylist}
                className="playlist-switcher"
                style={{ backgroundColor: content.color }}
              >
                Switch Playlist ({currentPlaylistIndex + 1}/{content.playlists.length})
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;