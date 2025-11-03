//rafce

import { BrowserRouter } from "react-router"
import Padre from "./components/donde-vive-estado/Padre"
import Rutas from "./routes/Rutas"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto mt-7">
        <Rutas />            
      </main>
    </BrowserRouter>
  )
}

export default App
