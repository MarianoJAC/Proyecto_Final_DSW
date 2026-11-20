import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { productosSemilla } from '../data/products'
import { db, isFirebaseConfigured } from '../lib/firebase'

export async function getProductos() {
  if (!isFirebaseConfigured) {
    return productosSemilla
  }

  const instantanea = await getDocs(collection(db, 'products'))
  return instantanea.docs.map((documento) => ({
    id: documento.id,
    ...documento.data(),
  }))
}

export async function getProductoPorId(id) {
  if (!isFirebaseConfigured) {
    return productosSemilla.find((producto) => producto.id === id) ?? null
  }

  const documento = await getDoc(doc(db, 'products', id))
  return documento.exists() ? { id: documento.id, ...documento.data() } : null
}
