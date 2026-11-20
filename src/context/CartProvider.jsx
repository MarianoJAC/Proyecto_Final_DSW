import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './cartContext'

const CLAVE_CARRITO = 'carrito-tienda'

function leerCarrito() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_CARRITO) || '[]')
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(leerCarrito)

  useEffect(() => {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items))
  }, [items])

  const agregarProducto = (producto, cantidad = 1) => {
    setItems((actuales) => {
      const existente = actuales.find((item) => item.id === producto.id)
      if (existente) {
        return actuales.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item,
        )
      }
      return [
        ...actuales,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          icono: producto.icono,
          cantidad,
        },
      ]
    })
  }

  const quitarProducto = (id) => {
    setItems((actuales) => actuales.filter((item) => item.id !== id))
  }

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad < 1) {
      quitarProducto(id)
      return
    }
    setItems((actuales) =>
      actuales.map((item) =>
        item.id === id ? { ...item, cantidad } : item,
      ),
    )
  }

  const vaciarCarrito = () => setItems([])

  const totalUnidades = items.reduce((total, item) => total + item.cantidad, 0)
  const total = items.reduce(
    (acumulado, item) => acumulado + item.precio * item.cantidad,
    0,
  )

  const valor = useMemo(
    () => ({
      items,
      totalUnidades,
      total,
      agregarProducto,
      quitarProducto,
      cambiarCantidad,
      vaciarCarrito,
    }),
    [items, totalUnidades, total],
  )

  return (
    <CartContext.Provider value={valor}>{children}</CartContext.Provider>
  )
}
