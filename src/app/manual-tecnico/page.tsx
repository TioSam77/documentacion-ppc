'use client';
import NavbarReusable from '../components/NavbarReusable';

export default function ManualTecnico() {
  return (
    <>
      {/* Navbar reutilizable */}
      <div className="bg-dark w-100 px-4">
        <NavbarReusable />
      </div>

      {/* Contenido principal */}
      <main className="container mt-4 mb-5" style={{ backgroundColor: 'white' }}>
        <section className="mb-4">
          <h1 className="text-center fw-bold text-primary mb-4">
            Manual Técnico
          </h1>
          <p
            style={{
              color: '#333',
              fontSize: '1.1rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Aquí encontrarás documentación técnica avanzada, procedimientos detallados y herramientas para desarrolladores.
          </p>
        </section>
      </main>
    </>
  );
}
