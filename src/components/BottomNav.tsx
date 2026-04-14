import { Home, CalendarDays, ShoppingCart, Utensils } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export type Tab = 'dashboard' | 'program' | 'lunch' | 'essentials';

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <div className="bg-japandi-surface/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full p-2 flex items-center justify-around border border-japandi-border/50">
          
          <button
            onClick={() => onChange('dashboard')}
            className={cn(
              "relative flex items-center justify-center gap-2 px-3 py-3 rounded-full transition-colors duration-300 flex-1",
              activeTab === 'dashboard' ? "text-japandi-text" : "text-japandi-muted hover:text-japandi-text"
            )}
          >
            {activeTab === 'dashboard' && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-japandi-bg rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Home className="w-5 h-5 relative z-10" />
            <span className="text-xs font-medium relative z-10 hidden sm:inline">Hoy</span>
          </button>

          <button
            onClick={() => onChange('program')}
            className={cn(
              "relative flex items-center justify-center gap-2 px-3 py-3 rounded-full transition-colors duration-300 flex-1",
              activeTab === 'program' ? "text-japandi-text" : "text-japandi-muted hover:text-japandi-text"
            )}
          >
            {activeTab === 'program' && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-japandi-bg rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <CalendarDays className="w-5 h-5 relative z-10" />
            <span className="text-xs font-medium relative z-10 hidden sm:inline">Programa</span>
          </button>

          <button
            onClick={() => onChange('lunch')}
            className={cn(
              "relative flex items-center justify-center gap-2 px-3 py-3 rounded-full transition-colors duration-300 flex-1",
              activeTab === 'lunch' ? "text-japandi-text" : "text-japandi-muted hover:text-japandi-text"
            )}
          >
            {activeTab === 'lunch' && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-japandi-bg rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Utensils className="w-5 h-5 relative z-10" />
            <span className="text-xs font-medium relative z-10 hidden sm:inline">Menú</span>
          </button>

          <button
            onClick={() => onChange('essentials')}
            className={cn(
              "relative flex items-center justify-center gap-2 px-3 py-3 rounded-full transition-colors duration-300 flex-1",
              activeTab === 'essentials' ? "text-japandi-text" : "text-japandi-muted hover:text-japandi-text"
            )}
          >
            {activeTab === 'essentials' && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-japandi-bg rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <ShoppingCart className="w-5 h-5 relative z-10" />
            <span className="text-xs font-medium relative z-10 hidden sm:inline">Essentials</span>
          </button>

        </div>
      </div>
    </div>
  );
}
