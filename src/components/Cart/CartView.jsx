import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import CartList from './CartList'
import CartSummary from './CartSummary'
import './Cart.css'

function CartView() {
  const { items, vaciarCarrito } = useCart()

  if (items.length === 0) {
    return (
      <div className="estado">
        <span className="estado-icono" aria-hidden="true">
          🛒
        </span>
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos para empezar a armar tu pedido.</p>
        <Link className="boton boton-primario" to="/productos">
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <section className="carrito">
      <div className="seccion-encabezado">
        <div>
          <p className="etiqueta">Tu compra</p>
          <h2>Carrito de compras</h2>
        </div>
        <button type="button" className="boton-texto" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>

      <CartList />
      <CartSummary />
    </section>
  )
}

export default CartView
