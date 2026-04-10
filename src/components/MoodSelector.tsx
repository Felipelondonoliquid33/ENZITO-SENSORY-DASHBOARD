import { motion } from 'motion/react';
import { Smile, Zap, Frown, Coffee } from 'lucide-react';
import { DailyRecord } from '../types';
import { cn } from '../lib/utils';

interface MoodSelectorProps {
  currentMood?: DailyRecord['mood'];
  onSelectMood: (mood: DailyRecord['mood']) => void;
}

const moods = [
  { id: 'calm', icon: Smile, label: 'Tranquilo', color: 'text-japandi-sage', bg: 'bg-[#E8EDDF]' },
  { id: 'active', icon: Zap, label: 'Activo', color: 'text-japandi-wood', bg: 'bg-[#F5DFD3]' },
  { id: 'restless', icon: Frown, label: 'Inquieto', color: 'text-[#E07A5F]', bg: 'bg-[#FADCD4]' },
  { id: 'tired', icon: Coffee, label: 'Cansado', color: 'text-[#5A6C87]', bg: 'bg-[#E2E8F0]' },
] as const;

export function MoodSelector({ currentMood, onSelectMood }: MoodSelectorProps) {
  return (
    <div className="bg-japandi-surface rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
      <h2 className="text-lg font-medium text-japandi-text mb-4">¿Cómo está Enzito hoy?</h2>
      <div className="grid grid-cols-4 gap-3">
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = currentMood === mood.id;
          
          return (
            <motion.button
              key={mood.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectMood(mood.id as DailyRecord['mood'])}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 border-2",
                isSelected 
                  ? `border-japandi-sage ${mood.bg}` 
                  : "border-transparent bg-japandi-bg hover:bg-gray-100"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-2", isSelected ? mood.color : "text-japandi-muted")} />
              <span className={cn(
                "text-xs font-medium",
                isSelected ? "text-japandi-text" : "text-japandi-muted"
              )}>
                {mood.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
