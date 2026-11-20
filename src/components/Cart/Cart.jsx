import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function Cart() {
  const { items, total, cambiarCantidad, quitarProducto, vaciarCarrito } =
    useCart()

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

      <ul className="carrito-lista">
        {items.map((item) => (
          <li className="carrito-item" key={item.id}>
            <span className="carrito-icono" aria-hidden="true">
              {item.icono}
            </span>
            <div className="carrito-item-nombre">
              <h3>{item.nombre}</h3>
              <p>{formatearPrecio(item.precio)} c/u</p>
            </div>
            <div className="cantidad cantidad-compacta">
              <button
                type="button"
                onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                aria-label={`Quitar una unidad de ${item.nombre}`}
              >
                −
              </button>
              <span aria-live="polite">{item.cantidad}</span>
              <button
                type="button"
                onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                aria-label={`Agregar una unidad de ${item.nombre}`}
              >
                +
              </button>
            </div>
            <p className="carrito-subtotal">
              {formatearPrecio(item.precio * item.cantidad)}
            </p>
            <button
              type="button"
              className="carrito-eliminar"
              onClick={() => quitarProducto(item.id)}
              aria-label={`Eliminar ${item.nombre} del carrito`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="carrito-total">
        <span>Total</span>
        <strong>{formatearPrecio(total)}</strong>
      </div>
      <div className="carrito-acciones">
        <Link className="boton boton-secundario" to="/productos">
          Seguir comprando
        </Link>
        <Link className="boton boton-primario" to="/pedido">
          Continuar con el pedido
        </Link>
      </div>
    </section>
  )
}

export default Cart
