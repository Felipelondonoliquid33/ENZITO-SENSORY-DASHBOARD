import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Leaf, X, Heart, ShoppingCart, Plus, Trash2, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface RecipeDetails {
  preparacion: string;
  beneficios: {
    nutricional: string;
    digestivo: string;
  };
}

interface MealPlan {
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

interface WeekMenu {
  [key: number]: MealPlan;
}

const LUNCH_RECIPES_DB: Record<string, WeekMenu> = {
  'Semana 1': {
    1: {
      day: 'Lunes',
      desayuno: 'Papaya madura con Chia hidratada',
      desayuno_detalle: {
        preparacion: 'Hidratar 1 cdta de chia en 3 de agua por 15 min. Mezclar con papaya en cubos.',
        beneficios: { nutricional: 'Vitamina A/C', digestivo: 'Papaina enzimatica' }
      },
      almuerzo: 'Carne de Cadera a la Plancha con Pure de Auyama',
      almuerzo_detalle: {
        preparacion: 'Sellar cadera de res picada finamente. Acompañar con auyama licuada con aceite de oliva.',
        beneficios: { nutricional: 'Proteina + Hierro/Zinc', digestivo: 'Fibra soluble de auyama' }
      },
      cena: 'Crema suave de Calabacin con Pollo desmechado',
      cena_detalle: {
        preparacion: 'Hervir calabacin sin piel. Licuar con sal, oliva y pollo desmechado.',
        beneficios: { nutricional: 'Magnesio + Proteina', digestivo: '95% agua, ultra digestivo' }
      },
      ingredientes: ['Res (Cadera)', 'Auyama', 'Pollo', 'Aceite de oliva'],
      nivel_fibra: 'Alto',
      tip_digestivo: 'La carne de cadera es magra y rica en hierro.'
    },
    2: {
      day: 'Martes',
      desayuno: 'Avena con Huevo Cocido y Pera',
      desayuno_detalle: {
        preparacion: 'Cocinar avena en agua. Acompañar con 1 huevo cocido picado y pera rallada.',
        beneficios: { nutricional: 'Super Proteina + Fibra', digestivo: 'Barre el colon' }
      },
      almuerzo: 'Filete de Pescado Blanco al Vapor con Brocoli',
      almuerzo_detalle: {
        preparacion: 'Cocer pescado blanco y brocoli al vapor con limon. Triturar con aguacate.',
        beneficios: { nutricional: 'Omega 3 de alta calidad', digestivo: 'Lubricacion natural' }
      },
      cena: 'Compota de Manzana con Caldo de Pollo',
      cena_detalle: {
        preparacion: 'Hervir manzana sin cascara. Triturar con caldo de pollo natural.',
        beneficios: { nutricional: 'Pectina + Aminoacidos', digestivo: 'Regulador intestinal' }
      },
      ingredientes: ['Pescado Blanco', 'Huevo', 'Brocoli', 'Aguacate'],
      nivel_fibra: 'Alto',
      tip_digestivo: 'El pescado es la proteina mas facil de digerir.'
    },
    3: {
      day: 'Miercoles',
      desayuno: 'Granadilla con Yogurt Griego',
      desayuno_detalle: {
        preparacion: 'Mezclar granadilla pura con yogurt griego natural.',
        beneficios: { nutricional: 'Calcio + Probioticos', digestivo: 'Movimiento mecanico intestinal' }
      },
      almuerzo: 'Estofado de Carne de Cadera con Zanahoria',
      almuerzo_detalle: {
        preparacion: 'Guisar carne de cadera muy tierna con zanahoria y un toque de coco.',
        beneficios: { nutricional: 'B12 + Carotenos', digestivo: 'Textura ligera, facil paso' }
      },
      cena: 'Pure de Batata con Queso Fresco',
      cena_detalle: {
        preparacion: 'Cocer batata. Aplastar con tenedor, aceite de coco y queso fresco.',
        beneficios: { nutricional: 'Betacarotenos + Caseina', digestivo: 'Suave al tacto' }
      },
      ingredientes: ['Res (Cadera)', 'Yogurt Griego', 'Batata', 'Queso fresco'],
      nivel_fibra: 'Medio',
      tip_digestivo: 'El yogurt griego tiene el doble de proteina que el normal.'
    },
    4: {
      day: 'Jueves',
      desayuno: 'Pitahaya con Jamon de Pavo',
      desayuno_detalle: {
        preparacion: 'Servir pitahaya picada con tiras finas de jamon de pavo artesanal.',
        beneficios: { nutricional: 'Proteina magra + vitaminas', digestivo: 'Laxante natural potente' }
      },
      almuerzo: 'Arroz con Pollo y Garbanzos Licuados',
      almuerzo_detalle: {
        preparacion: 'Arroz con pollo desmechado y crema de garbanzos remojados 24h.',
        beneficios: { nutricional: 'Doble Proteina completa', digestivo: 'Estimula peristaltismo' }
      },
      cena: 'Sopita de pasta con Pollo procesado',
      cena_detalle: {
        preparacion: 'Pasta en caldo de pollo con hebras muy finas de pollo y oliva.',
        beneficios: { nutricional: 'Confort + Proteina', digestivo: 'Facil paso intestinal' }
      },
      ingredientes: ['Pollo', 'Garbanzo', 'Pavo', 'Oliva'],
      nivel_fibra: 'Alto',
      tip_digestivo: 'Los garbanzos deben estar muy bien procesados.'
    },
    5: {
      day: 'Viernes',
      desayuno: 'Tortilla de Huevo con Kiwi',
      desayuno_detalle: {
        preparacion: 'Hacer tortilla con clara y una yema. Acompañar con kiwi fresco.',
        beneficios: { nutricional: 'Albumina + Vitamina C', digestivo: 'Actinidina del kiwi' }
      },
      almuerzo: 'Quinoa Real con Salmon Desmenuzado',
      almuerzo_detalle: {
        preparacion: 'Salmon a la plancha picadito sobre quinoa con pure de calabaza.',
        beneficios: { nutricional: 'Omega 3 + Aminoacidos completos', digestivo: 'Fibra prebiotica' }
      },
      cena: 'Pure de Zanahoria con Res Molida',
      cena_detalle: {
        preparacion: 'Cocer zanahoria con carne molida magra. Procesar hasta consistencia suave.',
        beneficios: { nutricional: 'Hierro + Vitamina A', digestivo: 'Antiinflamatorio natural' }
      },
      ingredientes: ['Salmon', 'Quinoa', 'Res (Magra)', 'Huevo'],
      nivel_fibra: 'Medio',
      tip_digestivo: 'La quinoa es una proteina vegetal completa.'
    },
    6: {
      day: 'Sabado',
      desayuno: 'Panqueque de Avena y Pollo',
      desayuno_detalle: {
        preparacion: 'Mezclar avena, pure de papa y pollo desmechado. Asar con oliva.',
        beneficios: { nutricional: 'Carbo Complejos + Proteina', digestivo: 'Mucilago protector' }
      },
      almuerzo: 'Cadera Salteada con Habichuelas',
      almuerzo_detalle: {
        preparacion: 'Carne de cadera en trozos muy pequeños con habichuelas al vapor.',
        beneficios: { nutricional: 'Fuerza + Hierro', digestivo: 'Fibra larga habichuelas' }
      },
      cena: 'Caldo de Vegetales con Huevo Poche',
      cena_detalle: {
        preparacion: 'Hervir apio y zanahoria. Colar. Agregar 1 huevo poche al caldo caliente.',
        beneficios: { nutricional: 'Proteina pura', digestivo: 'Descanso total digestivo' }
      },
      ingredientes: ['Res (Cadera)', 'Huevo', 'Habichuelas', 'Avena'],
      nivel_fibra: 'Medio',
      tip_digestivo: 'El huevo poche es muy facil de absorber.'
    },
    0: {
      day: 'Domingo',
      desayuno: 'Ciruelas pasas con Yogurt de Coco',
      desayuno_detalle: {
        preparacion: 'Ciruelas hidratadas mezcladas con yogurt de coco y semillas de chia.',
        beneficios: { nutricional: 'Grasas saludables', digestivo: 'Efecto Sorbitol laxante' }
      },
      almuerzo: 'Sopa de Pescado con Vegetales Amarillos',
      almuerzo_detalle: {
        preparacion: 'Pescado blanco cocido en caldo de auyama, zanahoria y papa criolla.',
        beneficios: { nutricional: 'Fosforo + Carotenos', digestivo: 'Absorcion rapida' }
      },
      cena: 'Pure de Auyama con Queso y Pollo',
      cena_detalle: {
        preparacion: 'Auyama horneada y aplastada con queso fresco y pollo licuado.',
        beneficios: { nutricional: 'Zinc + Proteina', digestivo: 'Cero irritacion' }
      },
      ingredientes: ['Pescado Blanco', 'Auyama', 'Pollo', 'Queso fresco'],
      nivel_fibra: 'Medio',
      tip_digestivo: 'Cierre de semana suave pero nutritivo.'
    },
  },
  'Semana 2': {
    1: { day: 'Lunes', desayuno: 'Tortilla de Huevo', desayuno_detalle: { preparacion: 'Huevo batido suave en sarten sin aceite.', beneficios: { nutricional: 'Proteina completa', digestivo: 'Muy facil de digerir' } }, almuerzo: 'Pescado Blanco al Vapor', almuerzo_detalle: { preparacion: 'Pescado tilapia al vapor 12 min con limon.', beneficios: { nutricional: 'Omega 3 + Fosforo', digestivo: 'Ligero y suave' } }, cena: 'Compota de Manzana', cena_detalle: { preparacion: 'Manzana sin cascara hervida y procesada.', beneficios: { nutricional: 'Fibra soluble pectina', digestivo: 'Suave y reconfortante' } }, ingredientes: ['Tilapia', 'Huevo', 'Manzana'], nivel_fibra: 'Medio', tip_digestivo: 'Semana 2: digestiva y suave.' },
    2: { day: 'Martes', desayuno: 'Avena con Banano', desayuno_detalle: { preparacion: 'Avena cocida con banano maduro aplastado.', beneficios: { nutricional: 'Fibra + Potasio', digestivo: 'Prebiotico natural' } }, almuerzo: 'Pollo Desmechado con Pure de Papa', almuerzo_detalle: { preparacion: 'Pollo hervido desmechado con papa aplastada y oliva.', beneficios: { nutricional: 'Proteina completa', digestivo: 'Muy digestivo' } }, cena: 'Sopa de Zanahoria', cena_detalle: { preparacion: 'Zanahoria hervida licuada con caldo de pollo.', beneficios: { nutricional: 'Betacaroteno + Vitamina A', digestivo: 'Antiinflamatorio' } }, ingredientes: ['Pollo', 'Papa', 'Zanahoria', 'Banano'], nivel_fibra: 'Medio', tip_digestivo: 'Papa y pollo: combo digestivo clasico.' },
    3: { day: 'Miercoles', desayuno: 'Pera madura rallada con Yogurt', desayuno_detalle: { preparacion: 'Pera sin cascara rallada sobre yogurt natural.', beneficios: { nutricional: 'Probioticos + Sorbitol', digestivo: 'Movimiento intestinal' } }, almuerzo: 'Salmon con Batata', almuerzo_detalle: { preparacion: 'Salmon a la plancha desmenuzado con batata al vapor.', beneficios: { nutricional: 'Omega 3 + Betacarotenos', digestivo: 'Lubrica intestinos' } }, cena: 'Caldo de Verduras con Fideos', cena_detalle: { preparacion: 'Caldo de apio y zanahoria con fideos finos.', beneficios: { nutricional: 'Minerales esenciales', digestivo: 'Suave y reconfortante' } }, ingredientes: ['Salmon', 'Batata', 'Yogurt', 'Fideos'], nivel_fibra: 'Medio', tip_digestivo: 'El salmon dos veces por semana es ideal.' },
    4: { day: 'Jueves', desayuno: 'Huevo Poche con Aguacate', desayuno_detalle: { preparacion: 'Huevo poche sobre aguacate pisado con limon.', beneficios: { nutricional: 'Proteina + Grasas buenas', digestivo: 'Lubricante natural' } }, almuerzo: 'Res Molida con Arroz Suave', almuerzo_detalle: { preparacion: 'Carne molida magra con arroz bien cocido y zanahoria.', beneficios: { nutricional: 'Hierro + Zinc', digestivo: 'Facil paso' } }, cena: 'Pure de Arracacha', cena_detalle: { preparacion: 'Arracacha hervida y aplastada con caldo de pollo.', beneficios: { nutricional: 'Carbohidratos complejos', digestivo: 'Sin irritacion' } }, ingredientes: ['Res (Molida)', 'Aguacate', 'Arroz', 'Arracacha'], nivel_fibra: 'Bajo', tip_digestivo: 'La arracacha es muy suave para el sistema digestivo.' },
    5: { day: 'Viernes', desayuno: 'Papaya con Semillas de Girasol', desayuno_detalle: { preparacion: 'Papaya en cubos con semillas de girasol tostadas.', beneficios: { nutricional: 'Vitamina E + Papaina', digestivo: 'Enzimas digestivas' } }, almuerzo: 'Cadera de Res con Habichuelas', almuerzo_detalle: { preparacion: 'Res cadera muy tierna con habichuelas al vapor.', beneficios: { nutricional: 'Proteina completa + Hierro', digestivo: 'Fibra suave habichuelas' } }, cena: 'Yogurt con Compota de Ciruela', cena_detalle: { preparacion: 'Yogurt griego con ciruelas cocidas y canela.', beneficios: { nutricional: 'Probioticos + Calcio', digestivo: 'Sorbitol laxante suave' } }, ingredientes: ['Res (Cadera)', 'Habichuelas', 'Yogurt Griego', 'Ciruela'], nivel_fibra: 'Alto', tip_digestivo: 'Ciruelas 2x por semana para regularidad.' },
    6: { day: 'Sabado', desayuno: 'Tostada con Huevo Revuelto', desayuno_detalle: { preparacion: 'Pan integral tostado con huevo revuelto suave.', beneficios: { nutricional: 'Proteina + Fibra integral', digestivo: 'Inicio de dia energizante' } }, almuerzo: 'Quinoa con Pollo y Vegetales', almuerzo_detalle: { preparacion: 'Quinoa cocida con pollo desmechado y zanahoria suave.', beneficios: { nutricional: 'Proteina vegetal completa', digestivo: 'Prebiotico natural' } }, cena: 'Sopa Crema de Auyama', cena_detalle: { preparacion: 'Auyama licuada con caldo de pollo y un toque de nuez.', beneficios: { nutricional: 'Betacarotenos + Vitamina C', digestivo: 'Antiinflamatorio suave' } }, ingredientes: ['Pollo', 'Quinoa', 'Auyama', 'Huevo'], nivel_fibra: 'Medio', tip_digestivo: 'Quinoa + pollo: proteina que construye musculo.' },
    0: { day: 'Domingo', desayuno: 'Frutas Variadas con Chia', desayuno_detalle: { preparacion: 'Mango, papaya y pera con chia hidratada.', beneficios: { nutricional: 'Multinutrientes', digestivo: 'Enzimas y fibra' } }, almuerzo: 'Pescado con Pure de Yuca', almuerzo_detalle: { preparacion: 'Pescado blanco cocido con yuca suave aplastada.', beneficios: { nutricional: 'Proteina + Almidones', digestivo: 'Muy tolerado' } }, cena: 'Leche de Coco con Fideos', cena_detalle: { preparacion: 'Sopa de fideos con leche de coco y un toque de apio.', beneficios: { nutricional: 'Trigliceridos medianos', digestivo: 'Antiinflamatorio intestinal' } }, ingredientes: ['Pescado Blanco', 'Yuca', 'Leche de coco', 'Chia'], nivel_fibra: 'Bajo', tip_digestivo: 'Domingo: recuperacion y suavidad total.' },
  },
  'Semana 3': {
    1: { day: 'Lunes', desayuno: 'Mango maduro con Yogurt', desayuno_detalle: { preparacion: 'Mango en trozos sobre yogurt griego con canela.', beneficios: { nutricional: 'Vitamina C + Probioticos', digestivo: 'Enzimas de mango' } }, almuerzo: 'Cadera de Res con Pure de Papa', almuerzo_detalle: { preparacion: 'Cadera de res muy pequena con papa aplastada y caldo.', beneficios: { nutricional: 'Proteina + Hierro', digestivo: 'Almidones suaves' } }, cena: 'Crema de Zanahoria con Coco', cena_detalle: { preparacion: 'Zanahoria licuada con leche de coco y jengibre suave.', beneficios: { nutricional: 'Betacarotenos + TCM', digestivo: 'Antiinflamatorio' } }, ingredientes: ['Res (Cadera)', 'Papa', 'Zanahoria', 'Mango'], nivel_fibra: 'Medio', tip_digestivo: 'Semana 3: consolidando buenos habitos.' },
    2: { day: 'Martes', desayuno: 'Huevo al Plato con Pera', desayuno_detalle: { preparacion: 'Huevo frito suave en oliva con pera rallada al lado.', beneficios: { nutricional: 'Proteina + Sorbitol', digestivo: 'Estomago activo' } }, almuerzo: 'Salmon con Espinaca Suave', almuerzo_detalle: { preparacion: 'Salmon al papillot con espinaca bebe al vapor.', beneficios: { nutricional: 'Omega 3 + Hierro vegetal', digestivo: 'Lubrica y nutre' } }, cena: 'Sopa de Lentejas Rojas', cena_detalle: { preparacion: 'Lentejas rojas sin piel hervidas con zanahoria y oliva.', beneficios: { nutricional: 'Proteina vegetal + Folatos', digestivo: 'Fibra sin irritacion' } }, ingredientes: ['Salmon', 'Espinaca', 'Lenteja Roja', 'Huevo'], nivel_fibra: 'Alto', tip_digestivo: 'Espinaca tierna: hierro + suavidad.' },
    3: { day: 'Miercoles', desayuno: 'Platano maduro con Queso Fresco', desayuno_detalle: { preparacion: 'Platano maduro asado con queso fresco derretido.', beneficios: { nutricional: 'Potasio + Calcio', digestivo: 'Textura mucilaginosa' } }, almuerzo: 'Pollo al Coco con Arroz', almuerzo_detalle: { preparacion: 'Pollo guisado en leche de coco con arroz bien cocido.', beneficios: { nutricional: 'Proteina completa + TCM', digestivo: 'Antiinflamatorio' } }, cena: 'Pure de Guisantes Verdes', cena_detalle: { preparacion: 'Guisantes procesados con caldo de verdura y oliva.', beneficios: { nutricional: 'Proteina vegetal + Fibra', digestivo: 'Suave peristaltismo' } }, ingredientes: ['Pollo', 'Arroz', 'Platano', 'Guisantes'], nivel_fibra: 'Medio', tip_digestivo: 'El platano maduro es un prebiotico natural.' },
    4: { day: 'Jueves', desayuno: 'Avena con Frutas', desayuno_detalle: { preparacion: 'Avena con mango y chia. Sin azucar.', beneficios: { nutricional: 'Fibra beta-glucano', digestivo: 'Barrido intestinal' } }, almuerzo: 'Res Cadera con Brocoli', almuerzo_detalle: { preparacion: 'Cadera tierna salteada con brocoli suave al vapor.', beneficios: { nutricional: 'Hierro + Vitamina C', digestivo: 'Sulforafano antiinflamatorio' } }, cena: 'Sopa de Pollo con Fideos', cena_detalle: { preparacion: 'Caldo de pollo con fideos finos y zanahoria triturada.', beneficios: { nutricional: 'Colageno + Proteina', digestivo: 'Reconstituyente intestinal' } }, ingredientes: ['Res (Cadera)', 'Brocoli', 'Pollo', 'Fideos'], nivel_fibra: 'Alto', tip_digestivo: 'Brocoli al vapor: vitamina C para absorber el hierro.' },
    5: { day: 'Viernes', desayuno: 'Kiwi con Semillas de Chia', desayuno_detalle: { preparacion: 'Kiwi en mitades con chia hidratada encima.', beneficios: { nutricional: 'Vitamina C + Omega 3', digestivo: 'Actinidina digestiva' } }, almuerzo: 'Tilapia con Pure de Yuca', almuerzo_detalle: { preparacion: 'Tilapia al vapor con yuca bien cocida aplastada.', beneficios: { nutricional: 'Proteina + Almidones', digestivo: 'Muy tolerado' } }, cena: 'Yogurt con Compota', cena_detalle: { preparacion: 'Yogurt griego con compota de manzana y canela.', beneficios: { nutricional: 'Probioticos + Pectina', digestivo: 'Regula microbiota' } }, ingredientes: ['Tilapia', 'Yuca', 'Yogurt Griego', 'Kiwi'], nivel_fibra: 'Medio', tip_digestivo: 'Kiwi antes del desayuno: activa enzimas digestivas.' },
    6: { day: 'Sabado', desayuno: 'Pera con Almendras', desayuno_detalle: { preparacion: 'Pera sin cascara con 5 almendras remojadas tritutadas.', beneficios: { nutricional: 'Vitamina E + Sorbitol', digestivo: 'Lubricante y laxante' } }, almuerzo: 'Salmon con Quinoa y Espinaca', almuerzo_detalle: { preparacion: 'Salmon sobre quinoa con espinaca al vapor y limon.', beneficios: { nutricional: 'Proteina completa + Folatos', digestivo: 'Fibra prebiotica' } }, cena: 'Crema de Brócoli simple', cena_detalle: { preparacion: 'Brocoli licuado con caldo de pollo y aceite de oliva.', beneficios: { nutricional: 'Sulforafano + Vitamina K', digestivo: 'Antiinflamatorio potente' } }, ingredientes: ['Salmon', 'Quinoa', 'Espinaca', 'Brocoli'], nivel_fibra: 'Alto', tip_digestivo: 'Fin de semana: maximo Omega 3 con salmon.' },
    0: { day: 'Domingo', desayuno: 'Frutas con Granola Suave', desayuno_detalle: { preparacion: 'Papaya y mango con granola sin gluten.', beneficios: { nutricional: 'Enzimas + Fibra', digestivo: 'Activa el sistema' } }, almuerzo: 'Pollo al Horno con Batata', almuerzo_detalle: { preparacion: 'Pollo al horno jugoso con batata asada.', beneficios: { nutricional: 'Proteina + Betacarotenos', digestivo: 'Suave y nutritivo' } }, cena: 'Sopa Pasada de Vegetales', cena_detalle: { preparacion: 'Mix de vegetales licuados con caldo y coco.', beneficios: { nutricional: 'Multinutrientes', digestivo: 'Ultra suave' } }, ingredientes: ['Pollo', 'Batata', 'Papaya', 'Mango'], nivel_fibra: 'Medio', tip_digestivo: 'Domingo sem 3: cuerpo recargado para la semana.' },
  },
  'Semana 4': {
    1: { day: 'Lunes', desayuno: 'Huevo Revuelto con Aguacate', desayuno_detalle: { preparacion: 'Huevo revuelto con aguacate pisado y tomate suave.', beneficios: { nutricional: 'Proteina + Grasas mono', digestivo: 'Lubricante natural' } }, almuerzo: 'Cadera de Res con Lentejas', almuerzo_detalle: { preparacion: 'Cadera tierna con crema de lentejas rojas sin piel.', beneficios: { nutricional: 'Doble Proteina + Hierro', digestivo: 'Fibra sin irritacion' } }, cena: 'Pure de Calabaza con Coco', cena_detalle: { preparacion: 'Calabaza al horno licuada con leche de coco.', beneficios: { nutricional: 'Betacarotenos + TCM', digestivo: 'Antiinflamatorio' } }, ingredientes: ['Res (Cadera)', 'Lenteja Roja', 'Aguacate', 'Calabaza'], nivel_fibra: 'Alto', tip_digestivo: 'Semana 4: alta proteina y fibra balanceada.' },
    2: { day: 'Martes', desayuno: 'Batido de Salmon y Mango', desayuno_detalle: { preparacion: 'Batido de mango con proteina de salmon y chia.', beneficios: { nutricional: 'Omega 3 creativo', digestivo: 'Enzimas + fibra' } }, almuerzo: 'Quinoa con Pollo y Zanahoria', almuerzo_detalle: { preparacion: 'Quinoa con pollo desmechado fino y zanahoria cocida.', beneficios: { nutricional: 'Proteina completa x2', digestivo: 'Prebiotico de quinoa' } }, cena: 'Arroz con Leche y Canela', cena_detalle: { preparacion: 'Arroz cocido en leche con canela y un toque de vainilla.', beneficios: { nutricional: 'Calcio + Carbohidratos', digestivo: 'Reconfortante y calmante' } }, ingredientes: ['Salmon', 'Pollo', 'Quinoa', 'Arroz'], nivel_fibra: 'Medio', tip_digestivo: 'El arroz con leche: clasico suave para la noche.' },
    3: { day: 'Miercoles', desayuno: 'Papaya con Semillas', desayuno_detalle: { preparacion: 'Papaya grande con semillas de calabaza y chia hidratada.', beneficios: { nutricional: 'Zinc + Papaina + Omega 3', digestivo: 'Enzimas triple accion' } }, almuerzo: 'Pescado al Rojo Suave con Brocoli', almuerzo_detalle: { preparacion: 'Tilapia con pimiento rojo suave y brocoli al vapor.', beneficios: { nutricional: 'Proteina + Vitamina C', digestivo: 'Antiinflamatorio completo' } }, cena: 'Caldo de Hueso con Fideos', cena_detalle: { preparacion: 'Caldo de hueso lento con fideos finos y perejil.', beneficios: { nutricional: 'Colageno + Glicina', digestivo: 'Sana la mucosa intestinal' } }, ingredientes: ['Tilapia', 'Brocoli', 'Caldo de hueso', 'Huevo'], nivel_fibra: 'Medio', tip_digestivo: 'Caldo de hueso: el mejor amigo del intestino.' },
    4: { day: 'Jueves', desayuno: 'Yogurt con Pitahaya y Semillas', desayuno_detalle: { preparacion: 'Yogurt griego con pitahaya y semillas de lino molidas.', beneficios: { nutricional: 'Probioticos + Omega 3', digestivo: 'Laxante suave triple' } }, almuerzo: 'Cadera con Pure de Boniato', almuerzo_detalle: { preparacion: 'Carne de cadera tierna con boniato aplastado y oliva.', beneficios: { nutricional: 'Proteina + Betacarotenos', digestivo: 'Almidones suaves' } }, cena: 'Sopa de Pollo con Cilantro', cena_detalle: { preparacion: 'Caldo de pollo con cilantro fresco y papa suave.', beneficios: { nutricional: 'Colageno + Minerales', digestivo: 'Cilantro: detox suave' } }, ingredientes: ['Res (Cadera)', 'Pollo', 'Boniato', 'Yogurt Griego'], nivel_fibra: 'Medio', tip_digestivo: 'Boniato: version mejorada de la batata.' },
    5: { day: 'Viernes', desayuno: 'Tostada con Aguacate y Huevo', desayuno_detalle: { preparacion: 'Pan integral con aguacate pisado y huevo poche.', beneficios: { nutricional: 'Grasas mono + Proteina', digestivo: 'Lubricante completo' } }, almuerzo: 'Salmon con Esparragos Suaves', almuerzo_detalle: { preparacion: 'Salmon a la plancha con esparragos al vapor muy suaves.', beneficios: { nutricional: 'Omega 3 + Inulina', digestivo: 'Prebiotico potente' } }, cena: 'Pure de Zanahoria y Batata', cena_detalle: { preparacion: 'Zanahoria y batata licuadas con caldo y canela.', beneficios: { nutricional: 'Doble betacaroteno', digestivo: 'Antiinflamatorio nocturno' } }, ingredientes: ['Salmon', 'Esparragos', 'Aguacate', 'Batata'], nivel_fibra: 'Alto', tip_digestivo: 'Esparragos: el mejor prebiotico del planeta.' },
    6: { day: 'Sabado', desayuno: 'Granadilla y Frutos Rojos', desayuno_detalle: { preparacion: 'Granadilla con arandanos y frambuesas sobre yogurt.', beneficios: { nutricional: 'Antioxidantes maximos', digestivo: 'Barrido total' } }, almuerzo: 'Res Molida con Vegetales Rojos', almuerzo_detalle: { preparacion: 'Carne molida magra con pimiento y zanahoria suaves.', beneficios: { nutricional: 'Hierro + Vitamina C', digestivo: 'Absorcion de hierro mejorada' } }, cena: 'Crema de Guisantes con Menta', cena_detalle: { preparacion: 'Guisantes licuados con caldo, oliva y menta fresca.', beneficios: { nutricional: 'Proteina vegetal + Clorofila', digestivo: 'Menta: relaja el intestino' } }, ingredientes: ['Res (Molida)', 'Guisantes', 'Arandanos', 'Yogurt Griego'], nivel_fibra: 'Alto', tip_digestivo: 'Sabado S4: explosion de antioxidantes.' },
    0: { day: 'Domingo', desayuno: 'Gran Desayuno Proteico', desayuno_detalle: { preparacion: 'Huevo, aguacate, jamon de pavo y fruta variada.', beneficios: { nutricional: 'Proteina completa triple', digestivo: 'Enzimas + lubricacion' } }, almuerzo: 'Festin de Salmon y Quinoa', almuerzo_detalle: { preparacion: 'Salmon jugoso sobre quinoa con espinaca y limon.', beneficios: { nutricional: 'Omega 3 + Proteina completa', digestivo: 'Fibra prebiotica total' } }, cena: 'Sopa Suave de Cierre', cena_detalle: { preparacion: 'Caldo de pollo con fideos y cilantro. Suave y reconfortante.', beneficios: { nutricional: 'Colageno + Aminoacidos', digestivo: 'Sana y cierra la semana' } }, ingredientes: ['Salmon', 'Quinoa', 'Huevo', 'Pavo'], nivel_fibra: 'Medio', tip_digestivo: 'Domingo S4: termina con todo el poder nutricional.' },
  }
};

interface ListItem {
  id: string;
  text: string;
  completed: boolean;
}

export function EnzitoLunchTracker() {
  const [activeTab, setActiveTab] = useState<'plan' | 'essentials'>('plan');
  const [currentWeek, setCurrentWeek] = useState('Semana 1');
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; details: RecipeDetails } | null>(null);

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

