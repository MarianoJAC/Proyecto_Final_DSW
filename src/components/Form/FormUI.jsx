import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatearPrecio } from '../../data/products'

function FormUI({
  formData,
  errors,
  enviando,
  confirmacion,
  onChange,
  onSubmit,
}) {
  const { items, total } = useCart()

  if (confirmacion) {
    return (
      <div className="confirmacion" role="status">
        <span className="confirmacion-icono" aria-hidden="true">
          ✅
        </span>
        <h3>¡Pedido enviado!</h3>
        <p>
          Gracias, {confirmacion.cliente.nombre}. Registramos tu pedido con el
          número <strong>{confirmacion.id}</strong>.
        </p>
        {confirmacion.demo && (
          <p className="confirmacion-nota">
            Modo demostración: el pedido se guardó en este navegador. Cuando
            configures Firebase se guardará en Firestore.
          </p>
        )}
        <Link className="boton boton-primario" to="/productos">
          Seguir comprando
        </Link>
      </div>
    )
  }

  return (
    <div className="pedido">
      <form className="pedido-formulario" onSubmit={onSubmit} noValidate>
        <h3>Tus datos</h3>
        <div className="campo">
          <label htmlFor="nombre">Nombre y apellido</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ej: Mariano Cirillo"
            value={formData.nombre}
            onChange={onChange}
            aria-invalid={Boolean(errors.nombre)}
          />
          {errors.nombre && <span className="campo-error">{errors.nombre}</span>}
        </div>

        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ej@correo.com"
            value={formData.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="campo-error">{errors.email}</span>}
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje (opcional)</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            placeholder="Aclaraciones sobre tu pedido..."
            value={formData.mensaje}
            onChange={onChange}
            aria-invalid={Boolean(errors.mensaje)}
          />
          {errors.mensaje && (
            <span className="campo-error">{errors.mensaje}</span>
          )}
        </div>

        {errors.items && (
          <p className="campo-error" role="alert">
            {errors.items}{' '}
            <Link to="/productos">Ver productos</Link>
          </p>
        )}

        <button
          className="boton boton-primario boton-ancho"
          type="submit"
          disabled={enviando}
        >
          {enviando ? 'Enviando pedido...' : 'Enviar pedido'}
        </button>
      </form>

      <aside className="pedido-resumen">
        <h3>Resumen del pedido</h3>
        {items.length === 0 ? (
          <p>No agregaste productos todavía.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.icono} {item.nombre} × {item.cantidad}
                </span>
                <span>{formatearPrecio(item.precio * item.cantidad)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="pedido-resumen-total">
          <span>Total</span>
          <strong>{formatearPrecio(total)}</strong>
        </div>
      </aside>
    </div>
  )
}

export default FormUI
