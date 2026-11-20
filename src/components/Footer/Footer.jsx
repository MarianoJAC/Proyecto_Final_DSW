import Directorio from '../Directorio/Directorio'
import { isFirebaseConfigured } from '../../lib/firebase'

function Footer() {
  return (
    <footer className="pie-pagina">
      <Directorio />
      <div className="pie-creditos">
        <p>© 2026 Cirillo - Aguayo - Pozo · Desarrollo de Sistemas Web</p>
        <p className="pie-modo">
          {isFirebaseConfigured
            ? 'Conectado a Firebase Firestore'
            : 'Modo demostración: datos y pedidos locales'}
        </p>
      </div>
    </footer>
  )
}

export default Footer
