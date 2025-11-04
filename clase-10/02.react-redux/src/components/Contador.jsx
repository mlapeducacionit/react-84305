import { useDispatch, useSelector } from "react-redux"
import { decrementar, incrementar, incrementarPorValor } from "../store/slices/contador"

const Contador = () => {

  // ! useSelector ->  Me permite seleccionar dentro del store el estado que necesito 
  // Consumiendo el estado que necesito, que tengo dentro del store
  const { contador } = useSelector(store => {
    console.log(store) 
    return store.contador
  })

  //const { contador } = useSelector(store => store.contador)
  
  //console.log(contador)
  // ! useDispatch -> Me permite disparar la acción
  // Disparar las acciones. 
  const dispatch = useDispatch()

  const handleIncrementar = () => {
    dispatch(incrementar()) // ejecuto acción incrementar
  }

  const handleDecrementar = () => {
    dispatch(decrementar()) // dispacho la acción decrementar
  } 

  const handleIncrementarPorValor = (valor) => {
    dispatch(incrementarPorValor(valor))
  }

  return (
    <div>
        Valor Contador: {contador}
        <hr />
        <button onClick={handleIncrementar}>Incrementar</button>
        <button onClick={handleDecrementar}>Decrementar</button>
        <button onClick={() => handleIncrementarPorValor(40)}>Incrementar por valor</button>
    </div>
  )
}

export default Contador