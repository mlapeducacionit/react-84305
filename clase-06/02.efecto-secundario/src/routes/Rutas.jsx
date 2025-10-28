import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import EfectoSecundario from "../pages/EfectoSecundario"

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
                path: '/efecto-secundario',
                element: <EfectoSecundario />
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

  return componenteRutas
   
}

export default Rutas