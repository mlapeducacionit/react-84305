import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import Nosotros from "../pages/Nosotros"

const Rutas = () => {

    const componenteRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio /> 
            },
            {
                path: '/productos',
                element: <Productos /> 
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
            }
        ]
    )

    return componenteRutas // ! <---------------------------------

}

export default Rutas