import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function Item({ producto }) {
  const { agregarProducto } = useCart()
  const [esFavorito, setEsFavorito] = useState(false)

  return (
    <article className="producto">
      <div className="producto-imagen" aria-hidden="true">
        {producto.icono}
      </div>
      <div className="producto-cuerpo">
        <p className="producto-categoria">{producto.categoria}</p>
        <h3>
          <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
        </h3>
        <p className="producto-descripcion">{producto.descripcion}</p>
        <p className="producto-precio">{formatearPrecio(producto.precio)}</p>
        <div className="producto-acciones">
          <button
            type="button"
            className="boton boton-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar al carrito
          </button>
          <button
            type="button"
            className={`boton-estrella ${esFavorito ? 'activa' : ''}`}
            onClick={() => setEsFavorito((valor) => !valor)}
            aria-pressed={esFavorito}
            aria-label={
              esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito'
            }
            title={esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito'}
          >
            {esFavorito ? '★' : '☆'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
