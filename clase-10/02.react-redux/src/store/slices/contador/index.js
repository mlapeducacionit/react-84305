// Slice Contador (feta de jamón)
import { createSlice } from "@reduxjs/toolkit";


export const contadorSlice = createSlice(
    {
        name: 'contador', /* nombre del slice */
        initialState: {
            contador: 10            
        },
        reducers: {
            incrementar: estado => {
                estado.contador += 1
            },
            decrementar: estado => {
                estado.contador -= 1
            },
            incrementarPorValor: (estado, accion) => { // accion: { type, paylaod }
                estado.contador += accion.payload
            }
        }
    }
)
console.log(contadorSlice) // objeto creado por createSlice
// Para crear las acciones, hacemos la exportación accediendo a lo que crea redux toolkit.
export const { incrementar, decrementar, incrementarPorValor } = contadorSlice.actions
export default contadorSlice.reducer // Exporto el reducer con funcionalidad principal del modulo