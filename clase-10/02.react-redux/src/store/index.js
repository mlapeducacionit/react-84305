import { configureStore } from "@reduxjs/toolkit";
// Configuración Store (Jamón)
import contador from './slices/contador'
import clientes from './slices/clientes'

const configuracion = configureStore(
    {
        // Slices que tiene el store
        reducer: {
            contador, // sliceContador
            clientes // sliceClientes
        }
    }
)

export default configuracion