import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function CartSummary() {
  const { total } = useCart()

  return (
    <>
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
    </>
  )
}

export default CartSummary
