function TarjetaContacto({ persona }) {
  return (
    <article className="tarjeta-contacto">
      <span className="tarjeta-contacto-inicial" aria-hidden="true">
        {persona.nombre.charAt(0)}
      </span>
      <h3>{persona.nombre}</h3>
      <p className="tarjeta-contacto-puesto">{persona.puesto}</p>
      <a href={`mailto:${persona.email}`}>{persona.email}</a>
    </article>
  )
}

export default TarjetaContacto
