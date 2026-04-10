<div align="center">
  <h1>🦖 Enzito Sensory Dashboard 🦕</h1>
  <p>Una aplicación de regulación sensorial y apoyo emocional, diseñada para acompañar a los más pequeños en su día a día con la ayuda de amigables dinosaurios y tutoría de IA inteligente.</p>
</div>

<br />

## 🌟 ¿Qué es Enzito Sensory Dashboard?

Este proyecto es una **Progressive Web App (PWA)** pensada para ayudar en la gestión de rutinas, regulación sensorial y seguimiento del estado de ánimo. Todo ello impulsado por un entorno divertido y visual con temática de dinosaurios y potenciado con un Tutor de Inteligencia Artificial para resolver dudas y dar soporte interactivo.

## 🦕 Características Principales

*   **🌋 Selector de Estado de Ánimo:** Permite a los niños expresar cómo se sienten mediante una interfaz sencilla e intuitiva.
*   **📅 Programa Semanal y Calendario:** Organiza las actividades diarias y ejercicios sensoriales. Visualiza el progreso semanal de manera clara.
*   **🧘 Ejercicios Sensoriales Guiados:** Tarjetas interactivas con rutinas diseñadas para ayudar a la autorregulación.
*   **🤖 Tutor Inteligente (IA):** Un chat impulsado por Gemini AI, siempre dispuesto a charlar, ayudar y motivar.
*   **🎉 Celebraciones Jurásicas:** Recompensas visuales y refuerzo positivo con dinosaurios al alcanzar las metas.
*   **📱 Experiencia PWA:** Instalable directamente en el móvil o tablet como si fuera una aplicación nativa, funcionando de manera rápida y fluida.

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** React 19 + TypeScript
*   **Estilos:** Tailwind CSS + Motion (para animaciones suaves)
*   **Herramientas de Construcción:** Vite
*   **Inteligencia Artificial:** Google Gemini AI API (`@google/genai`)
*   **PWA Setup:** Configurado para un despliegue directo con capacidades de web app progresiva.

---

## 🚀 Cómo empezar en tu entorno local

Si quieres probar este entorno jurásico en tu propia máquina, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Felipelondonoliquid33/ENZITO-SENSORY-DASHBOARD.git
cd ENZITO-SENSORY-DASHBOARD
```

### 2. Instalar dependencias
Asegúrate de tener Node.js instalado y ejecuta:
```bash
npm install
```

### 3. Configurar la Inteligencia Artificial (Variables de Entorno)
Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de Gemini:
```env
GEMINI_API_KEY=tu_clave_secreta_aqui
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```
¡Tu app estará rugiendo en modo local normalmente en `http://localhost:3000`!

---

## ☁️ Despliegue (Vercel)

Este proyecto está optimizado para subir a **Vercel** en dos clics. 
1. Importa el repositorio en Vercel.
2. Agrega la variable de entorno `GEMINI_API_KEY` en los ajustes del proyecto antes de desplegar.
3. El archivo `vercel.json` incluido solucionará cualquier problema de rutas de la aplicación de manera automática.

<br />

<div align="center">
  <p><i>¡A explorar, aprender y rugir con Enzito!</i> 🦖🌿</p>
</div>

