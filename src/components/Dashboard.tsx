import { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Sparkles } from 'lucide-react';
import { useSensoryData } from '../hooks/useSensoryData';
import { getRecommendedExercises } from '../data/exercises';
import { WeeklyCalendar } from './WeeklyCalendar';
import { MoodSelector } from './MoodSelector';
import { ExerciseCard } from './ExerciseCard';
import { DinoCelebration } from './DinoCelebration';
import { motion, AnimatePresence } from 'motion/react';

export function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { getRecordForDate, toggleExercise, updateMood, isLoaded } = useSensoryData();
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [prevProgress, setPrevProgress] = useState(0);

  const currentRecord = getRecordForDate(selectedDate);

  // AI Logic: Adjust exercises based on mood
  const recommendedExercises = useMemo(() => {
    return getRecommendedExercises(currentRecord.mood);
  }, [currentRecord.mood]);

  const handleMoodSelect = (mood: any) => {
    setIsAiThinking(true);
    updateMood(selectedDate, mood);
    // Simulate AI thinking delay for UX
    setTimeout(() => setIsAiThinking(false), 800);
  };

  const completedCount = currentRecord.completedExercises.length;
  const totalCount = recommendedExercises.length;
  const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // Trigger celebration when hitting 100%
  useEffect(() => {
    if (progressPercentage === 100 && prevProgress < 100 && totalCount > 0) {
      setShowCelebration(true);
    }
    setPrevProgress(progressPercentage);
  }, [progressPercentage, prevProgress, totalCount]);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen pb-28">
      <DinoCelebration show={showCelebration} onComplete={() => setShowCelebration(false)} />
      
      {/* Header */}
      <header className="pt-12 pb-6 px-6 sticky top-0 bg-japandi-bg/60 backdrop-blur-xl z-10">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-japandi-text flex items-center gap-2">
              Hola Yen 🐣
            </h1>
            <p className="text-japandi-muted text-sm mt-1">
              {format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-2xl shadow-sm border border-japandi-sage/20">
            🦕
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6">
        <WeeklyCalendar 
          selectedDate={selectedDate} 
          onSelectDate={setSelectedDate}
          getRecordForDate={getRecordForDate}
        />

        <MoodSelector 
          currentMood={currentRecord.mood} 
          onSelectMood={handleMoodSelect} 
        />

        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-medium text-japandi-text flex items-center gap-2">
              Rutina Sugerida
              {currentRecord.mood && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-japandi-sage/20 text-japandi-sage p-1 rounded-full"
                  title="Ajustado por IA según el estado de ánimo"
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              )}
            </h2>
            <p className="text-sm text-japandi-muted mt-1">
              {completedCount} de {totalCount} completados
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-semibold text-japandi-sage">{progressPercentage}%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-japandi-border rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="h-full bg-japandi-sage rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {isAiThinking ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-japandi-muted"
              >
                <Sparkles className="w-8 h-8 mb-4 animate-pulse text-japandi-sage" />
                <p>Recalibrando rutina para Enzito...</p>
              </motion.div>
            ) : (
              recommendedExercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  isCompleted={currentRecord.completedExercises.includes(exercise.id)}
                  onToggle={() => toggleExercise(selectedDate, exercise.id)}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
