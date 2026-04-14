import { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Trash2, CheckCircle, CalendarCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { LUNCH_RECIPES_DB } from '../data/lunchDB';
import { usePlanWeek } from '../hooks/usePlanWeek';

interface ListItem {
  id: string;
  text: string;
  completed: boolean;
}

export function EnzitoEssentials() {
  const { planInfo } = usePlanWeek();
  const [currentWeek, setCurrentWeek] = useState(() => planInfo?.week ?? 'Semana 1');
  const [listItems, setListItems] = useState<ListItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('enzito-essentials');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('enzito-essentials', JSON.stringify(listItems));
    }
  }, [listItems]);

  const addListItem = () => {
    if (!newItem.trim()) return;
    setListItems([...listItems, { id: Math.random().toString(36).substr(2, 9), text: newItem, completed: false }]);
    setNewItem('');
  };

  const toggleItem = (id: string) => {
    setListItems(listItems.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const deleteItem = (id: string) => {
    setListItems(listItems.filter(item => item.id !== id));
  };

  const getGroceryList = () => {
    const allIngredients = new Set<string>();
    const currentWeekData = LUNCH_RECIPES_DB[currentWeek];
    if (currentWeekData) {
      Object.values(currentWeekData).forEach(day => {
        day.ingredientes.forEach(ing => allIngredients.add(ing));
      });
    }
    return Array.from(allIngredients);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 pb-28 text-japandi-text">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-japandi-text flex items-center gap-2">
          Essentials <ShoppingCart className="w-6 h-6 text-japandi-sage" />
        </h1>
        <p className="text-xs text-japandi-muted font-medium">Lista de compras y pendientes de Enzito</p>
      </header>

      {/* Plan week banner */}
      {planInfo && (
        <div className="bg-japandi-sage/10 border border-japandi-sage/20 rounded-[2.5rem] px-6 py-4 flex items-center gap-3">
          <CalendarCheck className="w-5 h-5 text-japandi-sage flex-shrink-0" />
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-japandi-sage">Semana actual del plan</p>
            <p className="text-base font-black text-japandi-text">{planInfo.week} &middot; Dia {planInfo.daysElapsed + 1}</p>
          </div>
        </div>
      )}

      {/* Grocery List */}
      <div className="bg-japandi-surface/30 rounded-[3rem] p-8 border border-japandi-border/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 text-japandi-muted">
            <ShoppingCart className="w-4 h-4" /> Lista de Compras
          </h3>
        </div>

        {/* Week selector */}
        <div className="flex bg-white p-1 rounded-2xl border border-japandi-border/30 overflow-x-auto gap-1 mb-6">
          {['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'].map((week) => (
            <button
              key={week}
              type="button"
              onClick={() => setCurrentWeek(week)}
              className={cn(
                "flex-1 py-2.5 px-3 rounded-xl text-[9px] font-black transition-all whitespace-nowrap uppercase tracking-widest",
                currentWeek === week ? "bg-japandi-sage text-white shadow-md" : "text-japandi-muted"
              )}
            >
              {week}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {getGroceryList().map(ing => (
            <span
              key={ing}
              className="px-4 py-2 bg-white rounded-2xl text-[11px] font-black border border-japandi-border/40 text-japandi-text shadow-sm"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* Task Manager */}
      <div className="bg-white rounded-[3rem] p-8 border border-japandi-border/30 shadow-sm">
        <h3 className="text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 mb-6 text-japandi-muted">
          <Plus className="w-4 h-4" /> Pendientes de Enzito
        </h3>
        <div className="flex gap-2 mb-6">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addListItem()}
            placeholder="Agregar tarea o item..."
            className="flex-1 bg-japandi-surface rounded-2xl px-5 py-4 text-sm font-bold border-none outline-none placeholder:text-japandi-muted/40"
          />
          <button
            type="button"
            onClick={addListItem}
            className="bg-japandi-text text-white p-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        {listItems.length === 0 && (
          <p className="text-center text-japandi-muted/50 text-xs font-black py-6">Sin items aun. Agrega algo!</p>
        )}
        <div className="space-y-3">
          {listItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-4 rounded-[2rem] bg-japandi-surface/40">
              <button type="button" onClick={() => toggleItem(item.id)}>
                {item.completed
                  ? <CheckCircle className="text-japandi-sage w-6 h-6" />
                  : <div className="w-6 h-6 rounded-full border-2 border-japandi-border" />}
              </button>
              <p className={cn("flex-1 text-sm font-black", item.completed && "line-through text-japandi-muted/50")}>
                {item.text}
              </p>
              <button type="button" onClick={() => deleteItem(item.id)} className="text-red-300 hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
