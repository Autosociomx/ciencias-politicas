export default function CTA() {
  return (
    <section className="cta wix-bg" id="comunidad">
      <div className="wrap">
        <span className="tag rv">Evidencia abierta</span>
        <h2 className="ttl rv d1">
          Mira el prototipo<br />antes de creer el discurso.
        </h2>
        <p className="bajada rv d2" style={{ maxWidth: 560 }}>
          El canal de WhatsApp se publica cuando exista y sea de esta campaña.
          Hoy la prueba está en el tablero y en el repositorio de gobernanza digital.
        </p>
        <a
          href="https://github.com/Autosociomx/Gobernanza-Digital"
          className="wa rv d3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir Gobernanza Digital
        </a>
        <p className="cta-n rv d4">
          Repositorio de estándar. No pide tu número ni tu CURP.
        </p>
      </div>
    </section>
  );
}
