import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function createTutorChat(exerciseTitle: string, exerciseDescription: string): Chat {
  return ai.chats.create({
    model: "gemini-3.1-pro-preview",
    config: {
      systemInstruction: `Eres un experto terapeuta ocupacional pediátrico y pedagogo. Estás ayudando a Yen, la mamá de Enzito, con el ejercicio: "${exerciseTitle}". Descripción: "${exerciseDescription}". Tu tono debe ser cálido, empático, profesional y muy alentador. Si Yen sube una foto, analiza la postura, el entorno y cómo Enzito está interactuando con el ejercicio, y dale feedback constructivo y amable. Responde de forma concisa y clara, usando Markdown para resaltar puntos clave.`,
    }
  });
}

export async function sendMessageToTutor(chat: Chat, text: string, fileBase64?: string, mimeType?: string) {
  const parts: any[] = [];
  if (text) {
    parts.push({ text });
  }
  if (fileBase64 && mimeType) {
    parts.push({
      inlineData: {
        data: fileBase64,
        mimeType: mimeType
      }
    });
  }
  
  const response = await chat.sendMessage({ message: parts });
  return response.text;
}
