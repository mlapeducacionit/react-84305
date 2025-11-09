import { useNavigate } from "react-router"
import handleNotificacion from "../utils/handle-notificacion"
import { useDispatch } from "react-redux"
import { setProductoAEditar } from "../store/slices/productos"
import { deleteProductoThunk } from "../store/slices/productos/thunk-actions/delete-producto-thunk"


const ItemProducto = ({ prod }) => { // props = { prod }
    //console.log(prod) // { nombre, categoria, precio }

    const dispatch = useDispatch()

    const handleBorrar = (id) => {
      //console.log(id)

      const fnQueQuieroQueSeEjecute = () => {
        //handleBorrarProducto(id)
        dispatch(deleteProductoThunk(id))
      }
      
      handleNotificacion(fnQueQuieroQueSeEjecute)

      /* 
        Swal.fire({
              title: "¿Desea borrar el producto?",
              text: "Cuidado porque no vas a poder volver atrás",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, papá!",
              cancelButtonText: "Noooooooooooooooooooooo",
            }).then((result) => {
              if (result.isCon firmed) {
                handleBorrarProducto(id)
                Swal.fire({
                  title: "Deleted!",
                  text: "El producto fue borrado",
                  icon: "success"
                });
              }
        });
      
      
      */

    }

    const handleEditar = (elProductoAEditar) => {
      console.log('Se edita: ->', elProductoAEditar)
      //setProductoAEditar(elProductoAEditar)
      dispatch(setProductoAEditar(elProductoAEditar))
    }

    const navigate = useNavigate()

    const handleNavegacion = (id) => {
      navigate(`detalle/${id}`)
    }

  return (
    <tr className="hover:bg-gray-50">
        <td className="px-4 py-3">{prod.nombre}</td>
        <td className="px-4 py-3">{prod.categoria}</td>
        <td className="px-4 py-3">${prod.precio}</td>
        <td className="px-4 py-3 flex gap-2">
            <button onClick={() => handleNavegacion(prod.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Ver</button>
            {/* <Link to={`../producto-detalle/${prod.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Ver</Link> */}
            <button onClick={() => handleEditar(prod)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">Editar</button>
            <button onClick={() => handleBorrar(prod.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Borrar</button>
        </td>
    </tr>
  )
}

export default ItemProducto