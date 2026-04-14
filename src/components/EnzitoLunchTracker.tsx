import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Droplets, Leaf, ChevronRight, Calendar, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface DayMenu {
  day: string;
  plato: string;
  ingredientes: string[];
  nivel_fibra: 'Bajo' | 'Medio' | 'Alto';
  tip_digestivo: string;
}

interface WeekMenu {
  [key: number]: DayMenu;
}

const LUNCH_RECIPES_DB: Record<string, WeekMenu> = {
  'Semana 1': {
    1: { day: 'Lunes', plato: 'Crema de Auyama y Lentejas Rojas', ingredientes: ['Lentejas rojas', 'Auyama', 'Aceite de oliva extra virgen'], nivel_fibra: 'Alto', tip_digestivo: 'La auyama cocida es muy suave para el intestino.' },
    2: { day: 'Martes', plato: 'Puré de Lentejas con Espinaca', ingredientes: ['Lentejas rojas', 'Espinaca baby', 'Zanahoria'], nivel_fibra: 'Alto', tip_digestivo: 'El hierro de la espinaca ayuda a la movilidad.' },
    3: { day: 'Miércoles', plato: 'Sopita de Vegetales Naranjas', ingredientes: ['Auyama', 'Batata', 'Lentejas'], nivel_fibra: 'Medio', tip_digestivo: 'Hidratación máxima con fibras solubles.' },
    4: { day: 'Jueves', plato: 'Guiso de Lentejas Suave', ingredientes: ['Lentejas rojas', 'Tomate sin piel', 'Aceite de oliva'], nivel_fibra: 'Alto', tip_digestivo: 'El aceite de oliva actúa como lubricante natural.' },
    5: { day: 'Viernes', plato: 'Risotto de Auyama', ingredientes: ['Arroz integral', 'Puré de auyama', 'Queso fresco'], nivel_fibra: 'Medio', tip_digestivo: 'El arroz integral aporta fibra insoluble necesaria.' },
    6: { day: 'Sábado', plato: 'Hamburguesitas de Lenteja', ingredientes: ['Lentejas rojas molidas', 'Auyama rallada', 'Cebollín'], nivel_fibra: 'Alto', tip_digestivo: 'Textura divertida con mucha fibra.' },
    0: { day: 'Domingo', plato: 'Menú Libre con Fibra', ingredientes: ['Legumbres', 'Auyama al horno', 'Agua de linaza'], nivel_fibra: 'Medio', tip_digestivo: 'Prepara el sistema para la nueva semana.' },
  },
  'Semana 2': {
    1: { day: 'Lunes', plato: 'Bowl de Pitahaya y Avena', ingredientes: ['Pitahaya blanca', 'Hojuelas de avena', 'Leche vegetal'], nivel_fibra: 'Alto', tip_digestivo: 'Las semillas de la pitahaya son el mejor aliado.' },
    2: { day: 'Martes', plato: 'Ensalada de Frutas de Agua', ingredientes: ['Granadilla', 'Pera madura', 'Pitahaya'], nivel_fibra: 'Alto', tip_digestivo: 'Frutas con alto contenido de agua para hidratar el bolo.' },
    3: { day: 'Miércoles', plato: 'Compota de Pera y Chía', ingredientes: ['Pera al vapor', 'Semillas de chía', 'Canela'], nivel_fibra: 'Medio', tip_digestivo: 'La pectina de la pera ablanda las heces.' },
    4: { day: 'Jueves', plato: 'Smoothie Verde Suave', ingredientes: ['Pitahaya', 'Espinaca', 'Manzana verde'], nivel_fibra: 'Alto', tip_digestivo: 'Clorofila y fibra para limpiar el tránsito.' },
    5: { day: 'Viernes', plato: 'Yogurt con Granadilla', ingredientes: ['Yogurt natural', 'Pulpa de granadilla', 'Nueces molidas'], nivel_fibra: 'Medio', tip_digestivo: 'Probióticos + Fibra = Intestino feliz.' },
    6: { day: 'Sábado', plato: 'Pancake de Pera', ingredientes: ['Avena molida', 'Pera rallada', 'Huevo'], nivel_fibra: 'Medio', tip_digestivo: 'Desayuno/Almuerzo rico en fibra soluble.' },
    0: { day: 'Domingo', plato: 'Gelatina Natural de Frutas', ingredientes: ['Pitahaya', 'Pera', 'Gelatina sin sabor'], nivel_fibra: 'Bajo', tip_digestivo: 'Suave digestión para el domingo.' },
  },
  'Semana 3': {
    1: { day: 'Lunes', plato: 'Papaya con Chía Hidratada', ingredientes: ['Papaya madura', 'Chía en remojo (12h)', 'Limón'], nivel_fibra: 'Alto', tip_digestivo: 'La papaína es una enzima digestiva potente.' },
    2: { day: 'Martes', plato: 'Pudin de Chía y Ciruela', ingredientes: ['Ciruela pasa picada', 'Semillas de chía', 'Leche de coco'], nivel_fibra: 'Alto', tip_digestivo: 'La ciruela pasa es el laxante natural clásico.' },
    3: { day: 'Miércoles', plato: 'Bowl Tropical de Papaya', ingredientes: ['Papaya', 'Mango', 'Semillas de cáñamo'], nivel_fibra: 'Medio', tip_digestivo: 'Frutas tropicales para estimular el movimiento.' },
    4: { day: 'Jueves', plato: 'Agua de Ciruela y Papaya', ingredientes: ['Extracto de papaya', 'Ciruelas remojadas'], nivel_fibra: 'Medio', tip_digestivo: 'Concentración de sorbitol natural (ciruelas).' },
    5: { day: 'Viernes', plato: 'Avena Nocturna con Chía', ingredientes: ['Avena', 'Chía', 'Trocitos de papaya'], nivel_fibra: 'Alto', tip_digestivo: 'Fibra fermentable para la microbiota.' },
    6: { day: 'Sábado', plato: 'Ensalada Refrescante', ingredientes: ['Papaya', 'Ciruela fresca', 'Menta'], nivel_fibra: 'Medio', tip_digestivo: 'Digestión ligera y efectiva.' },
    0: { day: 'Domingo', plato: 'Compota de Ciruela Pasa', ingredientes: ['Ciruelas cocidas', 'Canela'], nivel_fibra: 'Alto', tip_digestivo: 'Reset intestinal para iniciar la semana.' },
  },
  'Semana 4': {
    1: { day: 'Lunes', plato: 'Pasta de Brócoli y Aguacate', ingredientes: ['Pasta integral', 'Brócoli al vapor', 'Aguacate Hass'], nivel_fibra: 'Alto', tip_digestivo: 'Grasas saludables del aguacate ayudan al tránsito.' },
    2: { day: 'Martes', plato: 'Crema Verde Potente', ingredientes: ['Espinaca', 'Brócoli', 'Cebolla'], nivel_fibra: 'Alto', tip_digestivo: 'Magnesio de la espinaca para relajar el colon.' },
    3: { day: 'Miércoles', plato: 'Tostadas de Aguacate', ingredientes: ['Pan integral', 'Aguacate', 'Huevo poché'], nivel_fibra: 'Medio', tip_digestivo: 'Equilibrio de grasas, proteína y fibra.' },
    4: { day: 'Jueves', plato: 'Brócoli Gratinado', ingredientes: ['Brócoli', 'Queso bajo en grasa', 'Almendras'], nivel_fibra: 'Medio', tip_digestivo: 'El brócoli aporta fibra insoluble voluminosa.' },
    5: { day: 'Viernes', plato: 'Omelette de Espinaca', ingredientes: ['Hígado picado (opcional)', 'Espinaca', 'Huevo'], nivel_fibra: 'Medio', tip_digestivo: 'Hierro y fibra en un solo plato.' },
    6: { day: 'Sábado', plato: 'Ensalada de Aguacate y Verde', ingredientes: ['Aguacate', 'Espinaca', 'Pepino'], nivel_fibra: 'Medio', tip_digestivo: 'Hidratación y grasas de buena calidad.' },
    0: { day: 'Domingo', plato: 'Vapor de Brócoli y Zanahoria', ingredientes: ['Brócoli', 'Zanahoria', 'Zumo de limón'], nivel_fibra: 'Medio', tip_digestivo: 'Preparación gástrica suave.' },
  }
};

