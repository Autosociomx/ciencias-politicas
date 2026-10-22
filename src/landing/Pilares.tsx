import { PILARES } from '../campana/plataforma';

const CLASE = ['q1', 'q2', 'q3', 'q4'] as const;

export default function Pilares() {
  return (
    <section className="sec sec-hueso" id="pilares">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--turq)' }}>
          Propuesta de gobierno · Jala 2027
        </span>
        <h2 className="ttl rv d1">
          Cuatro pilares.<br />
          <em style={{ color: 'var(--turq)' }}>Un solo Jala.</em>
        </h2>
        <p className="bajada rv d2">
          Nayarit Digital, probado primero en el municipio. No al revés.
        </p>
        <div className="pil-grid rv d3">
          {PILARES.map((p, i) => (
            <article className={`pil ${CLASE[i]}`} key={p.titulo}>
              <span className="pil-tag">{p.tag}</span>
              <span className="pil-ic">{p.icono}</span>
              <div className="pil-t">{p.titulo}</div>
              <p className="pil-d">{p.texto}</p>
              <p className="pil-q">“{p.frase}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
