import { useReducer } from "react"

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
        console.log(estado) // { contador }
        console.log(accion) // { type: 'acción', payload: 5}
        switch (key) {
            case 'INCREMENTAR': // handleIncrementar -> acción incrementar
                
                break;
            case 'DECREMENTAR': // handleDecrementar -> acción descrementar
                
                break;
            case 'REINICIAR': // handleReiniciar -> acción reiniciar
                
                break;
            case 'INCREMENTARPORVALOR': // handleIncrementarXValor(valor) -> acción incrementarPorValor
                
                break;
        
            default:
                break;
        }
    }



  return (
    <div>UseReduce</div>
  )
}

export default UseReduce