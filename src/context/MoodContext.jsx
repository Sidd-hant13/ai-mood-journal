import { createContext, useState, useEffect } from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [moods, setMoods] = useState(() => {
    const saved = localStorage.getItem('moods');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const addMood = (moodData) => {
    const newMood = {
      ...moodData,
      id: Date.now(),
      date: new Date().toISOString(),
      color: getMoodColor(moodData.mood)
    };
    setMoods(prev => [newMood, ...prev]);
  };

  const getMoodColor = (mood) => {
    const moodColors = {
      'Ecstatic': '#4CC9F0',
      'Happy': '#4895EF',
      'Calm': '#4361EE',
      'Neutral': '#3F37C9',
      'Tired': '#3A0CA3',
      'Sad': '#480CA8',
      'Angry': '#560BAD',
      'Anxious': '#7209B7'
    };
    return moodColors[mood] || '#4361EE';
  };

  return (
    <MoodContext.Provider value={{ moods, addMood }}>
      {children}
    </MoodContext.Provider>
  );
};