import { GUION, MENSAJES } from '../campana/plataforma';

export default function Redes() {
  return (
    <section className="sec sec-blanco" id="redes">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--morado)' }}>Mensaje de campaña</span>
        <h2 className="ttl rv d1">
          Cómo se dice <em style={{ color: 'var(--morado)' }}>en la calle.</em>
        </h2>
        <p className="bajada rv d2">
          Todavía no hay redes oficiales de esta figura. El mensaje sí está cerrado, para no improvisar ni inventar seguidores.
        </p>
        <div className="redes-grid rv d3">
          {MENSAJES.map((m, i) => (
            <article className={`red r${(i % 6) + 1}`} key={m.audiencia}>
              <span className="red-ic">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <span className="red-n">{m.audiencia}</span>
                <span className="red-u">{m.linea}</span>
              </div>
            </article>
          ))}
        </div>
        <ol className="guion rv d4">
          {GUION.map((linea) => (
            <li key={linea}>{linea}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
