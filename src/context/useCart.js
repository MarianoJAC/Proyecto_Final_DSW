import { useContext } from 'react'
import { CartContext } from './cartContext'

export function useCart() {
  const contexto = useContext(CartContext)
  if (!contexto) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  return contexto
}
