import { useCart } from '../../context/useCart'
import CartItem from './CartItem'

function CartList() {
  const { items } = useCart()

  return (
    <ul className="carrito-lista">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
