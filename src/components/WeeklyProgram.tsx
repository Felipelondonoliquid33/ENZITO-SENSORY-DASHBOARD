import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Activity, Sparkles, Brain } from 'lucide-react';
import { weeklySchedule, TimeBlock } from '../data/weeklySchedule';
import { cn } from '../lib/utils';

const getTimeIcon = (time: TimeBlock) => {
  if (time.includes('Motor')) return <Activity className="w-4 h-4 text-japandi-wood" />;
  if (time.includes('Sensorial')) return <Sparkles className="w-4 h-4 text-japandi-sage" />;
  return <Brain className="w-4 h-4 text-[#5A6C87]" />;
};

export function WeeklyProgram() {
  const [expandedDay, setExpandedDay] = useState<string | null>('Lunes');

  return (
    <div className="min-h-screen pb-28 pt-12 px-6">
      <header className="max-w-md mx-auto mb-8">
        <h1 className="text-2xl font-semibold text-japandi-text">Programa Semanal</h1>
        <p className="text-japandi-muted text-sm mt-1">
          Rutina estructurada por bloques para Enzito
        </p>
      </header>

      <main className="max-w-md mx-auto space-y-4">
        {weeklySchedule.map((dayPlan) => {
          const isExpanded = expandedDay === dayPlan.day;

          return (
            <motion.div 
              key={dayPlan.day}
              layout
              className="bg-japandi-surface rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-japandi-border/50"
            >
              <button
                onClick={() => setExpandedDay(isExpanded ? null : dayPlan.day)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div>
                  <h2 className="text-lg font-medium text-japandi-text">{dayPlan.day}</h2>
                  <p className="text-sm text-japandi-sage font-medium mt-0.5">{dayPlan.theme}</p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full bg-japandi-bg flex items-center justify-center text-japandi-muted"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 space-y-4 border-t border-japandi-border/50 pt-4">
                      {dayPlan.exercises.map((exercise, idx) => (
                        <div key={idx} className="relative pl-6">
                          {/* Timeline line */}
                          {idx !== dayPlan.exercises.length - 1 && (
                            <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-japandi-border rounded-full" />
                          )}
                          
                          {/* Timeline dot/icon */}
                          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-japandi-bg border-2 border-japandi-surface flex items-center justify-center shadow-sm z-10">
                            {getTimeIcon(exercise.time)}
                          </div>

                          <div className="bg-japandi-bg/50 rounded-2xl p-4 ml-2">
                            <span className="text-xs font-semibold text-japandi-muted tracking-wider">
                              {exercise.time}
                            </span>
                            <h3 className="text-base font-medium text-japandi-text mt-1 mb-1">
                              {exercise.title}
                            </h3>
                            <p className="text-sm text-japandi-muted leading-relaxed">
                              {exercise.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </main>
    </div>
  );
}
