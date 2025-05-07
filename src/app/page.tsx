'use client';

import QuestionAccordion from './components/QuestionAccordion';
import TabbedTopic from './components/TabbedTopic';
import NavbarReusable from './components/NavbarReusable';

export default function Home() {
  return (
    <>
      {/* Navbar fuera del container */}
      <div className="bg-dark w-100 px-4">
        <NavbarReusable />
      </div>

      {/* Contenido principal */}
      <main className="container mt-4 mb-5" style={{ backgroundColor: 'white' }}>
        <section className="mb-4">
          <h1 className="text-center fw-bold text-primary mb-4">
            Manual General
          </h1>
          <p style={{ color: '#333', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem' }}>
            Este manual está dirigido a estudiantes de la FES Acatlán que cursan la materia.
            Aquí encontrarás preguntas frecuentes con respuestas estructuradas para facilitar
            la comprensión de los temas. El objetivo es brindar claridad con ejemplos visuales y texto conciso.
          </p>
        </section>

        <QuestionAccordion
          question="¿Qué es una IA?"
          summary="La inteligencia artificial permite que los sistemas ejecuten tareas complejas como si tuvieran inteligencia humana..."
          fullText="La inteligencia artificial (IA) es un campo..."
          imageSrc="/images/ia-ejemplo.png"
          imageAlt="Ejemplo de IA"
        />

        <QuestionAccordion
          question="¿Cómo aprenden las IAs?"
          summary="Las IAs aprenden mediante algoritmos que analizan grandes volúmenes de datos..."
          fullText="Las IAs aprenden a partir de grandes cantidades de datos..."
          imageSrc="/images/aprendizaje-ia.png"
          imageAlt="Aprendizaje automático"
        />

        <section className="mt-5">
          <TabbedTopic />
        </section>
      </main>
    </>
  );
}