  const currentMenu = LUNCH_RECIPES_DB[currentWeek]?.[selectedDay] || LUNCH_RECIPES_DB['Semana 1'][1];

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
          Enzito Hub <Utensils className="w-6 h-6 text-japandi-sage" />
        </h1>
        <div className="flex gap-4 mt-2">
          <button
            type="button"
            onClick={() => setActiveTab('plan')}
            className={cn("text-xs font-black uppercase tracking-[0.2em] pb-1 border-b-2 transition-all", activeTab === 'plan' ? "border-japandi-sage text-japandi-text" : "border-transparent text-japandi-muted")}
          >
            Nutri-Plan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('essentials')}
            className={cn("text-xs font-black uppercase tracking-[0.2em] pb-1 border-b-2 transition-all", activeTab === 'essentials' ? "border-japandi-sage text-japandi-text" : "border-transparent text-japandi-muted")}
          >
            Essentials
          </button>
        </div>
      </header>

      {activeTab === 'plan' ? (
        <div className="space-y-6">
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
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-japandi-surface/30 rounded-[3rem] p-8 border border-japandi-border/30">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 mb-6 text-japandi-muted">
              <ShoppingCart className="w-4 h-4" /> Lista de Compras — {currentWeek}
            </h3>
            <div className="flex flex-wrap gap-2">
              {getGroceryList().map(ing => (
                <span key={ing} className="px-4 py-2 bg-white rounded-2xl text-[11px] font-black border border-japandi-border/40 text-japandi-text shadow-sm">{ing}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-8 border border-japandi-border/30 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 mb-6 text-japandi-muted">
              <Plus className="w-4 h-4" /> Enzito Essentials
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
                  <p className={cn("flex-1 text-sm font-black", item.completed && "line-through text-japandi-muted/50")}>{item.text}</p>
                  <button type="button" onClick={() => deleteItem(item.id)} className="text-red-300 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
