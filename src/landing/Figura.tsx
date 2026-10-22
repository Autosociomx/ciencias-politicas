import { AVISO, FIGURA } from '../campana/plataforma';


export default function Figura() {
  return (
    <section className="sec sec-blanco" id="figura">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--guinda)' }}>
          {FIGURA.partido} · campaña 2027
        </span>
        <h2 className="ttl rv d1">
          {FIGURA.lema}<br />
          <em style={{ color: 'var(--guinda)' }}>{FIGURA.llamado}</em>
        </h2>
        <div className="logros-layout">
          <article className="lg rv d1" style={{ borderTop: '5px solid var(--guinda)' }}>
            <span className="lg-pill">Candidata de esta plataforma · no es cargo actual</span>
            <div className="lg-t" style={{ fontSize: '1.8rem', marginTop: '.8rem' }}>{FIGURA.nombreCompleto}</div>
            <p className="lg-d">{FIGURA.cargo}. {FIGURA.eleccion}.</p>
            <p className="lg-d">
              En 2024 contendió por Morena a la presidencia de Jala. Esta página no inventa
              una foto, un cargo ni un registro de 2027. La fuerza está en que la palabra
              se puede abrir: ley, prototipo y folio.
            </p>
          </article>
          <div className="lg-cards">
            <article className="lg rv d2">
              <div className="lg-h">
                <span className="lg-ic">🗣️</span>
                <div className="lg-t">El rostro no es la máquina</div>
              </div>
              <p className="lg-d">{FIGURA.lema} {FIGURA.llamado} La tecnología no se pone delante de la candidata.</p>
            </article>
            <article className="lg rv d3">
              <div className="lg-h">
                <span className="lg-ic">📍</span>
                <div className="lg-t">Por qué Jala</div>
              </div>
              <p className="lg-d">
                Jala tiene cerca de 19,300 habitantes y 46 localidades, según el Censo 2020.
                Es lo bastante concreto para cumplir una palabra y lo bastante visible —el elote,
                el Ceboruco— para enseñarla.
              </p>
            </article>
            <article className="lg rv d4">
              <div className="lg-h">
                <span className="lg-ic">🚫</span>
                <div className="lg-t">Lo que esta campaña no dice</div>
              </div>
              <p className="lg-d">
                No dice que ya ganó en 2024. No dice que el Ayuntamiento ya opera esto.
                No dice que la Presidenta respalda esta candidatura. Dice por qué partido va
                y con qué ley nacional quiere cumplir.
              </p>
            </article>
          </div>
        </div>
        <p className="bajada rv" style={{ marginTop: '1.4rem', fontSize: '.78rem' }}>{AVISO}</p>
      </div>
    </section>
  );
}
