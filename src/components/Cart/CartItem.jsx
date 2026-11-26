import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function CartItem({ item }) {
  const { cambiarCantidad, quitarProducto } = useCart()

  return (
    <li className="carrito-item">
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
  )
}

export default CartItem
