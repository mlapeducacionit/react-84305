import { useContext } from "react"
import TemaContext from "../contexts/TemaContext"

const BotonCambioTema = () => {

    const { handleCambiarModo } = useContext(TemaContext)
    // console.log(data)

    const handleClick = () => {
        console.log('Hicieron click!')
        handleCambiarModo()
    }

  return (
    <button 
        onClick={handleClick}
        className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer px-4 py-2"
    >
        Cambiar Tema
    </button>
  )
}

export default BotonCambioTema