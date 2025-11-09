// Configuración Store de Redux
import { configureStore } from "@reduxjs/toolkit"
import productosReducer from './slices/productos/'

export default configureStore({
    reducer: {
        productos: productosReducer 
    }
})


