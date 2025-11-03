//const { createContext } = require("react"); // ! NOOOOOOOOO. Modulos de Node (CommonJS)
import { createContext } from "react"; // Modulos de Node (CommonJS)

// ! 1er paso -> Creación del Contexto
const TemaContext = createContext()

// ! 2do paso -> Armado del Provider
const TemaProvider = ({ children }) => {
   

    const data = {

    }

    return <TemaContext.Provider value={data}>{ children }</TemaContext.Provider>
}

// ! 3er paso -> Exportar el contexto y el provider
export { TemaProvider }
export default TemaContext // funcionalidad principal de este modulo
