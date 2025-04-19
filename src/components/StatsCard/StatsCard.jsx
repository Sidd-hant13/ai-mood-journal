import "./StatsCard.css";

const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card">
      <h3 className="stats-title">{title}</h3>
      <div className="stats-value">{value}</div>
    </div>
  );
};

export default StatsCard;
