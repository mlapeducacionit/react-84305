// rafce
import { useState } from 'react'
import './Contador.css'

const Contador = () => {

    // A partir de la versión 16.8 de REACT aparencen los HOOK. ME va permitir incorpar a una función (componente) el estado de react.
    // Una variable especial que está conectada al motor de react.
    // Los componentes van a tener estados. Cuando cambien (muten) se le va a avisar a REACT para que vuelva a ejecutar al componente y leer esa variable
    // useState(22) // Va retornar un array de 2 posiciones
    //console.log(useState(22)[0]) // Voy a tener el estado -> 22
    //console.log(useState(22)[1]) // Voy a tener una función que modifica el estado - fn()

    /* const array2Posiciones = useState(22) */
    /* console.log(array2Posiciones); */
    const [estado, setEstado] = useState(22)
    console.log(estado);
    console.log(setEstado);

  return (
    <>
      <h2 className="text-2xl font-bold">Contador</h2>

      <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Incrementar</button>
      <button className='bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Decrementar</button>
      <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Reiniciar</button>

    </>
  )
}

export default Contador