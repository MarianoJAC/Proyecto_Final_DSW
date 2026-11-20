import { useEffect, useMemo, useState } from 'react'
import { getProductos } from '../../services/products'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [categoria, setCategoria] = useState('Todas')

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true)
        const datos = await getProductos()
        setProductos(datos)
        setError(null)
      } catch (errorCarga) {
        setError(errorCarga.message || 'No se pudieron cargar los productos')
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  const categorias = useMemo(
    () => ['Todas', ...new Set(productos.map((producto) => producto.categoria))],
    [productos],
  )

  const productosVisibles =
    categoria === 'Todas'
      ? productos
      : productos.filter((producto) => producto.categoria === categoria)

  if (cargando) {
    return <p className="estado" role="status">Cargando productos...</p>
  }

  if (error) {
    return (
      <p className="estado estado-error" role="alert">
        {error}. Verificá la configuración de Firebase e intentá recargar.
      </p>
    )
  }

  return (
    <section className="seccion-productos">
      <div className="seccion-encabezado">
        <div>
          <p className="etiqueta">Catálogo</p>
          <h2>Nuestros productos</h2>
        </div>
        <p className="seccion-nota">{productosVisibles.length} productos</p>
      </div>

      <div className="filtros" aria-label="Filtrar por categoría">
        {categorias.map((nombre) => (
          <button
            key={nombre}
            type="button"
            className={`filtro ${categoria === nombre ? 'activo' : ''}`}
            onClick={() => setCategoria(nombre)}
            aria-pressed={categoria === nombre}
          >
            {nombre}
          </button>
        ))}
      </div>

      <ItemList productos={productosVisibles} />
    </section>
  )
}

export default ItemListContainer
