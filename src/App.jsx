
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Productos from './Productos'
import Contacto from './Contacto'

function traducirNombre(nombre) {
  const nombres = {
    'Essence Mascara Lash Princess': 'Máscara de pestañas',
    'Eyeshadow Palette with Mirror': 'Paleta de sombras',
    'Powder Canister': 'Polvo compacto',
    'Red Lipstick': 'Labial rojo',
    'Red Nail Polish': 'Esmalte rojo'
  }

  return nombres[nombre] || nombre
}

function Inicio() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/beauty')
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error('Error al cargar')
        }
        return respuesta.json()
      })
      .then(datos => {
        setProductos(datos.products)
        setCargando(false)
      })
      .catch(() => {
        setError(true)
        setCargando(false)
      })
  }, [])

  return (
    <>
      <section className="portada">
        <div className="texto-portada">
          <p className="subtitulo">TU RUTINA, TU MOMENTO</p>
          <h2>Descubrí el secreto de una piel radiante</h2>
          <p>
            Encontrá productos para cuidar tu piel
            y resaltar tu belleza natural.
          </p>

          <Link to="/productos">
            <button>Descubrir productos</button>
          </Link>
        </div>
      </section>

      <section className="productos">
        <h2>Nuestros productos</h2>
        <p>Descubrí nuestra selección de belleza</p>

        {cargando && <p>Cargando productos...</p>}
        {error && <p>No se pudieron cargar los productos.</p>}

        <div className="contenedor-productos">
          {productos.map(producto => (
            <article className="tarjeta" key={producto.id}>
              <img
                src={producto.thumbnail}
                alt={traducirNombre(producto.title)}
              />

              <h3>{traducirNombre(producto.title)}</h3>
              <p>{producto.description}</p>
              <strong>${producto.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="pagina">

        <header className="encabezado">
          <h1>Glow Skin</h1>

          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer>
          <p>© 2026 Glow Skin - Belleza y cuidado de la piel</p>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
