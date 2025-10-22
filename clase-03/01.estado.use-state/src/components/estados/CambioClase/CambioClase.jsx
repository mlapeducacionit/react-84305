//rafce
import { useState } from 'react'

const CambioClase = () => {
  //       ⬇️ estado ⬇️ función que modifica
  const [activo, setActivo] = useState(false)


  const handleClick = () => {
        setActivo(!activo)
  }

  const clasesElegidas = activo ? "bg-green-700 p-4 text-white" : "bg-red-700 p-4 text-white"

  return (
    <div>
        <div className={clasesElegidas}>
            Hola mundo!
        </div>

        <button onClick={handleClick} className="bg-blue-500 p-4 rounded-sm cursor-pointer text-white mt-4">
            Cambiar
        </button>
    </div>
  )
}


export default CambioClase