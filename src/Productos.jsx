
import './App.css'

const productos = [
  {
    id: 1,
    nombre: 'Crema hidratante',
    descripcion: 'Hidratación diaria para una piel suave y luminosa.',
    precio: 12500,
    imagen: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500'
  },
  {
    id: 2,
    nombre: 'Serum facial',
    descripcion: 'Ayuda a mantener la piel hidratada y radiante.',
    precio: 15800,
    imagen: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500'
  },
  {
    id: 3,
    nombre: 'Crema para rostro',
    descripcion: 'Cuidado facial para tu rutina de belleza.',
    precio: 13900,
    imagen: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500'
  },
  {
    id: 4,
    nombre: 'Producto de cuidado facial',
    descripcion: 'Un complemento para cuidar tu piel todos los días.',
    precio: 11000,
    imagen: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500'
  }
]

function Productos() {
  return (
    <section className="productos">
      <h2>Nuestros productos</h2>
      <p>Descubrí nuestros productos de belleza.</p>

      <div className="contenedor-productos">
        {productos.map(producto => (
          <article className="tarjeta" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <strong>
              ${producto.precio.toLocaleString('es-AR')}
            </strong>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Productos
