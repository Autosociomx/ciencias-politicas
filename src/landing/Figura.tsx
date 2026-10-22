import { AVISO, FIGURA } from '../campana/plataforma';

export default function Figura() {
  return (
    <section className="sec sec-blanco" id="figura">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--tinta)' }}>
          Figura política · campaña 2027
        </span>
        <h2 className="ttl rv d1">
          Una persona.<br />
          <em style={{ color: 'var(--magenta)' }}>Un municipio piloto.</em>
        </h2>
        <div className="logros-layout">
          <article className="lg rv d1" style={{ borderTop: '5px solid var(--magenta)' }}>
            <span className="lg-pill">No es cargo actual · es la figura de esta plataforma</span>
            <div className="lg-t" style={{ fontSize: '1.8rem', marginTop: '.8rem' }}>{FIGURA.nombre}</div>
            <p className="lg-d">{FIGURA.cargo}. {FIGURA.eleccion}.</p>
            <p className="lg-d">
              Documenta la evidencia para que un municipio pequeño cumpla la ley nacional
              sin pedirle al ciudadano que entienda las dependencias. La fuerza de la
              figura no es un cargo inventado: es que el prototipo se puede abrir y revisar.
            </p>
          </article>
          <div className="lg-cards">
            <article className="lg rv d2">
              <div className="lg-h">
                <span className="lg-ic">🛣️</span>
                <div className="lg-t">La metáfora que ordena todo</div>
              </div>
              <p className="lg-d">{FIGURA.lema} El Orbe es la voz que va en el camino. No hace falta saber qué dirección “te toca”.</p>
            </article>
            <article className="lg rv d3">
              <div className="lg-h">
                <span className="lg-ic">📍</span>
                <div className="lg-t">Por qué Jala</div>
              </div>
              <p className="lg-d">
                Jala tiene cerca de 19,300 habitantes y 46 localidades, según el Censo 2020.
                Es lo bastante concreto para probar el modelo y lo bastante visible —el elote,
                el Ceboruco, el camino a otros municipios— para enseñarlo.
              </p>
            </article>
            <article className="lg rv d4">
              <div className="lg-h">
                <span className="lg-ic">🚫</span>
                <div className="lg-t">Lo que esta campaña no dice</div>
              </div>
              <p className="lg-d">
                No dice que ya ganó. No dice que el Ayuntamiento ya opera esto. No dice que
                la Presidenta de la República respalda a esta persona. Dice con qué ley
                nacional quiere cumplir.
              </p>
            </article>
          </div>
        </div>
        <p className="bajada rv" style={{ marginTop: '1.4rem', fontSize: '.78rem' }}>{AVISO}</p>
      </div>
    </section>
  );
}
