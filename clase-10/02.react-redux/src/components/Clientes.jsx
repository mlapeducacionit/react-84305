import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClientesFetch } from '../store/slices/clientes/action-thunk/getClientesFetch'

const Clientes = () => {

   /*  const { listadoClientes }  = useSelector(store => {
        console.log(store)
        return store.clientes
    }) */
    const { listadoClientes }  = useSelector(store => store.clientes)
    console.log(listadoClientes)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getClientesFetch()) // Acción thunk
    }, [])
    

  return (
    <>
        {
            listadoClientes && listadoClientes.map((cli) => (
                <p key={cli.id}>{cli.first_name}</p>
            ))
        }
    </>
  )
}

export default Clientes