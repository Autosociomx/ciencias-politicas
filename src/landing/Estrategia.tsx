import { ESTRATEGIA_IA, FIGURA } from '../campana/plataforma';

export default function Estrategia() {
  return (
    <section className="sec sec-crema" id="estrategia">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--guinda)' }}>
          Estrategia · inteligencia artificial
        </span>
        <h2 className="ttl rv d1">
          La máquina cumple.<br />
          <em style={{ color: 'var(--guinda)' }}>No posa.</em>
        </h2>
        <p className="bajada rv d2">
          {FIGURA.lema} {FIGURA.llamado} La inteligencia artificial no se usa para fabricar una imagen de tecnología.
          Se usa para que la palabra de {FIGURA.nombre} se pueda escuchar, ordenar y comprobar.
        </p>
        <div className="pil-grid rv d3">
          {ESTRATEGIA_IA.map((item, i) => (
            <article className="pil q1" key={item.titulo}>
              <span className="pil-tag">0{i + 1}</span>
              <div className="pil-t">{item.titulo}</div>
              <p className="pil-d">{item.texto}</p>
            </article>
          ))}
          <article className="pil q4">
            <span className="pil-tag">Método</span>
            <div className="pil-t">Después, la autopista</div>
            <p className="pil-d">
              {FIGURA.metodo} Eso explica el gobierno. No explica a la candidata.
              El Orbe guía el trámite. El rostro de la campaña sigue siendo palabra de mujer.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
