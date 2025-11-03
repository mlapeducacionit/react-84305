import './ContadorHook.css'
import useContador from '../../../hooks/useContador'

const ContadorHook = ({ valorInicial = 125 }) => { 

   const [counter, handleIncrement, handleDecrement, handleReset] = useContador(valorInicial)

  return (
    <>
      <h2 className="text-2xl font-bold">Contador <span className='text-4xl text-red-600'>{counter}</span></h2>

      <button onClick={handleIncrement} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Incrementar</button>
      <button onClick={handleDecrement} className='bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Decrementar</button>
      <button onClick={handleReset} className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Reiniciar</button>

    </>
  )
}

export default ContadorHook