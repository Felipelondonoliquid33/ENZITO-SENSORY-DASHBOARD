import { useState, useEffect } from 'react';
import { DailyRecord } from '../types';
import { format } from 'date-fns';

export function useSensoryData() {
  const [records, setRecords] = useState<Record<string, DailyRecord>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('enzito_sensory_records');
    if (stored) {
      try {
        setRecords(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse records", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever records change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('enzito_sensory_records', JSON.stringify(records));
    }
  }, [records, isLoaded]);

  const toggleExercise = (date: Date, exerciseId: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    setRecords(prev => {
      const todayRecord = prev[dateStr] || { date: dateStr, completedExercises: [] };
      const isCompleted = todayRecord.completedExercises.includes(exerciseId);
      
      const newCompleted = isCompleted 
        ? todayRecord.completedExercises.filter(id => id !== exerciseId)
        : [...todayRecord.completedExercises, exerciseId];

      return {
        ...prev,
        [dateStr]: {
          ...todayRecord,
          completedExercises: newCompleted
        }
      };
    });
  };

  const updateMood = (date: Date, mood: DailyRecord['mood']) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    setRecords(prev => {
      const todayRecord = prev[dateStr] || { date: dateStr, completedExercises: [] };
      return {
        ...prev,
        [dateStr]: {
          ...todayRecord,
          mood
        }
      };
    });
  };

  const getRecordForDate = (date: Date): DailyRecord => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return records[dateStr] || { date: dateStr, completedExercises: [] };
  };

  return {
    records,
    toggleExercise,
    updateMood,
    getRecordForDate,
    isLoaded
  };
}
