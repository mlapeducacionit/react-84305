import { useReducer } from "react"
import types from "../types/contador-types"

const UseReduce = () => {

    // ! useReduce
    /* Otro de los gancho (hooks) que surgieron con la versión de React 16.8. Este hook nos va a permitir gestionar estados complejos (un useState con super poderes). Funciona incluso similar a useState pero de una manera más prolija y estructurada para modificar el estado */ 
    /* Cuando el estado es un objeto con varios atributos/propiedades va a ser interesante usar el hook useReduce para gestioanr las diferentes propiedades/atributos */
    // ! Ejemplo de estado complejo
    /* const [objeto, setObjeto] = useState({ 
        nombre: 'Maxi',
        apellido: 'Principe',
        edad: 22,
        direccion: {
            altura: 123,
            calle: 'Calle Falsa'
        }
    }) */

    // ! functions puras (necesito en el useReduce que la funcioens sean puras)
    // dentro de la función no cambio la variable involucrada
    
    function pura() {
        let contador = 0

        function incrementarEn1() {
            const resultado = contador + 1 // No estoy modificando la variable contador dentro de la función
            return resultado
        }

        const res = incrementarEn1()
        console.log({res}) // 1
        console.log({contador}) // 0

    }

    //pura()

    // ! funciones impuras
    // Si modifico el valor de la variable dentro de la función
    function impura() {
        let contador = 0

        function incrementar() {
            contador = contador + 1 // Estoy modificando la variable contador dentro de la función. Función impura
            //contador++
            return contador
        }

        const res = incrementar()
        console.log({res}) // 1
        console.log({contador}) // 1
    }

    //impura()
    // disparador -> recibe otras funciones -> acciones -> El disparador, va a disparar acciones.
    //const [<estado>, <disparador>] = useReducer(<funcion-pura>, <valorInicial>)
    
    const valorInicial = 22
    // 1. función pura
    const contadorReducer = (estado, accion) => {
        // No modificar las variables dentro la función
        console.log(estado) // { contador }
        console.log(accion) // { type: 'acción', payload: 5}
        switch (accion.type) {
            case types.INCREMENTAR: // handleIncrementar -> acción incrementar
                console.log('INCREMENTAR')
                return { contador: estado.contador + 1 }
            case types.DECREMENTAR: // handleDecrementar -> acción descrementar
                console.log('DECREMENTAR')
                return { contador: estado.contador - 1 }
            case types.REINICIAR: // handleReiniciar -> acción reiniciar
                console.log('REINICIAR')
                return { contador: valorInicial }
            case types.INCREMENTARPORVALOR: // handleIncrementarXValor(valor) -> acción incrementarPorValor
                console.log('INCREMENTARPORVALOR')
                return { contador: estado.contador + accion.payload } // payload -> 5
            default:
                throw new Error('No se paso una acción definida')
        }   
    }

    // 2. usar la función pura en el hook
    //                                    ⬇️ func-pura           ⬇️ obj-inicialización
    const [estado, dispatch] = useReducer(contadorReducer, { contador: valorInicial })
    console.log(estado)

    const handleIncrementar = () => {
        console.log('handleIncrementar')
        // Vamos a disparar la acción de incrementar
        dispatch({ type: types.INCREMENTAR } )
    }

    const handleDecrementar = () => {
        console.log('handleDecrementar')
        dispatch({ type: types.DECREMENTAR } )
    }

    const handleReiniciar = () => {
        console.log('handleReiniciar')
        dispatch({ type: types.REINICIAR } )
    }
    const handleIncrementarPorValor = (valor) => {
        console.log('handleReiniciar')
        dispatch({ type: types.INCREMENTARPORVALOR, payload: valor })
    }

  return (
    <>
        <h3 className="text-xl my-3 text-blue-400">Contador (useReducer)</h3>
        <hr />
        <h4 className="text-6xl my-3 text-blue-300">{estado.contador}</h4>
        <button 
            onClick={handleIncrementar} 
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 cursor-pointer">
                Incrementar
        </button>
        <button 
            onClick={handleDecrementar} 
            className="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 cursor-pointer">
                Decrementar
        </button>
        <button 
            onClick={handleReiniciar} 
            className="bg-red-500 hover:bg-red-700 px-4 py-2 cursor-pointer">
                Reiniciar
        </button>
        <button 
            onClick={() => handleIncrementarPorValor(5)} 
            className="bg-red-500 hover:bg-red-700 px-4 py-2 cursor-pointer">
                Incrementar Por 5
        </button>
    </>
  )
}

export default UseReduce