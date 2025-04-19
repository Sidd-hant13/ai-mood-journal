import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import MoodModal from '../MoodModal/MoodModal';
import './Calendar.css';

const Calendar = ({ moods }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOffset = getDay(monthStart);

  const getMoodForDate = (date) => {
    return moods.find(mood => 
      format(new Date(mood.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth} className="nav-button">&lt;</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className="nav-button">&gt;</button>
      </div>

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}

        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty-day"></div>
        ))}

        {monthDays.map(day => {
          const mood = getMoodForDate(day);
          return (
            <div
              key={day.toString()}
              className="calendar-day"
              style={{ 
                background: mood?.color || 'rgba(0, 9, 88, 0.1)',
                border: mood ? `2px solid ${mood.color}` : 'none',
                cursor: mood ? 'pointer' : 'default'
              }}
              onClick={() => mood && setSelectedMood(mood)}
            >
              <span className="day-number">
                {format(day, 'd')}
              </span>
              {mood && <span className="day-mood">{mood.emoji}</span>}
            </div>
          );
        })}
      </div>

      {selectedMood && (
        <MoodModal mood={selectedMood} onClose={() => setSelectedMood(null)} />
      )}
    </div>
  );
};

export default Calendar;