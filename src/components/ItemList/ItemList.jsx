import Item from '../Item/Item'

function ItemList({ productos }) {
  return (
    <div className="productos-grilla">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList
