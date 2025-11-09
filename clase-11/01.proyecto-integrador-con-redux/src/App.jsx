//rafce

import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Navbar from "./components/Navbar"
import { Provider } from "react-redux"
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto mt-7">
          <Rutas />            
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
