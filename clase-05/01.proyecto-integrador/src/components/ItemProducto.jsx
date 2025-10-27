import handleNotificacion from "../utils/handle-notificacion"

const ItemProducto = ({prod, handleBorrarProducto}) => { // props = { prod }
    console.log(prod) // { nombre, categoria, precio }

    const handleBorrar = (id) => {
      //console.log(id)

      const fnQueQuieroQueSeEjecute = () => {
        handleBorrarProducto(id)
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



    const handleEditar = () => {

    }

  return (
    <tr className="hover:bg-gray-50">
        <td className="px-4 py-3">{prod.nombre}</td>
        <td className="px-4 py-3">{prod.categoria}</td>
        <td className="px-4 py-3">${prod.precio}</td>
        <td className="px-4 py-3 flex gap-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Ver</button>
            <button onClick={handleEditar} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">Editar</button>
            <button onClick={() => handleBorrar(prod.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Borrar</button>
        </td>
    </tr>
  )
}

export default ItemProducto