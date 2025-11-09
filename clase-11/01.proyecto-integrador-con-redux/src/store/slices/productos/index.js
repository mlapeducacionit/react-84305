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
            setProductos: () => {

            },
            handleAgregarProducto: () => {

            },
            handleBorrarProducto: () => {

            },
            handleEditarProducto: () => {

            },
            setProductoEditar: () => {

            }
        }
    }
)