import Clientes from "./components/Clientes"
import Contador from "./components/Contador"

const App = () => {
  return (
    <>
      <h1>Aplicación de prueba para trabajar con Redux Toolkit</h1>
      <hr />
      <Contador />
      <hr />
      <Clientes /> 
    </>
  )
}

export default App