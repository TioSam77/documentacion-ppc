'use client';

import { useState } from 'react';

type TabKey = 'debil' | 'media' | 'poderosa';

const TabbedTopic = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('debil');

  const content: Record<TabKey, { title: string; text: string }> = {
    debil: {
      title: "IA Débil (Narrow AI)",
      text: "Las IAs débiles están diseñadas para tareas específicas, como asistentes de voz o sistemas de recomendación...",
    },
    media: {
      title: "IA Media (General AI)",
      text: "Las IAs generales buscan imitar la inteligencia humana en diversas tareas...",
    },
    poderosa: {
      title: "IA Fuerte (Superinteligencia)",
      text: "Las IAs poderosas o superinteligencias teóricas superarían a los humanos en todos los ámbitos...",
    },
  };

  return (
    <div className="mt-5">
      <h2 className="text-primary fw-bold mb-4">Tipos de IA's</h2>

      {/* Pestañas */}
      <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link rounded-5 ${activeTab === "debil" ? "active text-white" : "text-white-50"}`}
            onClick={() => setActiveTab("debil")}
          >
            Débil
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link rounded-5 ${activeTab === "media" ? "active text-white" : "text-white-50"}`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link rounded-5 ${activeTab === "poderosa" ? "active text-white" : "text-white-50"}`}
            onClick={() => setActiveTab("poderosa")}
          >
            Poderosa
          </button>
        </li>
      </ul>

      {/* Contenido del Tab */}
      <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{content[activeTab].title}</h5>
          <p className="card-text" style={{ color: '#333' }}>
            {content[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabbedTopic;
