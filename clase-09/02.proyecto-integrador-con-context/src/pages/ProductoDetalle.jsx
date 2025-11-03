import { useEffect, useState } from "react"
import { useParams } from "react-router"

const ProductoDetalle = () => {

    const {id} = useParams() // { id }
    // console.log(obj)
    const [producto, setProducto] = useState(null)

    useEffect(() => {
      console.log('El componente se montó')
      peticionProductoPorId(id)
    }, [])
    
    const peticionProductoPorId = async (id) => {
        const url = import.meta.env.VITE_BACKEND
        const urlPorId = url + id
        console.log(urlPorId)

        try {
            const res = await fetch(urlPorId)

            if (!res.ok) {
                throw new Error('No se pudo obtener el producto')
            }

            const productoPorId = await res.json()
            console.log(productoPorId)
            setProducto(productoPorId)
            
        } catch (error) {   
            console.error(error)
        }

    }

  return (
    <>
        <h2>Producto Detalle</h2>
        { producto && <h3>Nombre: { producto.nombre }</h3> }
    </>
  )
}

export default ProductoDetalle