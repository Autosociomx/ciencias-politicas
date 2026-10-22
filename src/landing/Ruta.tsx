import { RUTA } from '../campana/plataforma';

export default function Ruta() {
  return (
    <section className="sec sec-crema" id="ruta">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--verde)' }}>De Jala al estándar</span>
        <h2 className="ttl rv d1">
          Primero un municipio<br />
          <em style={{ color: 'var(--verde)' }}>que se pueda comprobar.</em>
        </h2>
        <p className="bajada rv d2">
          La interoperabilidad no es un discurso. Es no duplicar la identidad ni el expediente en cada ayuntamiento.
        </p>
        <div className="timeline rv d3">
          {RUTA.map((paso) => (
            <article className={paso.ahora ? 'tl ahora' : 'tl'} key={paso.titulo}>
              <span className="tl-bd">{paso.cuando}</span>
              <div className="tl-t">{paso.titulo}</div>
              <p className="tl-d">{paso.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
