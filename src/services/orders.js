import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'

const CLAVE_DEMO = 'pedidos-demo'

export async function crearPedido(pedido) {
  if (!isFirebaseConfigured) {
    const pedidos = JSON.parse(localStorage.getItem(CLAVE_DEMO) || '[]')
    const registro = {
      ...pedido,
      id: `demo-${Date.now()}`,
      fecha: new Date().toISOString(),
      estado: 'pendiente',
    }
    localStorage.setItem(CLAVE_DEMO, JSON.stringify([...pedidos, registro]))
    return { ...registro, demo: true }
  }

  const referencia = await addDoc(collection(db, 'orders'), {
    cliente: pedido.cliente,
    items: pedido.items,
    total: pedido.total,
    mensaje: pedido.mensaje,
    estado: 'pendiente',
    fecha: serverTimestamp(),
  })

  return { id: referencia.id, ...pedido }
}
