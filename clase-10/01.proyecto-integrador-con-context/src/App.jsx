//rafce

import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Navbar from "./components/Navbar"
import { ProductosProvider } from "./contexts/ProductosContext"

const App = () => {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto mt-7">
          <Rutas />            
        </main>
      </BrowserRouter>
    </ProductosProvider>
  )
}

export default App
