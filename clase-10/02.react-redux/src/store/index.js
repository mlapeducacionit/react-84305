import { configureStore } from "@reduxjs/toolkit";
// Configuración Store (Jamón)
import contador from './slices/contador/'

const configuracion = configureStore(
    {
        // Slices que tiene el store
        reducer: {
            contador // sliceContador
        }
    }
)

export default configuracion