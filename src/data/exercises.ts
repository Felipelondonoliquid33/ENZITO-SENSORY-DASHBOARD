import { Exercise, DailyRecord } from '../types';

export const defaultExercises: Exercise[] = [
  {
    id: 'e1',
    title: 'Masaje con texturas',
    description: 'Pasar suavemente diferentes texturas (algodón, toalla, cepillo suave) por brazos y piernas.',
    category: 'tactile',
    durationMins: 5,
  },
  {
    id: 'e2',
    title: 'Balanceo en hamaca/manta',
    description: 'Balancear a Enzito suavemente de lado a lado en una manta sostenida por dos personas.',
    category: 'vestibular',
    durationMins: 3,
  },
  {
    id: 'e3',
    title: 'Presión profunda (Abrazos de oso)',
    description: 'Dar abrazos firmes pero amorosos, o usar cojines para aplicar presión suave en su cuerpo.',
    category: 'proprioceptive',
    durationMins: 2,
  },
  {
    id: 'e4',
    title: 'Seguimiento visual con luz',
    description: 'Mover lentamente un objeto llamativo o una linterna suave para que lo siga con la mirada.',
    category: 'visual',
    durationMins: 3,
  },
  {
    id: 'e5',
    title: 'Sonidos sorpresa',
    description: 'Hacer sonar cascabeles o instrumentos suaves desde diferentes direcciones para que busque el origen.',
    category: 'auditory',
    durationMins: 4,
  }
];

export function getRecommendedExercises(mood?: DailyRecord['mood']): Exercise[] {
  let filtered = [...defaultExercises];
  
  if (mood === 'restless') {
    filtered = filtered.sort((a, b) => {
      const aScore = ['proprioceptive', 'tactile'].includes(a.category) ? 1 : 0;
      const bScore = ['proprioceptive', 'tactile'].includes(b.category) ? 1 : 0;
      return bScore - aScore;
    });
  } else if (mood === 'tired') {
    filtered = filtered.filter(e => ['vestibular', 'visual', 'auditory'].includes(e.category));
  } else if (mood === 'active') {
     filtered = filtered.sort((a, b) => {
      const aScore = ['vestibular', 'proprioceptive'].includes(a.category) ? 1 : 0;
      const bScore = ['vestibular', 'proprioceptive'].includes(b.category) ? 1 : 0;
      return bScore - aScore;
    });
  }

  return filtered;
}
