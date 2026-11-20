import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/useCart'

function Nav() {
  const { totalUnidades } = useCart()

  return (
    <nav className="navegacion" aria-label="Navegación principal">
      <NavLink to="/" end>
        Inicio
      </NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/carrito" className="enlace-carrito">
        Carrito
        {totalUnidades > 0 && (
          <span className="contador-carrito">{totalUnidades}</span>
        )}
      </NavLink>
      <NavLink to="/pedido">Hacer pedido</NavLink>
    </nav>
  )
}

export default Nav
