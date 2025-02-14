import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'
import "./i18n.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
