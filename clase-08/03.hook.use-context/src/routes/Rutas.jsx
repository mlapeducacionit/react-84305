import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
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
                element: <Productos /> 
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