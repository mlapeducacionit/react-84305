import ItemProducto from "./ItemProducto"

const TablaProductos = ({ productos }) => {

    console.log(productos) /* un array de productos de React (reactivo) */
    
  return (
    <>
        <h2>Listado de productos</h2>
        <div className="overflow-x-auto w-full">
            <table>

                <thead className="min-w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg shadow-md">
                    <tr className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
                        <th className="px-4 py-3 border-b">Nombre del producto</th>
                        <th className="px-4 py-3 border-b">Categoría</th>
                        <th className="px-4 py-3 border-b">Precio</th>
                        <th className="px-4 py-3 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    
                    {
                        productos.map((prod) => (
                            <ItemProducto prod={prod} key={prod.id} />
                        ))
                    }

                </tbody>

            </table>
        </div>
    
    </>
    
  )
}

export default TablaProductos