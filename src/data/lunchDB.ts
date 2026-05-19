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
      desayuno: 'Papaya madura con Chia hidratada',
      desayuno_detalle: {
        preparacion: 'Hidratar 1 cdta de chia en 4 cdas de agua por 15 min. Mezclar con papaya en cubos.',
        beneficios: { nutricional: 'Vitamina A/C + Omega 3', digestivo: 'Papaina + hidratacion' }
      },
      almuerzo: 'Salmon al Vapor con Caldo de Vegetales',
      almuerzo_detalle: {
        preparacion: 'Salmon fresco cortado fino al vapor 10 min. Servir en caldo casero de zanahoria y apio.',
        beneficios: { nutricional: 'Omega 3 + DHA cerebral', digestivo: 'Lubrica intestinos + hidratacion' }
      },
      cena: 'Sopa Cremosa de Coliflor con Pescado Blanco',
      cena_detalle: {
        preparacion: 'Coliflor hervida licuada con tilapia desmenuzada y caldo. Textura sedosa.',
        beneficios: { nutricional: 'Proteina + Vitamina C', digestivo: '98% liquido, ultra suave' }
      },
      ingredientes: ['Salmon', 'Tilapia', 'Coliflor', 'Caldo casero'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Pescado diario + liquidos = barriga feliz.'
    },
    2: {
      day: 'Martes',
      desayuno: 'Pera madura rallada en Caldo de Verduras',
      desayuno_detalle: {
        preparacion: 'Calentar caldo casero. Agregar pera rallada fina sin cascara. Muy liquido.',
        beneficios: { nutricional: 'Sorbitol laxante + minerales', digestivo: 'Activa intestinos suavemente' }
      },
      almuerzo: 'Tilapia al Papillot con Pure de Calabaza y Caldo',
      almuerzo_detalle: {
        preparacion: 'Tilapia en papel aluminio 12 min. Servir con calabaza licuada en caldo de pollo.',
        beneficios: { nutricional: 'Omega 3 completo + betacarotenos', digestivo: 'Lubricante triple' }
      },
      cena: 'Sopa de Pescado Desmenuzado con Fideos Finos',
      cena_detalle: {
        preparacion: 'Caldo de pescado casero con merluza cocida y desmenuzada + fideos muy finos.',
        beneficios: { nutricional: 'Colageno marino + proteina', digestivo: 'Hidratacion maxima' }
      },
      ingredientes: ['Tilapia', 'Merluza', 'Calabaza', 'Caldo casero'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Caldo casero cada comida = sistema digestivo feliz.'
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
      desayuno: 'Platano Maduro en Caldo de Manzana',
      desayuno_detalle: {
        preparacion: 'Cocer platano maduro en caldo de manzana casero. Muy liquido y suave.',
        beneficios: { nutricional: 'Potasio + pectina', digestivo: 'Prebiotico + hidratacion' }
      },
      almuerzo: 'Atun Fresco Deshilachado con Sopa de Cebada',
      almuerzo_detalle: {
        preparacion: 'Atun a la plancha desmenuzado fino. Base: sopa de cebada + caldo vegetal.',
        beneficios: { nutricional: 'Omega 3 completo', digestivo: 'Fibra suave + liquidos abundantes' }
      },
      cena: 'Crema de Coliflor y Pescado Blanco Suave',
      cena_detalle: {
        preparacion: 'Coliflor licuada con tilapia desmechada fina. Todo en caldo casero.',
        beneficios: { nutricional: 'Proteina + vitaminas', digestivo: 'Ultra suave para la noche' }
      },
      ingredientes: ['Atun', 'Tilapia', 'Coliflor', 'Cebada'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Platano maduro: el mejor prebiotico natural.'
    },
    6: {
      day: 'Sabado',
      desayuno: 'Papaya licuada con Caldo casero',
      desayuno_detalle: {
        preparacion: 'Papaya procesada + caldo vegetal. Beber como jugo fresco y digestivo.',
        beneficios: { nutricional: 'Papaina + minerales', digestivo: 'Enzimas + hidratacion maxima' }
      },
      almuerzo: 'Salmon Silvestre con Arroz en Caldo de Verduras',
      almuerzo_detalle: {
        preparacion: 'Salmon cocido desmenuzado. Arroz tierno cocido en caldo de zanahoria y apio.',
        beneficios: { nutricional: 'Omega 3 + almidones', digestivo: 'Todo muy humedo y suave' }
      },
      cena: 'Consomé de Pescado Casero con Fideos Finos',
      cena_detalle: {
        preparacion: 'Consomé transparent de pescado con fideos muy finos y cebollino picado.',
        beneficios: { nutricional: 'Colageno puro', digestivo: 'Reconfortante extremo' }
      },
      ingredientes: ['Salmon', 'Arroz', 'Consomé casero', 'Fideos'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Sabado: mas liquidos, menos solidos. Descansa el sistema.'
    },
    0: {
      day: 'Domingo',
      desayuno: 'Pera en Pure de Caldo de Pollo',
      desayuno_detalle: {
        preparacion: 'Pera cocida licuada en caldo de pollo casero. Muy liquido y enriquecido.',
        beneficios: { nutricional: 'Sorbitol + amino acidos', digestivo: 'Laxante suave + reparador' }
      },
      almuerzo: 'Sopa Completa de Pescado Blanco con Noodles',
      almuerzo_detalle: {
        preparacion: 'Consomé de pescado. Pescado cocido desmenuzado + noodles muy blandos.',
        beneficios: { nutricional: 'Colageno marino', digestivo: 'Cierre de semana suave' }
      },
      cena: 'Crema de Calabaza y Merluza',
      cena_detalle: {
        preparacion: 'Calabaza al horno licuada con merluza desmechada. Base: caldo casero.',
        beneficios: { nutricional: 'Betacarotenos + Omega 3', digestivo: 'Muy digestivo y nutritivo' }
      },
      ingredientes: ['Merluza', 'Calabaza', 'Noodles', 'Caldo casero'],
      nivel_fibra: 'Bajo',
      tip_digestivo: 'Cierre de semana: pescado todos los dias resulta en un sistema digestivo sano.'
    },
  },
  'Semana 2': {
    1: { day: 'Lunes', desayuno: 'Papaya con Agua destilada', desayuno_detalle: { preparacion: 'Papaya fresca en cubos + 100ml agua tibia destilada. Muy hidratante.', beneficios: { nutricional: 'Papaina pura', digestivo: 'Enzimas + hidratacion' } }, almuerzo: 'Salmon Rosado con Sopa de Cebada', almuerzo_detalle: { preparacion: 'Salmon cocido desmenuzado. Sopa base: cebada + caldo vegetal + zanahoria fina.', beneficios: { nutricional: 'Omega 3 + fibra soluble', digestivo: 'Lubrica + regula' } }, cena: 'Caldo Cremoso de Tilapia y Coliflor', cena_detalle: { preparacion: 'Tilapia en caldo casero. Coliflor licuada. Textura suave y reconfortante.', beneficios: { nutricional: 'Proteina + vitaminas', digestivo: 'Ultra suave' } }, ingredientes: ['Salmon', 'Tilapia', 'Coliflor', 'Cebada'], nivel_fibra: 'Bajo', tip_digestivo: 'Semana 2: intensificamos pescado al 80% de las comidas.' },
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
