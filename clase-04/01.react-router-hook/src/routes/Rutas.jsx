// rafce

import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Producto from "../pages/Producto"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"

const Rutas = () => {
   const componenteRutas = useRoutes(
    [
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/productos',
            element: <Producto />
        },
        {
            path: '/nosotros',
            element: <Nosotros />
        },
        {
            path: '/contacto',
            element: <Contacto />
        },
        {
            path: '*',
            element: <NoEncontrado />
        },
    ]
   )
  return componenteRutas
}

export default Rutas