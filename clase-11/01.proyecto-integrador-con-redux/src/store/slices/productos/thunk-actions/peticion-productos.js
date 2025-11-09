import { setProductos } from ".."
import { handleHttp } from "../../../../utils/handle-http"

// ! Creamos la acción Thunk (Middleware) | Acción asincronica.
//                                              ⬇️ el middleware thunk me entrega el dispatch
export const peticionProductos = () => async (dispatch) => {
    const url = import.meta.env.VITE_BACKEND
    console.log(url)

    try {
        const productos = await handleHttp(url) // hace petición
        // ----------- <--- la asincronica está resuelta
        // una vez solucionada la asicronia tengo que hacer el dispatch de la acción sincronica (Del reducer dentro del store)
        dispatch(setProductos(productos))
    } catch (error) {
        throw error   
    }
}


/* export const peticionProductos = function() {
    return function() {

    }
} */