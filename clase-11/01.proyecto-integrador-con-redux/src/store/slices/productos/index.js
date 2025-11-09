// Slices productos

import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice(
    {
        name: 'productos',
        initialState: {
            listadoProductos: null,
            productoAEditar: null
        }
    }
)