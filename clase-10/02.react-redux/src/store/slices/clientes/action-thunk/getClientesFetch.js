import { setListadoClientes } from ".."

// el dispatch me lo entrega el middleware thunk
export const getClientesFetch = () => async (dispatch) => {
    /* Petición asincrónica */
    const url = 'https://reqres.in/api/users?per_page=12'

    try {
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'reqres-free-v1',
                'content-type': 'application/json'
            }
        }

        const res = await fetch(url, options)
        if( !res.ok ) {
            throw new Error('No se pudo obtener el recurso')
        }

        const clientes = await res.json()
        //console.log(clientes.data)
        // Es sincrónico -> Dispatch de la acción sincrónica
        dispatch(setListadoClientes(clientes.data))

    } catch (error) {
        console.error(error)
    }

}