import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '../lib/utils';
import { DailyRecord } from '../types';
import { getRecommendedExercises } from '../data/exercises';
import { motion } from 'motion/react';

interface WeeklyCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  getRecordForDate: (date: Date) => DailyRecord;
}

export function WeeklyCalendar({ selectedDate, onSelectDate, getRecordForDate }: WeeklyCalendarProps) {
  const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Start on Monday
  
  const days = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  return (
    <div className="bg-japandi-surface rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 border border-japandi-border/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-japandi-text">Progreso Semanal</h2>
        <span className="text-sm text-japandi-muted capitalize">
          {format(selectedDate, 'MMMM yyyy', { locale: es })}
        </span>
      </div>
      
      <div className="flex justify-between gap-2">
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const record = getRecordForDate(day);
          const recommended = getRecommendedExercises(record.mood);
          const hasStarted = record.completedExercises.length > 0;
          const isFullyCompleted = hasStarted && record.completedExercises.length >= recommended.length;
          
          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              className="relative flex flex-col items-center justify-center w-12 h-16 transition-all duration-300"
            >
              {/* Background pill */}
              <div className={cn(
                "absolute inset-0 rounded-2xl transition-all duration-300",
                isSelected ? "bg-japandi-sage shadow-md" : "hover:bg-japandi-bg",
                isFullyCompleted && !isSelected ? "bg-japandi-sage/20 border border-japandi-sage/30" : ""
              )} />

              {/* Fancy completion ring */}
              {isFullyCompleted && (
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-japandi-sage"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                />
              )}

              <span className={cn(
                "text-xs font-medium mb-1 relative z-10",
                isSelected ? "text-white/80" : (isFullyCompleted ? "text-japandi-sage" : "text-japandi-muted")
              )}>
                {format(day, 'EEEEEE', { locale: es })}
              </span>
              <span className={cn(
                "text-lg font-semibold relative z-10",
                isSelected ? "text-white" : (isFullyCompleted ? "text-japandi-sage" : "text-japandi-text")
              )}>
                {format(day, 'd')}
              </span>

              {/* Status dots */}
              <div className="absolute bottom-1.5 flex gap-0.5 z-10">
                {isFullyCompleted ? (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-[10px] leading-none"
                  >
                    🦕
                  </motion.span>
                ) : hasStarted ? (
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isSelected ? "bg-white" : "bg-japandi-sage"
                  )} />
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
