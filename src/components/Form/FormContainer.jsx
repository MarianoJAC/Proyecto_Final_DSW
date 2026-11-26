import { useState } from 'react'
import { useCart } from '../../context/useCart'
import { crearPedido } from '../../services/orders'
import FormUI from './FormUI'
import { validateForm } from './validateForm'

function FormContainer() {
  const { items, total, vaciarCarrito } = useCart()
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState(null)
  const [confirmacion, setConfirmacion] = useState(null)

  const handleChange = (evento) => {
    const { name, value } = evento.target
    setFormData((datos) => ({ ...datos, [name]: value }))
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault()

    const errores = validateForm({ ...formData, items })
    setErrors(errores)
    if (Object.keys(errores).length > 0) return

    try {
      setEnviando(true)
      setErrorEnvio(null)
      const pedido = await crearPedido({
        cliente: {
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
        },
        items,
        total,
        mensaje: formData.mensaje.trim(),
      })
      setConfirmacion(pedido)
      vaciarCarrito()
    } catch (error) {
      setErrorEnvio(error.message || 'No se pudo enviar el pedido')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="pedido-seccion">
      <div className="seccion-encabezado">
        <div>
          <p className="etiqueta">Finalizar compra</p>
          <h2>Hacer pedido</h2>
        </div>
      </div>

      {errorEnvio && (
        <p className="estado estado-error" role="alert">
          {errorEnvio}
        </p>
      )}

      <FormUI
        formData={formData}
        errors={errors}
        enviando={enviando}
        confirmacion={confirmacion}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  )
}

export default FormContainer
