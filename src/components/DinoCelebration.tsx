import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DINOS = ['🦕', '🦖', '🌴', '✨', '🥚'];

interface DinoCelebrationProps {
  show: boolean;
  onComplete: () => void;
}

export function DinoCelebration({ show, onComplete }: DinoCelebrationProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; dino: string; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    if (show) {
      // Generate random particles
      const newParticles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // vw
        y: -20 - Math.random() * 20, // start above screen
        dino: DINOS[Math.floor(Math.random() * DINOS.length)],
        size: 20 + Math.random() * 30, // px
        duration: 2 + Math.random() * 3, // seconds
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);

      // Auto hide after 5 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-japandi-bg/40 backdrop-blur-sm" />
          
          {/* Falling Dinos */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ top: `${p.y}vh`, left: `${p.x}vw`, rotate: 0, opacity: 1 }}
              animate={{ 
                top: '120vh', 
                rotate: 360,
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: p.duration, 
                delay: p.delay, 
                ease: "linear" 
              }}
              className="absolute"
              style={{ fontSize: p.size }}
            >
              {p.dino}
            </motion.div>
          ))}

          {/* Central Banner */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative z-10 bg-white/90 backdrop-blur-md px-8 py-6 rounded-3xl shadow-2xl border-2 border-japandi-sage text-center"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-6xl mb-4"
            >
              🦕
            </motion.div>
            <h2 className="text-2xl font-bold text-japandi-text mb-2">¡Rutina Completada!</h2>
            <p className="text-japandi-muted font-medium">¡Gran trabajo hoy con Enzito!</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
