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
    1: { day: 'Lunes', plato: 'Puré de Lenteja Roja y Auyama', ingredientes: ['Lenteja pelada', 'Auyama', 'Aceite de oliva'], nivel_fibra: 'Alto', tip_digestivo: 'La lenteja roja no tiene hollejo, es más digestiva.' },
    2: { day: 'Martes', plato: 'Pollo al vapor con Brócoli suave', ingredientes: ['Pechuga', 'Arbolitos de brócoli', 'Aguacate'], nivel_fibra: 'Alto', tip_digestivo: 'El aguacate es el mejor lubricante natural.' },
    3: { day: 'Miércoles', plato: 'Crema de Calabacín y Pescado', ingredientes: ['Zucchini verde', 'Pescado blanco', 'Coco'], nivel_fibra: 'Medio', tip_digestivo: 'El calabacín tiene muchísima agua.' },
    4: { day: 'Jueves', plato: 'Garbanzos licuados con Acelga', ingredientes: ['Garbanzo (remojado 24h)', 'Acelga', 'Oliva'], nivel_fibra: 'Alto', tip_digestivo: 'La acelga mantiene el movimiento intestinal.' },
    5: { day: 'Viernes', plato: 'Risotto de Quinoa y Calabaza', ingredientes: ['Quinoa', 'Puré de calabaza', 'Queso fresco'], nivel_fibra: 'Medio', tip_digestivo: 'La quinoa tiene más fibra que el arroz blanco.' },
    6: { day: 'Sábado', plato: 'Ternera magra con Habichuelas', ingredientes: ['Carne de res', 'Habichuelas tiernas', 'Aceite de girasol'], nivel_fibra: 'Medio', tip_digestivo: 'Cortar la habichuela transversalmente para la fibra.' },
    0: { day: 'Domingo', plato: 'Sopa de Vegetales Amarillos', ingredientes: ['Auyama', 'Zanhoria', 'Pasta de estrellas'], nivel_fibra: 'Medio', tip_digestivo: 'Hidratación máxima para cerrar la semana.' },
  },
  'Semana 2': {
    1: { day: 'Lunes', plato: 'Pavo con puré de Manzana y Pera', ingredientes: ['Pechuga de pavo', 'Pera madura', 'Manzana verde'], nivel_fibra: 'Alto', tip_digestivo: 'La pera madura es un laxante natural suave.' },
    2: { day: 'Martes', plato: 'Arroz Integral con Espinacas', ingredientes: ['Arroz integral', 'Espinaca', 'Oliva'], nivel_fibra: 'Alto', tip_digestivo: 'El magnesio de la espinaca relaja el colon.' },
    3: { day: 'Miércoles', plato: 'Pescado en salsa de Granadilla', ingredientes: ['Filete de pescado', 'Zumo de granadilla'], nivel_fibra: 'Alto', tip_digestivo: 'Las semillas de granadilla aportan fibra mecánica.' },
    4: { day: 'Jueves', plato: 'Puré de Remolacha y Pollo', ingredientes: ['Remolacha cocida', 'Pollo', 'Aceite de coco'], nivel_fibra: 'Alto', tip_digestivo: 'La remolacha es excelente para el tránsito.' },
    5: { day: 'Viernes', plato: 'Lentejas con trozos de Mango', ingredientes: ['Lentejas', 'Mango maduro', 'Cilantro'], nivel_fibra: 'Alto', tip_digestivo: 'La combinación de fibra y enzimas del mango ayuda.' },
    6: { day: 'Sábado', plato: 'Crema de Espárragos y Huevo', ingredientes: ['Espárragos', 'Huevo cocido', 'Papa criolla'], nivel_fibra: 'Medio', tip_digestivo: 'El espárrago es un prebiótico natural.' },
    0: { day: 'Domingo', plato: 'Pollo "Tropical" con Piña', ingredientes: ['Pollo', 'Trozos de piña', 'Arroz'], nivel_fibra: 'Medio', tip_digestivo: 'La bromelina de la piña ayuda a digerir proteínas.' },
  },
  'Semana 3': {
    1: { day: 'Lunes', plato: 'Cerdo magro con puré de Papaya', ingredientes: ['Lomo de cerdo', 'Papaya madura', 'Limón'], nivel_fibra: 'Alto', tip_digestivo: 'La papaya tiene papaína, que acelera la digestión.' },
    2: { day: 'Martes', plato: 'Pasta de Trigo Sarraceno con Pesto', ingredientes: ['Pasta de grano', 'Albahaca', 'Nuez', 'Oliva'], nivel_fibra: 'Medio', tip_digestivo: 'El pesto aporta grasas saludables y fibra.' },
    3: { day: 'Miércoles', plato: 'Pollo con Compota de Ciruela Pasa', ingredientes: ['Pollo', 'Ciruela pasa hidratada'], nivel_fibra: 'Alto', tip_digestivo: 'La ciruela es el laxante por excelencia (sorbitol).' },
    4: { day: 'Jueves', plato: 'Puré de Batata y Acelga', ingredientes: ['Batata dulce', 'Acelga', 'Aceite de oliva'], nivel_fibra: 'Alto', tip_digestivo: 'La batata tiene fibra soluble de alta calidad.' },
    5: { day: 'Viernes', plato: 'Pescado con Ensalada de Tomate', ingredientes: ['Pescado blanco', 'Tomate', 'Aguacate'], nivel_fibra: 'Medio', tip_digestivo: 'El tomate aporta mucha agua al proceso.' },
    6: { day: 'Sábado', plato: 'Guiso de Arvejas (sin piel)', ingredientes: ['Arveja verde', 'Pollo', 'Zanahoria'], nivel_fibra: 'Medio', tip_digestivo: 'Licuar las arvejas si aún no mastica bien.' },
    0: { day: 'Domingo', plato: 'Crema de Auyama y Chía', ingredientes: ['Auyama', 'Chía hidratada'], nivel_fibra: 'Alto', tip_digestivo: 'La chía crea un gel que ayuda a deslizar las heces.' },
  },
  'Semana 4': {
    1: { day: 'Lunes', plato: 'Salmón con Brócoli', ingredientes: ['Salmón', 'Brócoli', 'Aceite de oliva'], nivel_fibra: 'Alto', tip_digestivo: 'El Omega 3 desinflama el tracto digestivo.' },
    2: { day: 'Martes', plato: 'Puré de Coliflor y Pollo', ingredientes: ['Coliflor', 'Pollo', 'Mantequilla natural'], nivel_fibra: 'Medio', tip_digestivo: 'La coliflor es alta en fibra y baja en grasa.' },
    3: { day: 'Miércoles', plato: 'Pollo con puré de Pitahaya Roja', ingredientes: ['Pollo', 'Pitahaya roja triturada'], nivel_fibra: 'Alto', tip_digestivo: 'La pitahaya es el "botón de reinicio" intestinal.' },
    4: { day: 'Jueves', plato: 'Arroz con Coco y Habichuelas', ingredientes: ['Arroz', 'Leche de coco', 'Habichuelas'], nivel_fibra: 'Medio', tip_digestivo: 'El aceite de coco ayuda mucho con el estreñimiento.' },
    5: { day: 'Viernes', plato: 'Crema de Espinacas y Papa', ingredientes: ['Espinaca baby', 'Papa', 'Aceite de oliva'], nivel_fibra: 'Medio', tip_digestivo: 'Clásico para suavizar el tránsito.' },
    6: { day: 'Sábado', plato: 'Albóndigas de Pollo y Calabacín', ingredientes: ['Pollo molido', 'Zucchini rallado', 'Tomate'], nivel_fibra: 'Medio', tip_digestivo: 'Esconder la verdura asegura la ingesta de fibra.' },
    0: { day: 'Domingo', plato: 'Banano maduro y Auyama cocida', ingredientes: ['Banano muy maduro', 'Auyama', 'Aceite de oliva'], nivel_fibra: 'Medio', tip_digestivo: 'Solo usar banano MUY maduro (pecoso).' },
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
