import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './componentes/Header/index.jsx'
import Footer from './componentes/Footer/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
