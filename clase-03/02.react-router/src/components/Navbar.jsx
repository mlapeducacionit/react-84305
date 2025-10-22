import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar