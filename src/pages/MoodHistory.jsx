import { useContext } from "react";
import { MoodContext } from "../context/MoodContext";
import Calendar from "../components/Calendar/Calendar";
import StatsCard from "../components/StatsCard/StatsCard";
import "./MoodHistory.css";

const MoodHistory = () => {
  const { moods } = useContext(MoodContext);

  return (
    <div className="history-container">
      <h1 className="history-title">Your Mood Journey</h1>

      <div className="analytics-grid">
        <div className="calendar-section">
          <Calendar moods={moods} />
        </div>

        <div className="stats-section">
          <StatsCard
            title="Most Frequent Mood"
            value={getMostFrequentMood(moods)}
          />
          <StatsCard
            title="Positive Days"
            value={`${getPositiveDaysPercentage(moods)}%`}
          />
        </div>
      </div>
    </div>
  );
};

const getMostFrequentMood = (moods) => {
  const moodCounts = {};
  moods.forEach((mood) => {
    moodCounts[mood.mood] = (moodCounts[mood.mood] || 0) + 1;
  });
  return (
    Object.keys(moodCounts).reduce(
      (a, b) => (moodCounts[a] > moodCounts[b] ? a : b),
      ""
    ) || "None"
  );
};

const getPositiveDaysPercentage = (moods) => {
  const positiveMoods = ["Ecstatic", "Happy", "Calm"];
  const positiveCount = moods.filter((m) =>
    positiveMoods.includes(m.mood)
  ).length;
  return moods.length ? Math.round((positiveCount / moods.length) * 100) : 0;
};

export default MoodHistory;
