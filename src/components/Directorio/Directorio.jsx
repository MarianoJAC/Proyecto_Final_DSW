import { useEffect, useState } from 'react'
import TarjetaContacto from '../TarjetaContacto/TarjetaContacto'

function Directorio() {
  const [personas, setPersonas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarEquipo = async () => {
      try {
        const respuesta = await fetch('/data/equipo.json')
        if (!respuesta.ok) {
          throw new Error(`No se pudo cargar el equipo (HTTP ${respuesta.status})`)
        }
        const datos = await respuesta.json()
        if (!Array.isArray(datos)) {
          throw new Error('Formato de datos inesperado')
        }
        setPersonas(datos)
      } catch (errorCarga) {
        setError(errorCarga.message)
      } finally {
        setCargando(false)
      }
    }

    cargarEquipo()
  }, [])

  return (
    <section className="directorio" aria-labelledby="directorio-titulo">
      <div className="directorio-encabezado">
        <p className="directorio-etiqueta">Nuestro equipo</p>
        <h2 id="directorio-titulo">Quiénes hicimos este proyecto</h2>
      </div>

      {cargando && <p className="directorio-estado">Cargando equipo...</p>}
      {error && <p className="directorio-error">{error}</p>}

      {!cargando && !error && (
        <div className="directorio-grilla">
          {personas.map((persona) => (
            <TarjetaContacto key={persona.id} persona={persona} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Directorio
