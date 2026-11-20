import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function ItemDetail({ producto }) {
  const { agregarProducto } = useCart()
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  const handleAgregar = () => {
    agregarProducto(producto, cantidad)
    setAgregado(true)
  }

  return (
    <article className="detalle">
      <div className="detalle-imagen" aria-hidden="true">
        {producto.icono}
      </div>
      <div className="detalle-info">
        <Link className="volver" to="/productos">
          ← Volver a productos
        </Link>
        <p className="producto-categoria">{producto.categoria}</p>
        <h2>{producto.nombre}</h2>
        <p className="detalle-descripcion">{producto.descripcion}</p>
        <p className="detalle-precio">{formatearPrecio(producto.precio)}</p>
        <p className="detalle-stock">
          {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'Sin stock'}
        </p>

        <div className="cantidad">
          <button
            type="button"
            onClick={() => setCantidad((valor) => Math.max(1, valor - 1))}
            aria-label="Disminuir cantidad"
          >
            −
          </button>
          <span aria-live="polite">{cantidad}</span>
          <button
            type="button"
            onClick={() => setCantidad((valor) => valor + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="boton boton-primario detalle-agregar"
          onClick={handleAgregar}
          disabled={producto.stock === 0}
        >
          Agregar {cantidad} al carrito
        </button>

        {agregado && (
          <p className="detalle-confirmacion" role="status">
            Producto agregado.{' '}
            <Link to="/carrito">Ir al carrito →</Link>
          </p>
        )}
      </div>
    </article>
  )
}

export default ItemDetail
