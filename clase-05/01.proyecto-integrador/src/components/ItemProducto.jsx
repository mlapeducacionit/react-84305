
const ItemProducto = ({prod, handleBorrarProducto}) => { // props = { prod }
    console.log(prod) // { nombre, categoria, precio }

    const handleBorrar = (id) => {
      //console.log(id)
      handleBorrarProducto(id)
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