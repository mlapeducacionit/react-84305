import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import { useState } from "react" // <--- TablaProducto
import DB from "../constants/productos" // <--- TablaProducto

const Productos = () => {

  console.log(DB) /* un array de productos JS */ // <--- TablaProducto
  const [productos, setProductos] = useState(DB) // <--- TablaProducto

  // CRUD  
  // CRUD -> C:Create
  const handleAgregarProducto = (nuevoProducto) => {
    // De cambio de estado (productos)
    console.log(nuevoProducto)

    // TODO: EL ID -> Lo genera el Backend.
  
    //productos.push(nuevoProducto) // !NO SE PUEDE MODIFICAR DIRECTAMENTE

    const nuevoEstadoProductos = [...productos, nuevoProducto] // Clono el array
    setProductos(nuevoEstadoProductos)

  }
  // CRUD -> U:Update
  const handleEditarProducto = () => {

  }
  // CRUD -> D:Delete
  const handleBorrarProducto = () => {

  }


  return (
    <>
        <Formulario handleAgregarProducto={handleAgregarProducto} />
        <TablaProductos productos={productos} />
    </>
  )
}

export default Productos