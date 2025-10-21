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
    //       0         1
    //const [estado, setEstado] = useState(22) 
    // useState es un función -> Recibe un argumento de inicialización (string, number, boolean, array, objeto, function)
    // Retorna un array de 2 posiciones -> 0 -> voy a tener el estado.
    // Retorna un array de 2 posiciones -> 1 -> la función que modifica el estado
    //console.log(estado);
    //console.log(setEstado);

    let [contador, setContador] = useState(11)
    // REACT -----> contador (estado -> variable reactiva conectada a react)
    //console.log(contador); // Estado
    //console.log(setContador); // Función que modifica el estado

    // Bindear (asociar un evento) a un botón
    const handleIncrementar = () => {
        console.log('Hicieron click en incrementar');
        /* contador = contador + 1
        console.log(contador) */ // ! NO PUEDO HACER ESTO. NO PUEDO MODIFICAR DIRECTAMENTE EL ESTADO DE REACT
        // ! TENGO QUE USAR LA FUNCION QUE ME ENTREGA EL useState
        setContador(contador + 1)
    }

    const handleDecrementar = () => {
        setContador(contador - 1)
    }

  return (
    <>
      <h2 className="text-2xl font-bold">Contador <span className='text-4xl text-red-600'>{contador}</span></h2>

      {/* <button onClick={() => { console.log('Hola mundillo')}} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Incrementar</button> */}
      <button onClick={handleIncrementar} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Incrementar</button>
      {/* <button onClick={() => setContador(contador - 1)} className='bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Decrementar</button> */}
      <button onClick={handleDecrementar} className='bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Decrementar</button>
      <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm text-white me-2 my-4 cursor-pointer'>Reiniciar</button>

    </>
  )
}

export default Contador