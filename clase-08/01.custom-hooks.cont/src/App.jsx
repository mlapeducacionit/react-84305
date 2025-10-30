// rafce
import Contador from "./components/estados/Contador/Contador"
import ContadorHook from "./components/estados/ContadorHook/ContadorHook"

const App = () => {

  return (
    <div className="container mx-auto">

      <h2 className="text-4xl font-bold">Estados en REACT (useState)</h2>

      <Contador />
      <hr />

      <h2 className="text-4xl font-bold">Contador con Custom Hook</h2>

      <ContadorHook valorInicial={22} />
      <hr />

    </div>
  )
}

export default App