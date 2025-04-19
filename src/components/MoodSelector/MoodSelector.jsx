import './MoodSelector.css';

const moods = [
  { emoji: '🤩', label: 'Ecstatic', color: '#4CC9F0' },
  { emoji: '😊', label: 'Happy', color: '#4895EF' },
  { emoji: '😌', label: 'Calm', color: '#4361EE' },
  { emoji: '😐', label: 'Neutral', color: '#3F37C9' },
  { emoji: '😴', label: 'Tired', color: '#3A0CA3' },
  { emoji: '😔', label: 'Sad', color: '#480CA8' },
  { emoji: '😡', label: 'Angry', color: '#560BAD' },
  { emoji: '😨', label: 'Anxious', color: '#7209B7' }
];

const MoodSelector = ({ selected, onSelect }) => {
  return (
    <div className="mood-selector-grid">
      {moods.map((mood) => (
        <div 
          key={mood.label}
          className={`mood-option ${selected === mood.label ? 'selected' : ''}`}
          onClick={() => onSelect(mood.label)}
          style={{ '--mood-color': mood.color }}
        >
          <div className="mood-emoji">{mood.emoji}</div>
          <div className="mood-label">{mood.label}</div>
          <div className="selection-indicator"></div>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;