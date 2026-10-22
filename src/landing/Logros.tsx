import { EVIDENCIA } from '../campana/plataforma';

export default function Logros() {
  return (
    <section className="sec sec-crema" id="logros">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--magenta)' }}>
          Evidencia · no historial de gobierno
        </span>
        <h2 className="ttl rv d1">
          Lo sólido no es el eslogan.<br />
          <em style={{ color: 'var(--magenta)' }}>Es lo que ya se puede revisar.</em>
        </h2>
        <p className="bajada rv d2">
          Nayarit Digital, en el repositorio de gobernanza, ya nombra el Orbe, la llave, el expediente y SOATM.
          Esta campaña no los presenta como servicios abiertos al público.
        </p>
        <div className="lg-cards rv d3">
          {EVIDENCIA.map((item) => (
            <article className="lg" key={item.titulo}>
              <div className="lg-h">
                <span className="lg-ic">{item.icono}</span>
                <div className="lg-t">{item.titulo}</div>
              </div>
              <p className="lg-d">{item.texto}</p>
              <span className="lg-pill">{item.pill}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
