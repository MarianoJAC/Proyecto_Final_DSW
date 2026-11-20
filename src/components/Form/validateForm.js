export function validateForm(datos) {
  const errores = {}

  if (!datos.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (datos.nombre.trim().length < 3) {
    errores.nombre = 'El nombre debe tener al menos 3 caracteres'
  }

  if (!datos.email.trim()) {
    errores.email = 'El email es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim())) {
    errores.email = 'Ingresá un email válido'
  }

  if (!datos.items.length) {
    errores.items = 'El carrito está vacío'
  }

  if (datos.mensaje.trim() && datos.mensaje.trim().length < 10) {
    errores.mensaje = 'Si escribís un mensaje, usá al menos 10 caracteres'
  }

  return errores
}
