import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Leaf, X, Heart, CalendarCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { LUNCH_RECIPES_DB, type RecipeDetails } from '../data/lunchDB';
import { usePlanWeek } from '../hooks/usePlanWeek';

export function EnzitoLunchTracker() {
  const { planInfo, startDate, setPlanStart, resetPlan } = usePlanWeek();
  const [currentWeek, setCurrentWeek] = useState(() => planInfo?.week ?? 'Semana 1');
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; details: RecipeDetails } | null>(null);
  const [showSetup, setShowSetup] = useState(false);
  const [dateInput, setDateInput] = useState('');

  const currentMenu = LUNCH_RECIPES_DB[currentWeek]?.[selectedDay] || LUNCH_RECIPES_DB['Semana 1'][1];

  const handleSetStart = () => {
    if (!dateInput) return;
    setPlanStart(new Date(dateInput));
    const updated = new Date(dateInput);
    const days = Math.floor((Date.now() - updated.getTime()) / 86400000);
    const idx = Math.floor(days / 7) % 4;
    setCurrentWeek(['Semana 1','Semana 2','Semana 3','Semana 4'][idx >= 0 ? idx : 0]);
    setShowSetup(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 pb-28 text-japandi-text">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-japandi-text flex items-center gap-2">
          Nutri-Plan <Utensils className="w-6 h-6 text-japandi-sage" />
        </h1>
        <p className="text-xs text-japandi-muted font-medium">Menu semanal de Enzito</p>
      </header>

      {/* Plan week banner */}
      {planInfo ? (
        <div className="bg-japandi-sage text-white rounded-[2.5rem] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] opacity-80">Semana actual del plan</p>
              <p className="text-lg font-black leading-tight">{planInfo.week} · Dia {planInfo.daysElapsed + 1}</p>
            </div>
          </div>
          <button type="button" onClick={() => { resetPlan(); setShowSetup(true); }} className="text-[9px] font-black uppercase tracking-widest opacity-70 hover:opacity-100 underline">
            Cambiar
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowSetup(true)}
          className="w-full border-2 border-dashed border-japandi-sage/40 rounded-[2.5rem] px-6 py-5 flex items-center gap-3 text-left hover:border-japandi-sage/70 transition-colors"
        >
          <CalendarCheck className="w-5 h-5 text-japandi-sage flex-shrink-0" />
          <div>
            <p className="text-sm font-black text-japandi-text">Configura el inicio del plan</p>
            <p className="text-[11px] text-japandi-muted">Para saber en que semana estas</p>
          </div>
        </button>
      )}

      {/* Setup modal */}
      <AnimatePresence>
        {showSetup && (
          <div className="fixed inset-0 z-[999] flex items-end justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSetup(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="relative w-full max-w-md bg-white rounded-t-[3rem] p-8 pb-12 shadow-2xl">
              <h2 className="text-xl font-black text-japandi-text mb-2">Fecha de inicio del plan</h2>
              <p className="text-xs text-japandi-muted mb-6">Cuando empezo el plan de 4 semanas de Enzito?</p>
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                className="w-full bg-japandi-surface rounded-2xl px-5 py-4 text-sm font-bold border-none outline-none mb-4"
              />
              <button type="button" onClick={handleSetStart} className="w-full bg-japandi-text text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest">
                Guardar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex bg-japandi-surface/50 p-1 rounded-2xl border border-japandi-border/50 overflow-x-auto gap-1">
        {['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'].map((week) => (
          <button
            key={week}
            type="button"
            onClick={() => setCurrentWeek(week)}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl text-[9px] font-black transition-all whitespace-nowrap uppercase tracking-widest",
              currentWeek === week ? "bg-white text-japandi-sage shadow-md" : "text-japandi-muted"
            )}
          >
            {week}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] p-8 shadow-sm border border-japandi-border/30">
        <div className="flex justify-between mb-8 border-b border-japandi-border/20 pb-4">
          {[{l:"L",v:1},{l:"M",v:2},{l:"X",v:3},{l:"J",v:4},{l:"V",v:5},{l:"S",v:6},{l:"D",v:0}].map((day) => (
            <button
              key={day.v}
              type="button"
              onClick={() => setSelectedDay(day.v)}
              className={cn(
                "w-9 h-9 rounded-full text-xs font-black transition-all",
                selectedDay === day.v ? "bg-japandi-sage text-white shadow-lg scale-110" : "text-japandi-muted hover:bg-japandi-surface"
              )}
            >
              {day.l}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { label: 'Desayuno', name: currentMenu.desayuno, key: 'D', color: 'orange', detail: currentMenu.desayuno_detalle },
            { label: 'Almuerzo', name: currentMenu.almuerzo, key: 'A', color: 'sage', detail: currentMenu.almuerzo_detalle },
            { label: 'Cena', name: currentMenu.cena, key: 'C', color: 'purple', detail: currentMenu.cena_detalle }
          ].map((meal) => (
            <button
              key={meal.label}
              type="button"
              onClick={() => setSelectedRecipe({ name: meal.name, details: meal.detail })}
              className="w-full text-left p-5 bg-japandi-surface/20 hover:bg-japandi-surface/40 rounded-[2.5rem] transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center font-black text-[10px]",
                  meal.color === 'sage' ? "bg-japandi-sage/20 text-japandi-sage" :
                  meal.color === 'orange' ? "bg-orange-100 text-orange-600" : "bg-purple-100 text-purple-600")}>
                  {meal.key}
                </div>
                <span className="text-[9px] font-black text-japandi-muted/60 uppercase tracking-widest">{meal.label}</span>
              </div>
              <p className="text-japandi-text font-black text-base leading-tight pl-1">{meal.name}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-japandi-sage/5 rounded-2xl border border-japandi-sage/10">
          <p className="text-[10px] font-black text-japandi-sage uppercase tracking-widest mb-1">Tip Digestivo</p>
          <p className="text-xs text-japandi-muted font-medium">{currentMenu.tip_digestivo}</p>
        </div>
      </div>

      <AnimatePresence>
        {selectedRecipe && (
          <div className="fixed inset-0 z-[999] flex items-end justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecipe(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-white rounded-t-[4rem] p-10 pb-14 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-1 flex-1 pr-4">
                  <span className="text-[9px] font-black text-japandi-sage uppercase tracking-[0.3em]">Recetario Enzito</span>
                  <h2 className="text-2xl font-black text-japandi-text leading-tight">{selectedRecipe.name}</h2>
                </div>
                <button type="button" onClick={() => setSelectedRecipe(null)} className="p-3 bg-japandi-surface rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-5 mb-8 max-h-[45vh] overflow-y-auto">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-japandi-muted mb-3 border-l-4 border-japandi-sage pl-3">Preparacion</h3>
                  <p className="text-sm text-japandi-text font-bold leading-relaxed bg-japandi-surface/30 p-5 rounded-[2rem]">{selectedRecipe.details.preparacion}</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-5 bg-orange-50 rounded-[2rem] border border-orange-100 flex items-center gap-3">
                    <Heart className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-black uppercase text-orange-600 tracking-widest">Nutri-Factor</p>
                      <p className="text-xs font-black text-japandi-text">{selectedRecipe.details.beneficios.nutricional}</p>
                    </div>
                  </div>
                  <div className="p-5 bg-japandi-sage/10 rounded-[2rem] border border-japandi-sage/20 flex items-center gap-3">
                    <Leaf className="text-japandi-sage w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-black uppercase text-japandi-sage tracking-widest">Efecto Digestivo</p>
                      <p className="text-xs font-black text-japandi-text">{selectedRecipe.details.beneficios.digestivo}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRecipe(null)}
                className="w-full bg-japandi-text text-white py-5 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em]"
              >
                Cerrar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
