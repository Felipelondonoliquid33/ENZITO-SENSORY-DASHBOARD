export type DayOfWeek = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';
export type TimeBlock = '09:30 AM (Motor)' | '10:30 AM (Sensorial)' | '02:30 PM (Cerebro)';

export interface ScheduleExercise {
  time: TimeBlock;
  title: string;
  description: string;
}

export interface DailySchedule {
  day: DayOfWeek;
  theme: string;
  exercises: ScheduleExercise[];
}

export const weeklySchedule: DailySchedule[] = [
  {
    day: 'Lunes',
    theme: 'Fuerza y Gateo',
    exercises: [
      { time: '09:30 AM (Motor)', title: 'El Rodillo', description: 'Toalla bajo el pecho. Que apoye palmas para alcanzar juguetes.' },
      { time: '10:30 AM (Sensorial)', title: 'Posición 4 Puntos', description: 'Ponlo en manos y rodillas. Balanceo suave adelante y atrás.' },
      { time: '02:30 PM (Cerebro)', title: 'Rotación', description: 'Sentado, poner juguetes a sus costados para fomentar el giro del tronco y alcance.' }
    ]
  },
  {
    day: 'Martes',
    theme: 'Bolsas Sensoriales (Ziploc)',
    exercises: [
      { time: '09:30 AM (Motor)', title: 'Bolsa de Granos', description: 'Ziploc con frijoles o garbanzos (pegada al piso). Que la golpee y sienta el relieve.' },
      { time: '10:30 AM (Sensorial)', title: 'Bolsa de Gel', description: 'Ziploc con gel de pelo barato y botones de colores o escarcha. Ver cómo se deslizan.' },
      { time: '02:30 PM (Cerebro)', title: 'Causa y Efecto', description: 'Guiar su dedo para presionar la bolsa y mover un botón específico de un lado a otro.' }
    ]
  },
  {
    day: 'Miércoles',
    theme: 'Estación de Agua',
    exercises: [
      { time: '09:30 AM (Motor)', title: 'Rescate acuático', description: 'Tazón con agua y juguetes que floten. Que meta la mano y trate de atraparlos.' },
      { time: '10:30 AM (Sensorial)', title: 'Pintura con Hielo', description: 'Un cubo de hielo grande en la bandeja. Ver cómo se derrite, moja y sentir la temperatura.' },
      { time: '02:30 PM (Cerebro)', title: 'Trasvase Básico', description: 'Usar una esponja para pasar agua de un recipiente lleno a uno vacío. Exprimir la esponja.' }
    ]
  },
  {
    day: 'Jueves',
    theme: 'Manos y Lógica',
    exercises: [
      { time: '09:30 AM (Motor)', title: 'La Pinza', description: 'Poner granos de maíz pira o pasta cocida para que agarre uno a uno con índice y pulgar.' },
      { time: '10:30 AM (Sensorial)', title: '¿Dónde está?', description: 'Esconder un juguete ruidoso bajo una manta frente a él para que lo destape.' },
      { time: '02:30 PM (Cerebro)', title: 'Encaje Simple', description: 'Meter aros en un soporte, o pelotas dentro de una caja con un agujero.' }
    ]
  },
  {
    day: 'Viernes',
    theme: 'Circuito Total',
    exercises: [
      { time: '09:30 AM (Motor)', title: 'Túnel de Sábanas', description: 'Pasar por debajo de sillas tapadas. Lady (o Felipe) lo llama desde el otro lado.' },
      { time: '10:30 AM (Sensorial)', title: 'Montaña de Cojines', description: 'Poner cojines en el piso para que intente escalarlos, trabajando propiocepción.' },
      { time: '02:30 PM (Cerebro)', title: 'Seguimiento de Instrucciones', description: 'Juego de comandos simples: "Dame la pelota", "Toca el cojín", reforzando lenguaje.' }
    ]
  }
];
