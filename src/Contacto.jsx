
import './App.css'

function Contacto() {
  return (
    <section className="contacto">

      <div className="contacto-contenido">

        <div className="contacto-info">
          <h2>Contactanos</h2>

          <p>
            ¿Tenés alguna consulta sobre nuestros productos?
            Escribinos, estamos para ayudarte.
          </p>

          <form
            action="https://formsubmit.co/juanagodoy201@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre completo"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
            />

            <textarea
              name="mensaje"
              placeholder="Escribí tu consulta..."
              rows="5"
              required
            ></textarea>

            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje de Glow Skin"
            />

            <button type="submit">
              Enviar mensaje
            </button>
          </form>
        </div>

        <div className="mapa">
          <h3>Encontranos</h3>

          <iframe
            title="Mapa de Buenos Aires"
            src="https://www.google.com/maps?q=Buenos+Aires,+Argentina&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Contacto
