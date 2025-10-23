import ItemProducto from "./ItemProducto"

const TablaProductos = () => {
  return (
    <>
        <h2>Listado de productos</h2>

        <table className="overflox-x-auto">

            <thead className="min-w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg shadow-md">
                <tr className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
                    <th className="px-4 py-3 border-b">Nombre del producto</th>
                    <th className="px-4 py-3 border-b">Categoría</th>
                    <th className="px-4 py-3 border-b">Precio</th>
                    <th className="px-4 py-3 border-b">Acciones</th>
                </tr>
            </thead>
            <tbody className="divide-y divid-gray-200">
                <ItemProducto />
                <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">producto.nombre</td>
                    <td className="px-4 py-3">producto.categoria</td>
                    <td className="px-4 py-3">producto.precio</td>
                    <td className="px-4 py-3 flex gap-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Ver</button>
                        <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">Editar</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Borrar</button>
                    </td>
                </tr>
            </tbody>

        </table>
    
    </>
    
  )
}

export default TablaProductos