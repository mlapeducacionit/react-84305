
import { useState } from 'react'
import './ContadorHook.css'

const ContadorHook = ({ valorInicial = 125 }) => { 

    const [contador, setContador] = useState(valorInicial)
  

    const handleIncrementar = () => {     
        setContador(contador + 1)
    }

    const handleDecrementar = () => {
        setContador(contador - 1)
    }

    const handleReiniciar = () => {
      setContador(valorInicial)
    }

  return (
    <>
      <h2 className="text-2xl font-bold">Contador <span className='text-4xl text-red-600'>{contador}</span></h2>

      <button onClick={handleIncrementar} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Incrementar</button>
      <button onClick={handleDecrementar} className='bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Decrementar</button>
      <button onClick={handleReiniciar} className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Reiniciar</button>

    </>
  )
}

export default ContadorHook