import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo o nombre */}
                    <div className="text-2xl font-bold text-blue-600">MiTienda</div>

                    {/* Links */}
                    <div className="flex space-x-6">
                        {[
                            { to: "/", label: "Inicio" },
                            { to: "/productos", label: "Productos" },
                            { to: "/nosotros", label: "Nosotros" },
                            { to: "/contacto", label: "Contacto" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive ? "border-b-2 border-blue-600 pb-1" : ""
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar