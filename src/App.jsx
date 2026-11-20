import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import FormContainer from './components/Form/FormContainer'
import './App.css'

function PaginaNoEncontrada() {
  return (
    <div className="estado">
      <span className="estado-icono" aria-hidden="true">
        🔎
      </span>
      <h2>Página no encontrada</h2>
      <p>La página que buscás no existe.</p>
      <Link className="boton boton-primario" to="/">
        Volver al inicio
      </Link>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/pedido" element={<FormContainer />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
