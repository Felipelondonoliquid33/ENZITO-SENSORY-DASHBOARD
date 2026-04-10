import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Exercise } from '../types';
import { cn } from '../lib/utils';

import { Key } from 'react';

interface ExerciseCardProps {
  key?: Key;
  exercise: Exercise;
  isCompleted: boolean;
  onToggle: () => void;
}

const categoryColors = {
  tactile: 'bg-[#F2E8CF] text-[#8A7B58]',
  vestibular: 'bg-[#E8EDDF] text-[#6B7A5D]',
  proprioceptive: 'bg-[#F5DFD3] text-[#9A6B53]',
  visual: 'bg-[#E2E8F0] text-[#5A6C87]',
  auditory: 'bg-[#F3E8FF] text-[#7E5A9B]'
};

const categoryLabels = {
  tactile: 'Táctil',
  vestibular: 'Vestibular',
  proprioceptive: 'Propioceptivo',
  visual: 'Visual',
  auditory: 'Auditivo'
};

export function ExerciseCard({ exercise, isCompleted, onToggle }: ExerciseCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={cn(
        "cursor-pointer p-5 rounded-3xl transition-all duration-300 border-2",
        isCompleted 
          ? "bg-japandi-surface border-japandi-sage shadow-[0_8px_30px_rgb(163,177,138,0.15)]" 
          : "bg-japandi-surface border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "text-xs font-medium px-2.5 py-1 rounded-full",
              categoryColors[exercise.category]
            )}>
              {categoryLabels[exercise.category]}
            </span>
            <span className="text-xs text-japandi-muted flex items-center gap-1">
              • {exercise.durationMins} min
            </span>
          </div>
          <h3 className={cn(
            "text-lg font-medium mb-1 transition-colors",
            isCompleted ? "text-japandi-sage" : "text-japandi-text"
          )}>
            {exercise.title}
          </h3>
          <p className="text-sm text-japandi-muted leading-relaxed">
            {exercise.description}
          </p>
        </div>
        
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
          isCompleted ? "bg-japandi-sage text-white" : "bg-japandi-bg text-japandi-muted"
        )}>
          <Check className="w-4 h-4" strokeWidth={isCompleted ? 3 : 2} />
        </div>
      </div>
    </motion.div>
  );
}
