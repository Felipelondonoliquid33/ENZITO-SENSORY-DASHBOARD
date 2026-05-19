export interface RecipeDetails {
  preparacion: string;
  beneficios: {
    nutricional: string;
    digestivo: string;
  };
}

export interface MealPlan {
  day: string;
  desayuno: string;
  desayuno_detalle: RecipeDetails;
  almuerzo: string;
  almuerzo_detalle: RecipeDetails;
  cena: string;
  cena_detalle: RecipeDetails;
  ingredientes: string[];
  nivel_fibra: 'Bajo' | 'Medio' | 'Alto';
  tip_digestivo: string;
}

export interface WeekMenu {
  [key: number]: MealPlan;
}

export const LUNCH_RECIPES_DB: Record<string, WeekMenu> = {
  'Semana 1': {
    1: {
      day: 'Lunes',
      desayuno: 'Papaya en cubos',
      desayuno_detalle: {
        preparacion: 'Cortar papaya madura, servir fría.',
        beneficios: { nutricional: 'Vitamina C', digestivo: 'Papaina enzimática' }
      },
      almuerzo: 'Salmon hervido en caldo + arroz',
      almuerzo_detalle: {
        preparacion: 'Hervir salmon 8 min en agua con sal. Servir con caldo y arroz cocido.',
        beneficios: { nutricional: 'Omega 3 + proteina', digestivo: 'Hidratacion' }
      },
      cena: 'Sopa tilapia + fideos',
      cena_detalle: {
        preparacion: 'Tilapia hervida en caldo. Agregar fideos 5 min. Listo.',
        beneficios: { nutricional: 'Proteina marina', digestivo: 'Suave' }
      },
      ingredientes: ['Salmon', 'Tilapia', 'Arroz', 'Fideos'],
      nivel_fibra: 'Bajo',
      tip_digestivo: '⏱️ 15 min total.'
    },
    2: {
      day: 'Martes',
      desayuno: 'Pera cocida',
      desayuno_detalle: {
        preparacion: 'Hervir pera 5 min. Servir en el agua de cocción.',
        beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante natural' }
      },
      almuerzo: 'Merluza al vapor + caldo con zanahoria',
      almuerzo_detalle: {
        preparacion: 'Merluza al vapor 8 min. Caldo con zanahoria cocida.',
        beneficios: { nutricional: 'Proteina + betacaroteno', digestivo: 'Facil' }
      },
      cena: 'Caldo de pescado + noodles',
      cena_detalle: {
        preparacion: 'Caldo de pescado. Noodles 3 min. Listo.',
        beneficios: { nutricional: 'Colageno', digestivo: 'Reconfortante' }
      },
      ingredientes: ['Merluza', 'Zanahoria', 'Noodles', 'Caldo'],
      nivel_fibra: 'Bajo',
      tip_digestivo: '⏱️ 15 min.'
    },
    3: {
      day: 'Miercoles',
      desayuno: 'Kiwi licuado en Caldo ligero',
      desayuno_detalle: {
        preparacion: 'Procesar kiwi sin cascara + 100ml caldo vegetal casero. Beber como jugo digestivo.',
        beneficios: { nutricional: 'Actinidina + enzimas', digestivo: 'Laxante enzimático potente' }
      },
      almuerzo: 'Salmon Desmenuzado en Sopa de Coco con Zanahoria',
      almuerzo_detalle: {
        preparacion: 'Salmon cocido desmenuzado fino. Base: caldo + leche de coco + zanahoria licuada.',
        beneficios: { nutricional: 'Omega 3 + TCM + carotenos', digestivo: 'Antiinflamatorio + hidratacion' }
      },
      cena: 'Crema de Zanahoria y Merluza',
      cena_detalle: {
        preparacion: 'Zanahoria al vapor licuada + merluza desmechada + caldo. Textura untuosa.',
        beneficios: { nutricional: 'Vitamina A + proteina marina', digestivo: 'Suave y nutritivo' }
      },
      ingredientes: ['Salmon', 'Merluza', 'Zanahoria', 'Leche de coco'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Kiwi por las mañanas: activa enzimas digestivas para todo el dia.'
    },
    4: {
      day: 'Jueves',
      desayuno: 'Ciruela pasa Hidratada en Agua tibia',
      desayuno_detalle: {
        preparacion: 'Remojar 2 ciruelas pasas en agua tibia 20 min. Procesar todo (agua incluida).',
        beneficios: { nutricional: 'Sorbitol + fibra suave', digestivo: 'Laxante natural comprobado' }
      },
      almuerzo: 'Branzino al Vapor con Sopa de Cebada y Zanahoria',
      almuerzo_detalle: {
        preparacion: 'Branzino 12 min al vapor. Servir en caldo con cebada cocida y zanahoria fina.',
        beneficios: { nutricional: 'Omega 3 + minerales', digestivo: 'Fibra soluble + hidratacion' }
      },
      cena: 'Caldo de Pescado con Fideos y Perejil',
      cena_detalle: {
        preparacion: 'Caldo casero de espinas de pescado. Fideos muy finos. Perejil fresco picado.',
        beneficios: { nutricional: 'Colageno marino puro', digestivo: 'Sana mucosa intestinal' }
      },
      ingredientes: ['Branzino', 'Cebada', 'Zanahoria', 'Caldo casero'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Ciruela al desayuno = mejor que cualquier medicamento natural.'
    },
    5: {
      day: 'Viernes',
      desayuno: 'Platano maduro',
      desayuno_detalle: {
        preparacion: 'Pelar platano. Cortar. Comer.',
        beneficios: { nutricional: 'Potasio', digestivo: 'Prebiotico' }
      },
      almuerzo: 'Pejerrey hervido + caldo + papa cocida',
      almuerzo_detalle: {
        preparacion: 'Pejerrey 8 min. Papa en caldo. Mezclar.',
        beneficios: { nutricional: 'Omega 3 + carbos', digestivo: 'Nutritivo' }
      },
      cena: 'Merluza + sopa caldo',
      cena_detalle: {
        preparacion: 'Merluza 8 min en caldo. Servir caliente.',
        beneficios: { nutricional: 'Proteina', digestivo: 'Suave' }
      },
      ingredientes: ['Pejerrey', 'Merluza', 'Papa', 'Platano'],
      nivel_fibra: 'Bajo',
      tip_digestivo: '⏱️ 10 min.'
    },
    6: {
      day: 'Sabado',
      desayuno: 'Mango en cubos',
      desayuno_detalle: {
        preparacion: 'Pelar mango. Cortar. Servir frío.',
        beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' }
      },
      almuerzo: 'Salmon + arroz + caldo',
      almuerzo_detalle: {
        preparacion: 'Salmon 8 min. Arroz cocido. Caldo caliente.',
        beneficios: { nutricional: 'Omega 3 + carbos', digestivo: 'Saciante' }
      },
      cena: 'Sopa noodles + merluza',
      cena_detalle: {
        preparacion: 'Merluza en caldo. Noodles 3 min. Listo.',
        beneficios: { nutricional: 'Proteina', digestivo: 'Facil' }
      },
      ingredientes: ['Salmon', 'Merluza', 'Arroz', 'Noodles'],
      nivel_fibra: 'Bajo',
      tip_digestivo: '⏱️ 12 min.'
    },
    0: {
      day: 'Domingo',
      desayuno: 'Papaya en cubos',
      desayuno_detalle: {
        preparacion: 'Cortar papaya. Servir fría.',
        beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' }
      },
      almuerzo: 'Tilapia + caldo + noodles',
      almuerzo_detalle: {
        preparacion: 'Tilapia 8 min. Noodles 3 min. Caldo caliente.',
        beneficios: { nutricional: 'Proteina', digestivo: 'Reconfortante' }
      },
      cena: 'Sopa bacalao + fideos',
      cena_detalle: {
        preparacion: 'Bacalao en caldo 8 min. Fideos 3 min. Listo.',
        beneficios: { nutricional: 'Proteina marina', digestivo: 'Suave' }
      },
      ingredientes: ['Tilapia', 'Bacalao', 'Noodles', 'Fideos'],
      nivel_fibra: 'Bajo',
      tip_digestivo: '⏱️ 12 min fin de semana.'
    },
  },
  'Semana 2': {
    1: { day: 'Lunes', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Servir.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + arroz + caldo', almuerzo_detalle: { preparacion: 'Salmon 8 min. Arroz. Caldo caliente.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Sopa tilapia + fideos', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Salmon', 'Tilapia', 'Arroz', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    2: { day: 'Martes', desayuno: 'Pera cocida', desayuno_detalle: { preparacion: 'Hervir pera 5 min. En su agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante' } }, almuerzo: 'Merluza + zanahoria + caldo', almuerzo_detalle: { preparacion: 'Merluza 8 min al vapor. Zanahoria cocida. Caldo.', beneficios: { nutricional: 'Proteina + vitamina A', digestivo: 'Hidratante' } }, cena: 'Noodles + bacalao en caldo', cena_detalle: { preparacion: 'Bacalao en caldo 8 min. Noodles 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Facil' } }, ingredientes: ['Merluza', 'Bacalao', 'Zanahoria', 'Noodles'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    3: { day: 'Miercoles', desayuno: 'Kiwi crudo', desayuno_detalle: { preparacion: 'Cortar kiwi. Comer con cuchara.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas digestivas' } }, almuerzo: 'Atun lata + caldo + papa', almuerzo_detalle: { preparacion: 'Atun + caldo caliente. Papa cocida.', beneficios: { nutricional: 'Omega 3', digestivo: 'Rapido' } }, cena: 'Branzino + sopa + fideos', cena_detalle: { preparacion: 'Branzino 8 min. Fideos 3 min en caldo.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Atun', 'Branzino', 'Papa', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    4: { day: 'Jueves', desayuno: 'Ciruela pasa', desayuno_detalle: { preparacion: 'Remojar ciruelas 2 min. Comer y beber agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante natural' } }, almuerzo: 'Dorada + caldo + arroz', almuerzo_detalle: { preparacion: 'Dorada 8 min al vapor. Arroz en caldo.', beneficios: { nutricional: 'Omega 3 + carbos', digestivo: 'Nutritivo' } }, cena: 'Sopa tilapia + zanahoria', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Zanahoria cocida.', beneficios: { nutricional: 'Vitamina A', digestivo: 'Facil' } }, ingredientes: ['Dorada', 'Tilapia', 'Arroz', 'Zanahoria'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    5: { day: 'Viernes', desayuno: 'Platano maduro', desayuno_detalle: { preparacion: 'Pelar. Cortar. Comer.', beneficios: { nutricional: 'Potasio', digestivo: 'Prebiotico' } }, almuerzo: 'Pejerrey + papa + caldo', almuerzo_detalle: { preparacion: 'Pejerrey 8 min. Papa en caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Merluza + sopa caldo', cena_detalle: { preparacion: 'Merluza 8 min en caldo caliente.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Pejerrey', 'Merluza', 'Papa', 'Platano'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    6: { day: 'Sabado', desayuno: 'Mango crudo', desayuno_detalle: { preparacion: 'Pelar mango. Cortar. Frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + noodles + caldo', almuerzo_detalle: { preparacion: 'Salmon 8 min. Noodles 3 min en caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Reconfortante' } }, cena: 'Fideos + bacalao + caldo', cena_detalle: { preparacion: 'Bacalao 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Facil' } }, ingredientes: ['Salmon', 'Bacalao', 'Noodles', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    0: { day: 'Domingo', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Servir frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Tilapia + noodles + caldo', almuerzo_detalle: { preparacion: 'Tilapia 8 min. Noodles 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, cena: 'Sopa bacalao + fideos', cena_detalle: { preparacion: 'Bacalao en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Facil' } }, ingredientes: ['Tilapia', 'Bacalao', 'Noodles', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min weekend.' },
  },
  'Semana 3': {
    1: { day: 'Lunes', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Servir.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + arroz + caldo', almuerzo_detalle: { preparacion: 'Salmon 8 min. Arroz. Caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Tilapia + sopa fideos', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Salmon', 'Tilapia', 'Arroz', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    2: { day: 'Martes', desayuno: 'Ciruela pasa', desayuno_detalle: { preparacion: 'Remojar 2 min. Comer. Beber agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante' } }, almuerzo: 'Merluza + zanahoria + caldo', almuerzo_detalle: { preparacion: 'Merluza 8 min al vapor. Zanahoria. Caldo.', beneficios: { nutricional: 'Proteina + vitamina A', digestivo: 'Facil' } }, cena: 'Noodles + branzino en caldo', cena_detalle: { preparacion: 'Branzino en caldo 8 min. Noodles 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Merluza', 'Branzino', 'Zanahoria', 'Noodles'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    3: { day: 'Miercoles', desayuno: 'Pera cocida', desayuno_detalle: { preparacion: 'Hervir pera 5 min. En su agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante suave' } }, almuerzo: 'Atun lata + papa + caldo', almuerzo_detalle: { preparacion: 'Atun + caldo caliente. Papa cocida.', beneficios: { nutricional: 'Omega 3', digestivo: 'Rapido' } }, cena: 'Salmon + sopa fideos', cena_detalle: { preparacion: 'Salmon en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Atun', 'Salmon', 'Papa', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    4: { day: 'Jueves', desayuno: 'Kiwi crudo', desayuno_detalle: { preparacion: 'Cortar kiwi. Comer con cuchara.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Actinidina' } }, almuerzo: 'Dorada + caldo + noodles', almuerzo_detalle: { preparacion: 'Dorada 8 min al vapor. Noodles en caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Tilapia + zanahoria en sopa', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Zanahoria cocida.', beneficios: { nutricional: 'Vitamina A', digestivo: 'Suave' } }, ingredientes: ['Dorada', 'Tilapia', 'Zanahoria', 'Noodles'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    5: { day: 'Viernes', desayuno: 'Mango crudo', desayuno_detalle: { preparacion: 'Pelar mango. Cortar. Frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Pejerrey + papa + caldo', almuerzo_detalle: { preparacion: 'Pejerrey 8 min. Papa en caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Nutritivo' } }, cena: 'Merluza + sopa fideos', cena_detalle: { preparacion: 'Merluza en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Facil' } }, ingredientes: ['Pejerrey', 'Merluza', 'Papa', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    6: { day: 'Sabado', desayuno: 'Platano maduro', desayuno_detalle: { preparacion: 'Pelar. Cortar. Comer.', beneficios: { nutricional: 'Potasio', digestivo: 'Prebiotico' } }, almuerzo: 'Bacalao + arroz + caldo', almuerzo_detalle: { preparacion: 'Bacalao 8 min. Arroz en caldo.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Saciante' } }, cena: 'Apio + tilapia en sopa', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Apio cocido.', beneficios: { nutricional: 'Sodio natural', digestivo: 'Suave' } }, ingredientes: ['Bacalao', 'Tilapia', 'Arroz', 'Apio'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    0: { day: 'Domingo', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + caldo + noodles', almuerzo_detalle: { preparacion: 'Salmon 8 min. Noodles en caldo 3 min.', beneficios: { nutricional: 'Omega 3', digestivo: 'Reconfortante' } }, cena: 'Pescado blanco + sopa fideos', cena_detalle: { preparacion: 'Pescado en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Ultra suave' } }, ingredientes: ['Salmon', 'Pescado blanco', 'Noodles', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min finish semana.' },
  },
  'Semana 4': {
    1: { day: 'Lunes', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Servir frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + arroz + caldo', almuerzo_detalle: { preparacion: 'Salmon 8 min. Arroz. Caldo caliente.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Sopa branzino + fideos', cena_detalle: { preparacion: 'Branzino en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Salmon', 'Branzino', 'Arroz', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min final.' },
    2: { day: 'Martes', desayuno: 'Ciruela pasa', desayuno_detalle: { preparacion: 'Remojar 2 min. Comer. Beber agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante' } }, almuerzo: 'Merluza + caldo + calabaza', almuerzo_detalle: { preparacion: 'Merluza 8 min. Calabaza cocida en caldo.', beneficios: { nutricional: 'Proteina + vitamina A', digestivo: 'Facil' } }, cena: 'Tilapia + sopa fideos', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina', digestivo: 'Suave' } }, ingredientes: ['Merluza', 'Tilapia', 'Calabaza', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    3: { day: 'Miercoles', desayuno: 'Kiwi crudo', desayuno_detalle: { preparacion: 'Cortar kiwi. Comer con cuchara.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Actinidina' } }, almuerzo: 'Atun lata + arroz + caldo', almuerzo_detalle: { preparacion: 'Atun + caldo. Arroz cocido.', beneficios: { nutricional: 'Omega 3', digestivo: 'Rapido' } }, cena: 'Salmon + sopa coliflor', cena_detalle: { preparacion: 'Salmon en caldo 8 min. Coliflor cocida.', beneficios: { nutricional: 'Proteina', digestivo: 'Ultra suave' } }, ingredientes: ['Atun', 'Salmon', 'Arroz', 'Coliflor'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    4: { day: 'Jueves', desayuno: 'Pera cocida', desayuno_detalle: { preparacion: 'Hervir pera 5 min. En su agua.', beneficios: { nutricional: 'Sorbitol', digestivo: 'Laxante' } }, almuerzo: 'Dorada + caldo + noodles', almuerzo_detalle: { preparacion: 'Dorada 8 min al vapor. Noodles 3 min.', beneficios: { nutricional: 'Omega 3', digestivo: 'Facil' } }, cena: 'Merluza + zanahoria en sopa', cena_detalle: { preparacion: 'Merluza en caldo 8 min. Zanahoria cocida.', beneficios: { nutricional: 'Vitamina A', digestivo: 'Suave' } }, ingredientes: ['Dorada', 'Merluza', 'Zanahoria', 'Noodles'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    5: { day: 'Viernes', desayuno: 'Platano maduro', desayuno_detalle: { preparacion: 'Pelar. Cortar. Comer.', beneficios: { nutricional: 'Potasio', digestivo: 'Prebiotico' } }, almuerzo: 'Pejerrey + caldo + papa', almuerzo_detalle: { preparacion: 'Pejerrey 8 min. Papa en caldo.', beneficios: { nutricional: 'Omega 3', digestivo: 'Nutritivo' } }, cena: 'Pescado blanco + sopa fideos', cena_detalle: { preparacion: 'Pescado en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Facil' } }, ingredientes: ['Pejerrey', 'Pescado blanco', 'Papa', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 10 min.' },
    6: { day: 'Sabado', desayuno: 'Mango crudo', desayuno_detalle: { preparacion: 'Pelar mango. Cortar. Frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Bacalao + arroz + caldo', almuerzo_detalle: { preparacion: 'Bacalao 8 min. Arroz en caldo.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Saciante' } }, cena: 'Tilapia + sopa apio', cena_detalle: { preparacion: 'Tilapia en caldo 8 min. Apio cocido.', beneficios: { nutricional: 'Sodio natural', digestivo: 'Suave' } }, ingredientes: ['Bacalao', 'Tilapia', 'Arroz', 'Apio'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min.' },
    0: { day: 'Domingo', desayuno: 'Papaya cruda', desayuno_detalle: { preparacion: 'Cortar papaya. Frío.', beneficios: { nutricional: 'Vitamina C', digestivo: 'Enzimas' } }, almuerzo: 'Salmon + caldo + noodles', almuerzo_detalle: { preparacion: 'Salmon 8 min. Noodles en caldo 3 min.', beneficios: { nutricional: 'Omega 3', digestivo: 'Reconfortante' } }, cena: 'Merluza + sopa fideos', cena_detalle: { preparacion: 'Merluza en caldo 8 min. Fideos 3 min.', beneficios: { nutricional: 'Proteina marina', digestivo: 'Ultra suave' } }, ingredientes: ['Salmon', 'Merluza', 'Noodles', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: '⏱️ 12 min FINAL.' },
  }
};
    2: { day: 'Martes', desayuno: 'Manzana Cocida en Caldo de Jengibre', desayuno_detalle: { preparacion: 'Manzana sin cascara cocida en caldo con jengibre fresco rallado suave.', beneficios: { nutricional: 'Pectina + antiinflamatorio', digestivo: 'Regula intestinos suavemente' } }, almuerzo: 'Branzino al Vapor con Pure de Batata Liquido', almuerzo_detalle: { preparacion: 'Branzino 12 min al vapor. Batata en caldo casero, muy cremosa.', beneficios: { nutricional: 'Omega 3 + betacarotenos', digestivo: 'Anti-constipación' } }, cena: 'Sopa de Merluza con Fideos y Zanahoria', cena_detalle: { preparacion: 'Merluza desmechada en caldo casero con fideos muy finos y zanahoria.', beneficios: { nutricional: 'Colageno + minerales', digestivo: 'Hidratacion completa' } }, ingredientes: ['Branzino', 'Merluza', 'Batata', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Jengibre cada 2 dias: anti-inflamatorio suave.' },
    3: { day: 'Miercoles', desayuno: 'Kiwi Licuado en Agua de Coco Natural', desayuno_detalle: { preparacion: 'Kiwi procesado + agua de coco natural (no leche). Jugo digestivo premium.', beneficios: { nutricional: 'Actinidina + electrolitos', digestivo: 'Laxante enzimático + hidratacion' } }, almuerzo: 'Salmon con Sopa de Arroz Integral y Caldo', almuerzo_detalle: { preparacion: 'Salmon deshilachado en sopa de arroz integral cocido lentamente en caldo.', beneficios: { nutricional: 'Omega 3 + fibra integral', digestivo: 'Prebiotico completo' } }, cena: 'Crema de Calabaza y Atun Fresco', cena_detalle: { preparacion: 'Calabaza licuada + atun desmechado fino. Todo en caldo casero denso.', beneficios: { nutricional: 'Betacarotenos + Omega 3', digestivo: 'Suave y nutritivo' } }, ingredientes: ['Salmon', 'Atun', 'Calabaza', 'Arroz integral'], nivel_fibra: 'Bajo', tip_digestivo: 'Agua de coco: mejor que cualquier bebida procesada.' },
    4: { day: 'Jueves', desayuno: 'Ciruela Pasa en Caldo Tibia', desayuno_detalle: { preparacion: 'Ciruelas remojadas en caldo vegetal tibia. Procesar todo incluido el liquido.', beneficios: { nutricional: 'Sorbitol puro', digestivo: 'Efecto laxante comprobado' } }, almuerzo: 'Dorada al Papillot con Sopa de Verduras', almuerzo_detalle: { preparacion: 'Dorada en papel 12 min. Servir en consomé casero claro y aromaático.', beneficios: { nutricional: 'Omega 3 + minerales marinos', digestivo: 'Digestion facil' } }, cena: 'Pure de Zanahoria y Tilapia', cena_detalle: { preparacion: 'Zanahoria licuada + tilapia desmechada. Base: caldo casero abundante.', beneficios: { nutricional: 'Vitamina A + proteina', digestivo: 'Reparador nocturno' } }, ingredientes: ['Dorada', 'Tilapia', 'Zanahoria', 'Caldo casero'], nivel_fibra: 'Bajo', tip_digestivo: 'Ciruela al desayuno = barriga feliz garantizado.' },
    5: { day: 'Viernes', desayuno: 'Platano en Leche de Arroz Casera', desayuno_detalle: { preparacion: 'Platano maduro + leche de arroz hecha en casa (arroz cocido licuado).', beneficios: { nutricional: 'Prebiotico + almidones', digestivo: 'Muy digestivo, sin lacteos' } }, almuerzo: 'Pejerrey Fresco con Arroz Blanco en Caldo', almuerzo_detalle: { preparacion: 'Pejerrey deshilachado fino. Arroz bien cocido en caldo vegetal rico.', beneficios: { nutricional: 'Omega 3 suave + carbos', digestivo: 'Digestivo total' } }, cena: 'Consomé de Pescado con Huevo Poche', cena_detalle: { preparacion: 'Consomé casero transparente. Huevo poche flotando suavemente.', beneficios: { nutricional: 'Proteina pura marina', digestivo: 'Cierre perfecto del dia' } }, ingredientes: ['Pejerrey', 'Platano', 'Arroz', 'Huevo'], nivel_fibra: 'Bajo', tip_digestivo: 'Leche de arroz casera > leche de vaca 100 veces mejor.' },
    6: { day: 'Sabado', desayuno: 'Pera Cocida en Pure Suave', desayuno_detalle: { preparacion: 'Pera cocida sin cascara licuada + 100ml caldo vegetal. Como puding liquido.', beneficios: { nutricional: 'Sorbitol + minerales', digestivo: 'Laxante suave doble' } }, almuerzo: 'Bacalao Deshilachado con Fideos y Caldo', almuerzo_detalle: { preparacion: 'Bacalao cocido deshilachado fino. Fideos en caldo casero espeso.', beneficios: { nutricional: 'Proteina marina pura', digestivo: 'Facil digestion' } }, cena: 'Crema de Apio y Merluza', cena_detalle: { preparacion: 'Apio licuado + merluza desmechada. Todo en caldo casero reconfortante.', beneficios: { nutricional: 'Sodio natural + omega 3', digestivo: 'Suave cierre de semana' } }, ingredientes: ['Bacalao', 'Merluza', 'Apio', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Bacalao: el pescado mas antiinflamatorio que existe.' },
    0: { day: 'Domingo', desayuno: 'Frutas Variadas en Caldo de Manzana', desayuno_detalle: { preparacion: 'Papaya + pera cocida en caldo de manzana casero. Jugo dulce y digestivo.', beneficios: { nutricional: 'Enzimas multiples', digestivo: 'Cierre de semana perfecto' } }, almuerzo: 'Sopa de Salmon con Vegetales Amarillos', almuerzo_detalle: { preparacion: 'Salmon en consomé casero. Zanahoria + calabaza licuadas finas.', beneficios: { nutricional: 'Omega 3 + betacarotenos', digestivo: 'Completo y suave' } }, cena: 'Caldo de Pescado Blanco Puro', cena_detalle: { preparacion: 'Consomé de pescado blanco casero. Cebollino fresco. Liquido y aromático.', beneficios: { nutricional: 'Colageno marino', digestivo: 'Recuperacion intestinal' } }, ingredientes: ['Salmon', 'Pescado blanco', 'Calabaza', 'Zanahoria'], nivel_fibra: 'Bajo', tip_digestivo: 'Cierre semana 2: el cuerpo de Enzo se regenera con salmon.' },
  },
  'Semana 3': {
    1: { day: 'Lunes', desayuno: 'Papaya Pura Liquida', desayuno_detalle: { preparacion: 'Papaya procesada con agua destilada 1:1. Jugo fresco digestivo.', beneficios: { nutricional: 'Papaina pura', digestivo: 'Comienza bien el dia' } }, almuerzo: 'Salmon Rosado con Sopa de Zanahoria Cremosa', almuerzo_detalle: { preparacion: 'Salmon deshilachado. Zanahoria licuada en caldo casero abundante.', beneficios: { nutricional: 'Omega 3 + betacarotenos', digestivo: 'Lubricacion + hidratacion' } }, cena: 'Consomé de Branzino con Fideos', cena_detalle: { preparacion: 'Caldo casero de branzino transparente. Fideos muy finos. Muy liquido.', beneficios: { nutricional: 'Colageno marino', digestivo: 'Sana mucosa intestinal' } }, ingredientes: ['Salmon', 'Branzino', 'Zanahoria', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Semana 3: consolidamos pescado diario.' },
    2: { day: 'Martes', desayuno: 'Ciruela Pasa Procesada en Agua Tibia', desayuno_detalle: { preparacion: 'Ciruelas remojadas procesadas con agua de remojo. Desayuno laxante natural.', beneficios: { nutricional: 'Sorbitol activo', digestivo: 'Activa intestinos' } }, almuerzo: 'Merluza al Vapor con Pure de Calabaza Liquido', almuerzo_detalle: { preparacion: 'Merluza cocida deshilachada. Calabaza licuada en caldo casero espeso.', beneficios: { nutricional: 'Proteina + betacarotenos', digestivo: 'Suave pero potente' } }, cena: 'Sopa de Tilapia y Cebada', cena_detalle: { preparacion: 'Tilapia en caldo casero. Cebada cocida suave. Muy hidratante.', beneficios: { nutricional: 'Omega 3 + fibra soluble', digestivo: 'Regula naturalmente' } }, ingredientes: ['Merluza', 'Tilapia', 'Calabaza', 'Cebada'], nivel_fibra: 'Bajo', tip_digestivo: 'Ciruela + pescado = barriga sin problemas.' },
    3: { day: 'Miercoles', desayuno: 'Pera Cocida en Caldo de Manzana', desayuno_detalle: { preparacion: 'Pera cocida licuada en caldo de manzana casero. Como puding laxante.', beneficios: { nutricional: 'Sorbitol + pectina', digestivo: 'Laxante doble suave' } }, almuerzo: 'Atun Fresco con Sopa de Cebada y Zanahoria', almuerzo_detalle: { preparacion: 'Atun deshilachado fino. Sopa base: cebada + zanahoria licuada + caldo.', beneficios: { nutricional: 'Omega 3 marino', digestivo: 'Prebiotico + hidratacion' } }, cena: 'Crema de Coliflor y Salmon', cena_detalle: { preparacion: 'Coliflor licuada + salmon desmechado. Base caldo casero rico.', beneficios: { nutricional: 'Vitaminas + Omega 3', digestivo: 'Ultra suave nocturno' } }, ingredientes: ['Atun', 'Salmon', 'Coliflor', 'Cebada'], nivel_fibra: 'Bajo', tip_digestivo: 'Pera + ciruela cada 2 dias: garantia digestiva.' },
    4: { day: 'Jueves', desayuno: 'Kiwi Licuado en Agua de Coco', desayuno_detalle: { preparacion: 'Kiwi procesado + agua de coco natural. Jugo enzimático supremo.', beneficios: { nutricional: 'Actinidina + electrolitos', digestivo: 'Enzimas digestivas maximas' } }, almuerzo: 'Dorada Entera al Papillot con Consomé Ligero', almuerzo_detalle: { preparacion: 'Dorada pequeña al papillot 12 min. Servir en consomé casero transparente.', beneficios: { nutricional: 'Omega 3 + minerales marinos', digestivo: 'Digestion facil' } }, cena: 'Pure de Zanahoria y Tilapia con Caldo', cena_detalle: { preparacion: 'Zanahoria licuada + tilapia desmechada. Caldo casero abundant.', beneficios: { nutricional: 'Vitamina A + omega 3', digestivo: 'Reparador' } }, ingredientes: ['Dorada', 'Tilapia', 'Zanahoria', 'Agua de coco'], nivel_fibra: 'Bajo', tip_digestivo: 'Kiwi en desayuno = día digestivo perfecto.' },
    5: { day: 'Viernes', desayuno: 'Mango Maduro en Agua Tibia', desayuno_detalle: { preparacion: 'Mango procesado + agua tibia destilada. Fresco y digestivo.', beneficios: { nutricional: 'Vitamina C + enzimas', digestivo: 'Activador metabolico' } }, almuerzo: 'Pejerrey con Sopa de Arroz Integral', almuerzo_detalle: { preparacion: 'Pejerrey deshilachado. Arroz integral cocido en caldo casero espeso.', beneficios: { nutricional: 'Omega 3 + fibra integral', digestivo: 'Prebiotico completo' } }, cena: 'Caldo de Merluza con Huevo Poche y Perejil', cena_detalle: { preparacion: 'Consomé de merluza casero. Huevo poche flotante. Perejil fresco.', beneficios: { nutricional: 'Colageno + proteina', digestivo: 'Cierre perfecto' } }, ingredientes: ['Pejerrey', 'Merluza', 'Arroz integral', 'Huevo'], nivel_fibra: 'Bajo', tip_digestivo: 'Viernes: refuerza la semana con máximo omega 3.' },
    6: { day: 'Sabado', desayuno: 'Platano Maduro en Leche de Arroz Casera', desayuno_detalle: { preparacion: 'Platano maduro + leche de arroz hecha en casa (cocida lenta).', beneficios: { nutricional: 'Prebiotico + sin lacteos', digestivo: 'Suave y delicioso' } }, almuerzo: 'Bacalao Deshilachado con Fideos en Caldo', almuerzo_detalle: { preparacion: 'Bacalao cocido fino. Fideos en caldo casero reconfortante muy abundante.', beneficios: { nutricional: 'Proteina marina pura', digestivo: 'Antiinflamatorio' } }, cena: 'Crema de Apio y Pescado Blanco', cena_detalle: { preparacion: 'Apio licuado + pescado blanco desmechado en caldo casero.', beneficios: { nutricional: 'Sodio natural + omega 3', digestivo: 'Suave cierre' } }, ingredientes: ['Bacalao', 'Pescado blanco', 'Apio', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Bacalao: el antiinflamatorio marino definitivo.' },
    0: { day: 'Domingo', desayuno: 'Frutas en Consomé Dulce', desayuno_detalle: { preparacion: 'Papaya + mango en consomé de frutas casero ligero. Muy liquido.', beneficios: { nutricional: 'Enzimas multiples', digestivo: 'Cierre suave' } }, almuerzo: 'Sopa de Salmon con Verduras Amarillas Cremosas', almuerzo_detalle: { preparacion: 'Salmon en consomé. Zanahoria + calabaza licuadas densamente.', beneficios: { nutricional: 'Omega 3 completo', digestivo: 'Nutritivo y suave' } }, cena: 'Consomé de Pescado Puro Transparente', cena_detalle: { preparacion: 'Caldo de pescado blanco casero 2+ horas. Transparente y aromatico.', beneficios: { nutricional: 'Colageno marino puro', digestivo: 'Regenera intestinos' } }, ingredientes: ['Salmon', 'Pescado blanco', 'Verduras', 'Consomé casero'], nivel_fibra: 'Bajo', tip_digestivo: 'Domingo S3: el intestino de Enzo esta completamente sanado.' },
  },
  'Semana 4': {
    1: { day: 'Lunes', desayuno: 'Papaya con Agua de Coco Natural', desayuno_detalle: { preparacion: 'Papaya procesada + agua de coco natural. Jugo fresco digestivo premium.', beneficios: { nutricional: 'Papaina + electrolitos', digestivo: 'Enzimas + hidratacion' } }, almuerzo: 'Salmon Rosado con Sopa de Cebada Integral', almuerzo_detalle: { preparacion: 'Salmon deshilachado. Sopa: cebada integral + caldo vegetal abundante.', beneficios: { nutricional: 'Omega 3 + fibra soluble', digestivo: 'Prebiotico potente' } }, cena: 'Consomé de Branzino con Noodles', cena_detalle: { preparacion: 'Caldo casero de branzino. Noodles muy blandos. Muy liquido y reconfortante.', beneficios: { nutricional: 'Colageno marino', digestivo: 'Reparador nocturno' } }, ingredientes: ['Salmon', 'Branzino', 'Cebada', 'Noodles'], nivel_fibra: 'Bajo', tip_digestivo: 'Semana 4 final: refuerza todo el progreso con agua de coco.' },
    2: { day: 'Martes', desayuno: 'Ciruela Pasa Licuada en Agua Tibia', desayuno_detalle: { preparacion: 'Ciruelas procesadas con agua tibia incluida. Desayuno laxante puro.', beneficios: { nutricional: 'Sorbitol activo', digestivo: 'Activa movimiento' } }, almuerzo: 'Merluza al Vapor con Crema de Calabaza', almuerzo_detalle: { preparacion: 'Merluza deshilachada. Calabaza licuada densamente en caldo casero.', beneficios: { nutricional: 'Proteina + betacarotenos', digestivo: 'Suave y lubricante' } }, cena: 'Sopa de Tilapia con Fideos Finos', cena_detalle: { preparacion: 'Tilapia en caldo casero espeso. Fideos muy finos. Muy reconfortante.', beneficios: { nutricional: 'Omega 3 + colageno', digestivo: 'Ultra hidratante' } }, ingredientes: ['Merluza', 'Tilapia', 'Calabaza', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Ciruela diaria hasta fin de mes = garantia digestiva.' },
    3: { day: 'Miercoles', desayuno: 'Kiwi Fresco Licuado en Agua Tibia', desayuno_detalle: { preparacion: 'Kiwi procesado + agua tibia destilada. Jugo enzimático fresco.', beneficios: { nutricional: 'Actinidina pura', digestivo: 'Enzimas digestivas maximas' } }, almuerzo: 'Atun con Sopa de Arroz Blanco', almuerzo_detalle: { preparacion: 'Atun deshilachado fino. Arroz blanco en caldo casero abundante.', beneficios: { nutricional: 'Omega 3 + carbos', digestivo: 'Digestivo total' } }, cena: 'Crema de Coliflor y Salmon', cena_detalle: { preparacion: 'Coliflor licuada + salmon desmechado. Caldo casero reconfortante.', beneficios: { nutricional: 'Vitaminas + Omega 3', digestivo: 'Suave nocturno' } }, ingredientes: ['Atun', 'Salmon', 'Coliflor', 'Arroz'], nivel_fibra: 'Bajo', tip_digestivo: 'Kiwi cada mañana mantiene enzimas activas.' },
    4: { day: 'Jueves', desayuno: 'Pera Cocida en Caldo Vegetal', desayuno_detalle: { preparacion: 'Pera cocida licuada en caldo vegetal tibia. Desayuno laxante doble.', beneficios: { nutricional: 'Sorbitol + minerales', digestivo: 'Activa intestinos' } }, almuerzo: 'Dorada al Papillot con Consomé Casero', almuerzo_detalle: { preparacion: 'Dorada 12 min al papillot. Servir en consomé casero transparente.', beneficios: { nutricional: 'Omega 3 completo', digestivo: 'Facil digestion' } }, cena: 'Pure de Zanahoria y Merluza', cena_detalle: { preparacion: 'Zanahoria licuada + merluza desmechada. Caldo casero abundante.', beneficios: { nutricional: 'Vitamina A + proteina marina', digestivo: 'Reparador' } }, ingredientes: ['Dorada', 'Merluza', 'Zanahoria', 'Caldo casero'], nivel_fibra: 'Bajo', tip_digestivo: 'Pera + ciruela + agua = trifecta laxante.' },
    5: { day: 'Viernes', desayuno: 'Mango Maduro en Leche de Arroz Casera', desayuno_detalle: { preparacion: 'Mango fresco + leche de arroz hecha en casa. Suave y nutritivo.', beneficios: { nutricional: 'Enzimas + almidones', digestivo: 'Sin lacteos + delicioso' } }, almuerzo: 'Pejerrey con Sopa de Cebada y Zanahoria', almuerzo_detalle: { preparacion: 'Pejerrey deshilachado. Cebada + zanahoria licuada en caldo abundante.', beneficios: { nutricional: 'Omega 3 + fibra soluble', digestivo: 'Prebiotico completo' } }, cena: 'Caldo de Pescado Blanco con Huevo Poche', cena_detalle: { preparacion: 'Consomé casero de pescado. Huevo poche flotante. Perejil fresco.', beneficios: { nutricional: 'Colageno + proteina', digestivo: 'Cierre perfecto' } }, ingredientes: ['Pejerrey', 'Pescado blanco', 'Cebada', 'Huevo'], nivel_fibra: 'Bajo', tip_digestivo: 'Viernes: refuerza semana con omega 3 puro.' },
    6: { day: 'Sabado', desayuno: 'Platano Maduro Procesado en Agua Tibia', desayuno_detalle: { preparacion: 'Platano maduro + agua tibia destilada. Bebida prebiotica reconfortante.', beneficios: { nutricional: 'Potasio + prebioticos', digestivo: 'Suave pero efectivo' } }, almuerzo: 'Bacalao Deshilachado con Sopa de Fideos', almuerzo_detalle: { preparacion: 'Bacalao cocido fino. Fideos en caldo casero espeso y aromatico.', beneficios: { nutricional: 'Proteina marina pura', digestivo: 'Antiinflamatorio' } }, cena: 'Crema de Apio y Tilapia', cena_detalle: { preparacion: 'Apio licuado + tilapia desmechada en caldo casero abundante.', beneficios: { nutricional: 'Sodio natural + omega 3', digestivo: 'Suave cierre' } }, ingredientes: ['Bacalao', 'Tilapia', 'Apio', 'Fideos'], nivel_fibra: 'Bajo', tip_digestivo: 'Bacalao: el marino antiinflamatorio definitivo.' },
    0: { day: 'Domingo', desayuno: 'Frutas Variadas en Agua de Coco', desayuno_detalle: { preparacion: 'Papaya + pera + mango en agua de coco natural. Jugo frutal premium.', beneficios: { nutricional: 'Enzimas multiples', digestivo: 'Cierre perfecto de mes' } }, almuerzo: 'Sopa de Salmon con Verduras Cremosas', almuerzo_detalle: { preparacion: 'Salmon en consomé. Zanahoria + calabaza licuadas densamente.', beneficios: { nutricional: 'Omega 3 + betacarotenos', digestivo: 'Completo y reparador' } }, cena: 'Consomé de Pescado Puro Supremo', cena_detalle: { preparacion: 'Caldo de pescado blanco casero 3+ horas lento. Transparente, aromático.', beneficios: { nutricional: 'Colageno marino puro', digestivo: 'Regenera 100% intestinos' } }, ingredientes: ['Salmon', 'Pescado blanco', 'Verduras', 'Consomé'], nivel_fibra: 'Bajo', tip_digestivo: 'Domingo S4: Enzo completa ciclo 4 semanas totalmente sano.' },
  }
};
