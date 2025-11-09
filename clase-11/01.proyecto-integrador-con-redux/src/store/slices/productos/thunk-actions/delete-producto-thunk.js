import { handleBorrarProducto } from ".."
import { handleHttp } from "../../../../utils/handle-http"

export const deleteProductoThunk = (id) => async (dispatch) => {

    const url = import.meta.env.VITE_BACKEND
    const urlEliminacionProducto = url + id
    // 1. Petición asincronica
    const options = {
        method: 'DELETE'
    }

   try {
    const productoEliminado = await handleHttp(urlEliminacionProducto, options)
    console.log(productoEliminado) // <---- termino la acción asincronica
    // 2. Llamar a la acción sincronica | handleBorrarProducto()
    dispatch(handleBorrarProducto(productoEliminado))
   } catch (error) {
        throw error
   }

}
