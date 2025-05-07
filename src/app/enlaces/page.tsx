'use client';
import { usePathname } from 'next/navigation';
import NavbarReusable from '../components/NavbarReusable';

export default function Enlaces() {
  const pathname = usePathname();

  return (
    <>
      {/* Navbar Reutilizable */}
      <div className="bg-dark w-100 px-4">
        <NavbarReusable />
        </div>


      {/* Contenido principal */}
      <main className="container mt-4 mb-5" style={{ backgroundColor: 'white' }}>
        <section className="mb-4">
          <h1 className="text-center fw-bold text-primary mb-4">
            Recursos y Enlaces Útiles
          </h1>

          <p
            style={{
              color: '#333',
              fontSize: '1.1rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Aquí encontrarás materiales complementarios, herramientas interactivas,
            documentación externa y videos sugeridos que te ayudarán a reforzar lo visto en el Manual General.
          </p>

          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3 text-primary">Enlaces recomendados</h5>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
                  Documentación de MDN
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  Documentación oficial de React
                </a>
              </li>
              <li>
                <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
                  ChatGPT para dudas técnicas
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
