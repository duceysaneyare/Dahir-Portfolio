import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init("_fUn8Di61Prf2a-DW");

createRoot(document.getElementById("root")!).render(<App />);
