// Slices productos

import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice(
    {
        name: 'productos',
        initialState: {
            productos: null,
            productoAEditar: null
        },
        reducers: { /* <----------------------- reducers sincronicos */
            setProductos: (state, action) => { // action = { type, payload}
                state.productos = action.payload
            },
            handleAgregarProducto: (state, action) => { // action = { type, payload }
                state.productos.push(action.payload)
                //state.productos = [...state.productos, action.payload]
            },
            handleBorrarProducto: (state, action) => { // action = { type, payload }
                state.productos = state.productos.filter( producto => producto.id !== action.payload.id )
            },
            handleEditarProducto: (state, action) => {
                state.productos = state.productos.map( producto => {
                    if ( producto.id === action.payload.id ) {
                        return action.payload
                    }
                    return producto
                })
            },
            setProductoAEditar: (state, action) => { // action = { type, payload }
                state.productoAEditar = action.payload
            }
        }
    }
)

// ! Exporto las acciones sincronicas
export const { 
    setProductos, 
    handleAgregarProducto, 
    handleEditarProducto, 
    handleBorrarProducto, 
    setProductoAEditar
} = productosSlice.actions

// ! Exportar el reducer
export default productosSlice.reducer