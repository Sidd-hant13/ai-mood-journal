import { useState, useContext } from 'react';
import { MoodContext } from '../context/MoodContext';
import MoodSelector from '../components/MoodSelector/MoodSelector';
import './AddMood.css';

const AddMood = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addMood } = useContext(MoodContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood) return;
    
    setIsSubmitting(true);
    addMood({ mood, note });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMood('');
    setNote('');
    setIsSubmitting(false);
  };

  return (
    <div className="add-mood-container fade-in">
      <div className="mood-form-glass">
        <h1 className="form-title">How's your day?</h1>
        <p className="form-subtitle">Select your current mood</p>
        
        <form onSubmit={handleSubmit}>
          <MoodSelector selected={mood} onSelect={setMood} />
          
          <div className="form-group">
            <label>Journal Entry (Optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What's making you feel this way?"
              rows={4}
            />
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${!mood ? 'disabled' : ''}`}
            disabled={!mood || isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Save Mood</span>
                <div className="btn-liquid"></div>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMood;