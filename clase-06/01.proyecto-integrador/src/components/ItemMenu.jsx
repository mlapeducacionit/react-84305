import { NavLink } from "react-router"

const ItemMenu = ({ link }) => {
  return (
    <li key={link.name}>
        <NavLink
        to={link.href}
        className="relative after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
        >
        {link.name}
        </NavLink>
    </li>
  )
}

export default ItemMenu