export function EnzitoLunchTracker() {
  const [currentWeek, setCurrentWeek] = useState('Semana 1');
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [todayInfo, setTodayInfo] = useState({ week: 'Semana 1', day: new Date().getDay() });

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const weekNum = Math.ceil(dayOfMonth / 7);
    const weekKey = `Semana ${weekNum > 4 ? 4 : weekNum}`;
    const dayKey = today.getDay();

    setCurrentWeek(weekKey);
    setSelectedDay(dayKey);
    setTodayInfo({ week: weekKey, day: dayKey });
  }, []);

  const currentMenu = LUNCH_RECIPES_DB[currentWeek][selectedDay];
  const isToday = currentWeek === todayInfo.week && selectedDay === todayInfo.day;

  const weekTabs = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  const dayTabs = [
    { label: 'L', value: 1 },
    { label: 'M', value: 2 },
    { label: 'M', value: 3 },
    { label: 'J', value: 4 },
    { label: 'V', value: 5 },
    { label: 'S', value: 6 },
    { label: 'D', value: 0 },
  ];

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 pb-28">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-japandi-text flex items-center gap-2">
          Nutri-Plan Enzito <Utensils className="w-6 h-6 text-japandi-sage" />
        </h1>
        <p className="text-japandi-muted text-sm italic">
          Menú rotativo diseñado para combatir el estreñimiento.
        </p>
      </header>

      {/* Week Selector */}
      <div className="flex bg-japandi-surface/50 p-1 rounded-2xl border border-japandi-border/50 overflow-x-auto no-scrollbar gap-1">
        {weekTabs.map((week) => (
          <button
            key={week}
            onClick={() => setCurrentWeek(week)}
            className={cn(
              "flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap",
              currentWeek === week 
                ? "bg-white text-japandi-sage shadow-sm border border-japandi-border/30" 
                : "text-japandi-muted hover:text-japandi-text"
            )}
          >
            {week}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <motion.div 
        layout
        className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-japandi-border/30 relative overflow-hidden"
      >
        {isToday && (
          <div className="absolute top-4 right-6 flex items-center gap-1.5 bg-japandi-sage/10 text-japandi-sage px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-japandi-sage/20">
            <CheckCircle2 className="w-3 h-3" /> Hoy
          </div>
        )}

        {/* Day Selector Tabs */}
        <div className="flex justify-between mb-8 border-b border-japandi-border/20 pb-4">
          {dayTabs.map((day) => (
            <button
              key={day.value}
              onClick={() => setSelectedDay(day.value)}
              className={cn(
                "w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all",
                selectedDay === day.value
                  ? "bg-japandi-sage text-white scale-110 shadow-md shadow-japandi-sage/20"
                  : "text-japandi-muted hover:bg-japandi-surface"
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentWeek}-${selectedDay}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <span className="text-japandi-sage text-xs font-bold uppercase tracking-widest">{currentMenu.day}</span>
                <h2 className="text-2xl font-semibold text-japandi-text mt-1">{currentMenu.plato}</h2>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-japandi-surface/50 p-4 rounded-3xl border border-japandi-border/30">
                  <div className="flex items-center gap-2 mb-2 text-japandi-sage">
                    <Leaf className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Ingredientes</span>
                  </div>
                  <ul className="space-y-1">
                    {currentMenu.ingredientes.map((ing, i) => (
                      <li key={i} className="text-sm text-japandi-text/80 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-japandi-sage/50" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-24 bg-japandi-surface/50 p-4 rounded-3xl border border-japandi-border/30 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold text-japandi-muted uppercase mb-1 leading-none">Fibra</span>
                  <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded-lg",
                    currentMenu.nivel_fibra === 'Alto' ? "bg-green-100 text-green-700" :
                    currentMenu.nivel_fibra === 'Medio' ? "bg-amber-100 text-amber-700" : "bg-japandi-border text-japandi-muted"
                  )}>
                    {currentMenu.nivel_fibra}
                  </span>
                  <Droplets className="w-4 h-4 mt-2 text-blue-400" />
                </div>
              </div>

              <div className="bg-japandi-sage/5 p-4 rounded-3xl border border-dashed border-japandi-sage/30 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Info className="w-4 h-4 text-japandi-sage" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-japandi-sage uppercase">Tip Digestivo</p>
                  <p className="text-sm text-japandi-text leading-snug italic">"{currentMenu.tip_digestivo}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Footer Info */}
      <div className="flex items-center gap-3 bg-japandi-surface/30 p-4 rounded-3xl border border-japandi-border/20">
        <Calendar className="w-5 h-5 text-japandi-muted" />
        <p className="text-[11px] text-japandi-muted leading-tight">
          Hoy es <strong>{new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}</strong>. 
          Sistema siguiendo rotación automática de {todayInfo.week}.
        </p>
      </div>
    </div>
  );
}
