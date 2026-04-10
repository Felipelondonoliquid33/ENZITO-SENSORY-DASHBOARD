export type ExerciseCategory = 'tactile' | 'vestibular' | 'proprioceptive' | 'visual' | 'auditory';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  category: ExerciseCategory;
  durationMins: number;
}

export interface DailyRecord {
  date: string; // YYYY-MM-DD format
  completedExercises: string[]; // Array of exercise IDs
  mood?: 'calm' | 'active' | 'restless' | 'tired';
  notes?: string;
}
