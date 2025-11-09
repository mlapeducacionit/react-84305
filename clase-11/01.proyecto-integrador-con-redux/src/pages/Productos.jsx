import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import { useEffect, useState } from "react" // <--- TablaProducto
import useTitulo from "../hooks/useTitulo"

const Productos = () => {

  useTitulo('Productos')
  
  return (
    <>
        <Formulario />
        <TablaProductos />
    </>
  )
}

export default Productos