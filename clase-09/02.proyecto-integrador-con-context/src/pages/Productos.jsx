import Formulario from "../components/Formulario"
import TablaProductos from "../components/TablaProductos"
import { useEffect, useState } from "react" // <--- TablaProducto
import DB from "../constants/productos" // <--- TablaProducto
import { v4 as uuidv4 } from 'uuid'

const Productos = () => {

  //console.log(DB) /* un array de productos JS */ // <--- TablaProducto
  const [productos, setProductos] = useState(null) // <--- TablaProducto
  const [productoAEditar, setProductoAEditar] = useState(null)
  const [error, setError] = useState(false)
  console.log(import.meta.env)
  let urlProductos

  if (import.meta.env.MODE === 'development') {
    urlProductos = import.meta.env.VITE_BACKEND
  } else {
    urlProductos = import.meta.env.VITE_BACKEND_CLOUD
  }

  //console.log(urlProductos)
  // ! Petición asincronica para obtener los productos
  const peticionProductos = async () => {
    
    try {

      const res = await fetch(urlProductos)

      if (!res.ok) {
        throw new Error('No se pudo obtener los productos')
      }
      
      const prods = await res.json()
      console.log(prods)
      setProductos(prods)

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    peticionProductos()
    document.title = 'Educación IT - Productos'
  }, [])
  
  // CRUD  
  // CRUD -> C:Create
  const handleAgregarProducto = async (nuevoProducto) => {
     // De cambio de estado (productos)
     console.log(nuevoProducto) // tiene el id
     // ! 1. Hacer la petición asincronica para guardar el producto (Backend)
    delete nuevoProducto.id // id = null
    console.log(nuevoProducto)

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(nuevoProducto)
    }

    try {
      const res = await fetch(urlProductos, options)

      if (!res.ok) {
        throw new Error('No se pudo crear el producto')
      }
      
      const productoCreado = await res.json()
      console.log(productoCreado) // { nombre, categoria, precio, id} // acá ya tengo el id creado por json server

      // ! 2. Actualizar el estado de la aplicación (Frontend)

      const nuevoEstadoProductos = [...productos, productoCreado] // Clono el array
      setProductos(nuevoEstadoProductos) 
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }

    

    

  }

  // CRUD -> U:Update
  const handleEditarProducto = async (productoEditado) => {
    // console.log(productoEditado)

    // ! 1. Petición para actualizar el producto en el backend
    try {

      const options = {
          method: 'PUT',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify(productoEditado)
      }

      const urlEdicion = urlProductos + productoEditado.id

      const res = await fetch(urlEdicion, options)

      if( !res.ok ) {
        throw new Error('No se pudo editar')
      }
    
      const productoListo = await res.json()
      console.log(productoListo)

       // ! 2. Actualizar estado react para que se refleje en la interfaz

      const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
      setProductos(nuevoEstadoProductos)

    } catch (error) {
      console.error(error)
    }  

  }

  // CRUD -> D:Delete
  const handleBorrarProducto = async (id) => {
    console.log(id)
    // ! 1. Hacer petición para borrar el producto en el back
    const urlBorradoProducto = urlProductos + id

    const options = {
      method: 'DELETE'
    }
    
    try {

      const res = await fetch(urlBorradoProducto, options)

      if (!res.ok) {
        throw new Error('No se pudo borrar el producto')
      }

      const productoBorrado = await res.json()

      console.log(productoBorrado)
      // ! 2. Actualizar el estado de react para verlo en la interfaz

      const nuevoEstadoProductos = productos.filter((prod) => prod.id !== productoBorrado.id)
      setProductos(nuevoEstadoProductos)

      
    } catch (error) {
      console.error(error)
    }

   
    

  }

  return (
    <>
        { error && <p>Ocurrió un error</p> }
        <Formulario
          handleAgregarProducto={handleAgregarProducto} 
          productoAEditar={productoAEditar}
          handleEditarProducto={handleEditarProducto}
          setProductoAEditar={setProductoAEditar}
        />
        <TablaProductos 
          productos={productos} 
          handleBorrarProducto={handleBorrarProducto} 
          setProductoAEditar={setProductoAEditar} 
        />
    </>
  )
}

export default Productos