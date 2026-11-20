import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <header className="cabecera">
      <div className="cabecera-superior">
        <Link className="marca" to="/">
          <span className="marca-icono" aria-hidden="true">
            🛍️
          </span>
          <span>
            Tienda<span className="marca-destacado"> proyecto final</span>
          </span>
        </Link>
        <Nav />
      </div>
      <div className="hero">
        <p className="hero-etiqueta">React + Firebase</p>
        <h1>Objetos para todos los días</h1>
        <p className="hero-bajada">
          Elegí tus favoritos, armá tu carrito y hacé tu pedido. Simple y rápido.
        </p>
        <Link className="boton boton-primario hero-accion" to="/productos">
          Ver productos
        </Link>
      </div>
    </header>
  )
}

export default Header
