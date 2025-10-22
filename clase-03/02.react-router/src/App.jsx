// rafce

import { BrowserRouter, Route, Routes } from "react-router"
import Inicio from "./pages/Inicio"
import Producto from "./pages/Producto"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import NoEncontrado from "./pages/NoEncontrado"

const App = () => {

  return (
    <BrowserRouter>

        <Routes> {/* Switch */}
            <Route path="/" element={<Inicio />} /> {/* Case */}
            <Route path="/productos" element={<Producto />} /> {/* Case */}
            <Route path="/nosotros" element={<Nosotros />} /> {/* Case */}
            <Route path="/contacto" element={<Contacto />} /> {/* Case */}
            <Route path="*" element={<NoEncontrado />} /> {/* Case */}
        </Routes>

    </BrowserRouter>

  )
}

export default App
