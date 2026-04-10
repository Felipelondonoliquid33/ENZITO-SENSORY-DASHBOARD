import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, ChevronRight, ArrowLeft, Camera, Image as ImageIcon, Send, Loader2, X } from 'lucide-react';
import { defaultExercises } from '../data/exercises';
import { weeklySchedule } from '../data/weeklySchedule';
import { createTutorChat, sendMessageToTutor } from '../lib/gemini';
import { Chat } from '@google/genai';
import { cn } from '../lib/utils';
import { Key } from 'react';

interface UnifiedExercise {
  id: string;
  title: string;
  description: string;
  source: string;
}

const allExercises: UnifiedExercise[] = [
  ...defaultExercises.map(e => ({ id: e.id, title: e.title, description: e.description, source: 'Rutina Sugerida' })),
  ...weeklySchedule.flatMap(day => day.exercises.map(e => ({
    id: `${day.day}-${e.title}`,
    title: e.title,
    description: e.description,
    source: `Programa - ${day.day}`
  })))
];

// Remove duplicates by title
const uniqueExercises = Array.from(new Map(allExercises.map(item => [item.title, item])).values());

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  imageUrl?: string;
}

export function AITutorPage() {
  const [selectedExercise, setSelectedExercise] = useState<UnifiedExercise | null>(null);

  return (
    <div className="min-h-screen pb-28 pt-12 px-6">
      <AnimatePresence mode="wait">
        {!selectedExercise ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <header className="max-w-md mx-auto mb-8">
              <h1 className="text-2xl font-semibold text-japandi-text flex items-center gap-2">
                Tutor IA <Bot className="w-6 h-6 text-japandi-sage" />
              </h1>
              <p className="text-japandi-muted text-sm mt-1">
                Selecciona un ejercicio para recibir feedback pedagógico y analizar fotos de Enzito.
              </p>
            </header>

            <main className="max-w-md mx-auto space-y-3">
              {uniqueExercises.map((exercise) => (
                <motion.button
                  key={exercise.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedExercise(exercise)}
                  className="w-full bg-japandi-surface/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-japandi-border/50 flex items-center justify-between text-left"
                >
                  <div>
                    <h3 className="text-base font-medium text-japandi-text">{exercise.title}</h3>
                    <span className="text-xs text-japandi-sage font-medium">{exercise.source}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-japandi-muted" />
                </motion.button>
              ))}
            </main>
          </motion.div>
        ) : (
          <ExerciseTutorView 
            key="detail" 
            exercise={selectedExercise} 
            onBack={() => setSelectedExercise(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ExerciseTutorView({ exercise, onBack, key }: { exercise: UnifiedExercise, onBack: () => void, key?: Key }) {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ file: File, preview: string } | null>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newChat = createTutorChat(exercise.title, exercise.description);
    setChat(newChat);
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: `¡Hola Yen! Estoy aquí para ayudarte con el ejercicio **${exercise.title}**. \n\nRecordemos de qué trata: *${exercise.description}*\n\n¿Tienes alguna duda sobre cómo hacerlo o quieres subir una foto de Enzito para que te dé feedback?`
      }
    ]);
  }, [exercise]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const preview = URL.createObjectURL(file);
      setSelectedImage({ file, preview });
    }
  };

  const handleSend = async () => {
    if ((!inputText.trim() && !selectedImage) || !chat) return;

    const userText = inputText.trim();
    const imageToSend = selectedImage;
    
    setInputText('');
    setSelectedImage(null);

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      imageUrl: imageToSend?.preview
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    try {
      let base64Data: string | undefined;
      let mimeType: string | undefined;

      if (imageToSend) {
        base64Data = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = (reader.result as string).split(',')[1];
            resolve(base64String);
          };
          reader.readAsDataURL(imageToSend.file);
        });
        mimeType = imageToSend.file.type;
      }

      const responseText = await sendMessageToTutor(chat, userText, base64Data, mimeType);
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || 'Lo siento, no pude procesar eso.'
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Hubo un error al conectar con el tutor. Por favor, intenta de nuevo.'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-[calc(100vh-8rem)] max-w-md mx-auto"
    >
      <header className="flex items-center gap-3 mb-6">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-japandi-surface/80 flex items-center justify-center text-japandi-text shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-lg font-medium text-japandi-text leading-tight">{exercise.title}</h2>
          <span className="text-xs text-japandi-sage">Tutor IA Activo</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto space-y-4 pb-4" style={{ scrollbarWidth: 'none' }}>
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={cn(
              "flex w-full",
              msg.role === 'user' ? "justify-end" : "justify-start"
            )}
          >
            <div className={cn(
              "max-w-[85%] rounded-2xl p-4 shadow-sm",
              msg.role === 'user' 
                ? "bg-japandi-sage text-white rounded-tr-sm" 
                : "bg-japandi-surface text-japandi-text rounded-tl-sm border border-japandi-border/50"
            )}>
              {msg.imageUrl && (
                <img src={msg.imageUrl} alt="Upload" className="w-full rounded-xl mb-2 object-cover max-h-48" />
              )}
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-japandi-surface rounded-2xl rounded-tl-sm p-4 shadow-sm border border-japandi-border/50">
              <Loader2 className="w-5 h-5 animate-spin text-japandi-sage" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="pt-4 mt-auto">
        {selectedImage && (
          <div className="relative inline-block mb-3">
            <img src={selectedImage.preview} alt="Preview" className="h-20 rounded-xl border-2 border-japandi-sage" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
        
        <div className="flex items-end gap-1 bg-japandi-surface/90 backdrop-blur-md p-2 rounded-3xl shadow-sm border border-japandi-border/50">
          {/* Camera Input (Directly opens camera on mobile) */}
          <input 
            type="file" 
            accept="image/*" 
            capture="environment"
            className="hidden" 
            ref={cameraInputRef}
            onChange={handleImageSelect}
          />
          <button 
            onClick={() => cameraInputRef.current?.click()}
            className="p-2.5 text-japandi-muted hover:text-japandi-sage transition-colors"
            title="Tomar foto"
          >
            <Camera className="w-6 h-6" />
          </button>

          {/* Gallery Input */}
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={galleryInputRef}
            onChange={handleImageSelect}
          />
          <button 
            onClick={() => galleryInputRef.current?.click()}
            className="p-2.5 text-japandi-muted hover:text-japandi-sage transition-colors"
            title="Subir de galería"
          >
            <ImageIcon className="w-6 h-6" />
          </button>
          
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Pregunta o sube una foto..."
            className="flex-1 bg-transparent border-none focus:outline-none resize-none max-h-32 py-3 text-sm text-japandi-text placeholder:text-japandi-muted/60"
            rows={1}
          />
          
          <button 
            onClick={handleSend}
            disabled={(!inputText.trim() && !selectedImage) || isTyping}
            className="p-3 bg-japandi-sage text-white rounded-full disabled:opacity-50 disabled:bg-japandi-muted transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
