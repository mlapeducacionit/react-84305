

// Acción thunk para realizar la petición y crear el producto en el backend.

import { handleAgregarProducto } from ".."
import { handleHttp } from "../../../../utils/handle-http"
//                                     ⬇️ me llega del form
export const createProductoThunk = (producto) => async (dispatch) => {

    const url = import.meta.env.VITE_BACKEND

    try {
        delete producto.id // <--- elimino el id para que el backend lo genere
        // ! 1. hacer la petición
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(producto)
        }
        const productoCreado = await handleHttp(url, options)

        // Acá ya es sincrónico
        // ! 2. llamar acción sincrónica
        dispatch(handleAgregarProducto(productoCreado))
        
    } catch (error) {
        console.error(error)
    }

}