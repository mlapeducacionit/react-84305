import { StrictMode } from 'react' /* core (corazón) */
import { createRoot } from 'react-dom/client' /* adaptador -> adaptando el uso de REACT al DOM */
// react-native
import './index.css' // CSS para toda la aplicación. Pero todos los css van a impactar en principio sobre toda la aplicación. Para evitar eso, vamos a trabajar con CSS Modules.
import App from './App.jsx' // Primer componente de una app react. Un archivo, un componente.
// document.querySelector('#root') 
// Extensión para desarrollar con React
// https://react.dev/learn/react-developer-tools
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

