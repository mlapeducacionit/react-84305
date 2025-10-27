import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import { useState } from "react" // <--- TablaProducto
import DB from "../constants/productos" // <--- TablaProducto

const Productos = () => {

  console.log(DB) /* un array de productos JS */ // <--- TablaProducto
  const [productos, setProductos] = useState(DB) // <--- TablaProducto

  // CRUD  
  // CRUD -> C:Create
  const handleAgregarProducto = () => {

  }
  // CRUD -> U:Update
  const handleEditarProducto = () => {

  }
  // CRUD -> D:Delete
  const handleBorrarProducto = () => {

  }


  return (
    <>
        <Formulario />
        <TablaProductos productos={productos} />
    </>
  )
}

export default Productos