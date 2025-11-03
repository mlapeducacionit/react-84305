import { useState } from "react"

// ! Un hook personalizado nos permite extraer la logica de los componentes en un archivo para su posterior reutilización 
/* 1. El nombre del archivo tiene que comenzar con 'use'... Por ejemplo useContador, useFetch, useForm, useLocalStorage */
/* 2. Un hook personalizado es una función de javascript. Con el nombre que use para el archivo */
/* 3. Dentro de la función creada en el paso 2, tengo que si o si, utilizar alguno de los hooks buildin (Incomporados en react)... useState, useEffect... */
/* 4. Tiene que exportarse para poder utilizarse en los componentes */

const useContador = ( valorInicial = 222 ) => {
    // useState, useEffect

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

    // Es retornar lo que quiero utilizar cuando importe el hook. No es obligatorio.
    return [ contador, handleIncrementar, handleDecrementar, handleReiniciar ]
    // return { contador, handleIncrementar, handleDecrementar, handleReiniciar }
    
}

export default useContador