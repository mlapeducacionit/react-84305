// rafce

import { BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import Rutas from "./routes/Rutas"

const App = () => {

  return (
    <BrowserRouter>

        <header>
            <Navbar />
        </header>

        <main className="container mx-auto">
            <Rutas />
        </main>

    </BrowserRouter>
  )
}

export default App
