
// ! Acción thunk (middleware) para editar un producto en el backend ( Petición asincronica )

export const editProductoThunk = (productoEditado) => async (dispatch) => {


    try {
        const url = import.meta.env.VITE_BACKEND

        const urlEdicion = `${url}/${productoEditado.id}`

        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productoEditado)
        }

        const productoActualizado = await handleHttp(urlEdicion, options)

        // <---- ya tengo solucionado la asincronia.
        // Disparar la acción sincronica para actualizar el state en el store.
        dispatch(handleEditarProducto(productoActualizado))
        
    } catch (error) {
        throw error
    }

}

