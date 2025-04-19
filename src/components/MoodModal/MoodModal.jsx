import { format } from "date-fns";
import "./MoodModal.css";

const MoodModal = ({ mood, onClose }) => {
  if (!mood) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{format(new Date(mood.date), "EEEE, MMMM d")}</h3>

        <div className="mood-display" style={{ color: mood.color }}>
          <span className="mood-emoji">{mood.emoji}</span>
          <span className="mood-label">{mood.mood}</span>
        </div>

        {mood.note && (
          <div className="mood-notes">
            <h4>Your Notes</h4>
            <p>{mood.note}</p>
          </div>
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MoodModal;
