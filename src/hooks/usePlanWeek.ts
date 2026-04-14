import { useState } from 'react';

const WEEKS = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'] as const;
const STORAGE_KEY = 'enzito-plan-start';

function getWeekFromStart(startDate: Date): { week: string; weekNumber: number; daysElapsed: number } {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const weekIndex = Math.floor(diffDays / 7) % 4;
  const safeIndex = weekIndex >= 0 ? weekIndex : 0;
  return {
    week: WEEKS[safeIndex],
    weekNumber: safeIndex + 1,
    daysElapsed: diffDays,
  };
}

export function usePlanWeek() {
  const [startDate, setStartDateState] = useState<Date | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? new Date(saved) : null;
  });

  const planInfo = startDate ? getWeekFromStart(startDate) : null;

  const setPlanStart = (date: Date) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, date.toISOString());
    }
    setStartDateState(date);
  };

  const resetPlan = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setStartDateState(null);
  };

  return { planInfo, startDate, setPlanStart, resetPlan };
}
