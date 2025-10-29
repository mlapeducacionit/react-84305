import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import { useState } from "react" // <--- TablaProducto
import DB from "../constants/productos" // <--- TablaProducto
import { v4 as uuidv4 } from 'uuid'

const Productos = () => {

  console.log(DB) /* un array de productos JS */ // <--- TablaProducto
  const [productos, setProductos] = useState(DB) // <--- TablaProducto

  // CRUD  
  // CRUD -> C:Create
  const handleAgregarProducto = (nuevoProducto) => {
    // De cambio de estado (productos)
    console.log(nuevoProducto)

    // TODO: EL ID -> Lo genera el Backend.
    //nuevoProducto.id = Date.now() // timestamp (la cantidad de milisegundos desde 1 de enero de 1970)
    nuevoProducto.id = uuidv4() // timestamp (la cantidad de milisegundos desde 1 de enero de 1970)
    // nuevoProducto.id = crypto.randomUUID() 
    //productos.push(nuevoProducto) // !NO SE PUEDE MODIFICAR DIRECTAMENTE

    const nuevoEstadoProductos = [...productos, nuevoProducto] // Clono el array
    setProductos(nuevoEstadoProductos)

  }
  // CRUD -> U:Update
  const handleEditarProducto = () => {

  }

  // CRUD -> D:Delete
  const handleBorrarProducto = (id) => {
    console.log(id)

    // array.filter() || <----- devuelve un array con elementos filtrados
    // prod.id === id <--- ese es el elemento que quiero descartar 
    // console.log(productos)
    const nuevoEstadoProductos = productos.filter((prod) => prod.id !== id)
    //console.log(nuevoEstadoProductos)
    setProductos(nuevoEstadoProductos)

  }


  return (
    <>
        <Formulario handleAgregarProducto={handleAgregarProducto} />
        <TablaProductos productos={productos} handleBorrarProducto={handleBorrarProducto} />
    </>
  )
}

export default Productos