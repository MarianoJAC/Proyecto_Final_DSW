import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductoPorId } from '../../services/products'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        setCargando(true)
        const dato = await getProductoPorId(id)
        setProducto(dato)
        setError(null)
      } catch (errorCarga) {
        setError(errorCarga.message || 'No se pudo cargar el producto')
      } finally {
        setCargando(false)
      }
    }

    cargarProducto()
  }, [id])

  if (cargando) {
    return <p className="estado" role="status">Cargando producto...</p>
  }

  if (error) {
    return (
      <p className="estado estado-error" role="alert">
        {error}
      </p>
    )
  }

  if (!producto) {
    return (
      <div className="estado">
        <h2>Producto no encontrado</h2>
        <p>Puede que el enlace sea incorrecto o que el producto ya no esté.</p>
      </div>
    )
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer
