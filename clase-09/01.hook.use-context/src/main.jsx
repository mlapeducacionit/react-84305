import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/Navbar.jsx'
import { TemaProvider } from './contexts/TemaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvider>

      <BrowserRouter>
        <Navbar /> 
        <Rutas />    
      </BrowserRouter>
      
    </TemaProvider>
  </StrictMode>
)
