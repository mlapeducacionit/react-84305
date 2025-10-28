import { useState } from "react"
import { useEffect } from "react"
import ProcesoEjecucion from "../components/ProcesoEjecucion"
import PeticionAsincronica from "../components/PeticionAsincronica"

const EfectoSecundario = () => {

    // https://react.dev/reference/react/hooks
    // https://react.dev/reference/react/useEffect

    // ! Efecto Secundario (useEffect) 
    // ? Es un gancho (hook) como el useState pero permite en este caso, estar atento (pendiente) de cambio que se produzca en un estado, props o en el ciclo de vida del componente. En el ciclo de vida del componente podría ejecutar código.

    // ! Ciclo de vida de un componente de REACT

    // * 1. Montaje -> Nace o se monta en la interfaz el componente -> Aparece en pantalla
    // * 2. Actualización -> Se actualiza... (Props, o estado)
    // * 3. Desmonaje -> El componente muere. Se destruye -> Desaparece de la pantalla.

    // ! Arquitectura del useEffect (recibe 2 argumentos)
    // * Es una función que recibe 2 argumentos.

    // useEffect(callback, [array-referencias])
    // 1. 1er argumento es una función. Un callback (una función pasada como argumento del useEffect)
    // 2. 2do argumento es un array de referencias. funciones, estados, props.

    // ! NOTA IMPORTANTE: Es que el array de referencias tiene que estar presente, no puede no estar.
    // ! useEffect(callback, []) // <------ el array aunque vacío tiene que estar.

    // useEffect(callback, [])
    // addEventLister('click', callback)

    // ! 1. Montaje

   /*  useEffect(() => { 
        console.warn('El componete se montó (apareció en pantalla)')
    }, []) // Array vacío <----- el efecto secundario se va a ejecutar cuando el componente se monté
    
    // ! 3. Desmonaje

    useEffect(() => {   
      return () => {
        console.warn('El componete se desmontó (Desapareció de pantalla)')
      }
    }, []) // Si el array de referencias está vacío y la función callback returna una función se ejecuta cuando el componete se desmoente */

    useEffect(() => { 
        // ! Montaje
        console.warn('El componete se montó (apareció en pantalla)')
        document.title = 'Educación IT - Efecto Secundario'
        // Iniciar un proceso. 
        // ! Desmontaje
        return () => {
            console.warn('El componete se desmontó (Desapareció de pantalla)')
            // Detener el proceso
        }
    }, [])

    // ! 2. Actualización

    const [contador, setContador] = useState(888)

    useEffect(() => {   
      console.log('Cambió el estado "contador"')
      // const [contador, setContador] = useState(888) // ! NO SE PUEDE CREAR UN ESTADO (o cualquier hook) DENTRO DEL USE EFFECT
    }, [contador]) // Referencia a la cual el useEffect va a estar pendiente

    const [contador2, setContador2] = useState(2222)

    useEffect(() => {
      console.log('El "contador2" cambió de valor')
    }, [contador2])

    useEffect(() => {
      console.warn('Cambió "contador" o "contador2"')
    }, [contador, contador2])


    

  return (
    <>
        <h2>Efecto Secundario</h2>
        <hr />
        <h3 className="text-2xl text-green-500">Contador {contador}</h3>
        <button 
            onClick={() => setContador(contador + 1)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 cursor-pointer"
        >
                Incrementar
        </button>
        <hr />
        <h3 className="text-2xl text-violet-500">Contador {contador2}</h3>
        <button 
            onClick={() => setContador2(contador2 + 2)}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 cursor-pointer"
        >
                Incrementar
        </button>
        <hr />

        <ProcesoEjecucion /> 
        
        <hr />

        <PeticionAsincronica /> 
    </>
  )
}

export default EfectoSecundario