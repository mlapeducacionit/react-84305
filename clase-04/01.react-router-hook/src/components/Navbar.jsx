
import { NavLink } from 'react-router'


/* 
isActive
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-600 transition-colors';
*/
//const cambioActivo = (props) => (props.isActive ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600 transition-colors')
const cambioActivo = ({isActive}) => (isActive ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600 transition-colors')

const Navbar = () => {
  return (
     <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <NavLink to="/" className={cambioActivo}>Inicio</NavLink>
            <NavLink to="/productos" className={cambioActivo}>Productos</NavLink>
            <NavLink to="/nosotros" className={cambioActivo}>Nosotros</NavLink>
            <NavLink to="/contacto" className={cambioActivo}>Contacto</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar