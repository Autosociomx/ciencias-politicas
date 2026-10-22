const PASOS = [
  { n: '01', t: 'Dices qué necesitas', d: 'Por voz o por texto. Predial, acta, bache, cita, permiso del tutor.' },
  { n: '02', t: 'El Orbe pide solo la llave', d: 'Llave MX del adulto. Si es un niño, la llave del tutor. Nada de repetir papeles en cada dependencia.' },
  { n: '03', t: 'Te acompaña el trámite', d: 'Te dice el siguiente paso y en qué dependencia está, sin que tú armes la ruta.' },
  { n: '04', t: 'Deja un rastro', d: 'Folio, fecha y dependencia. Eso es la transparencia: un dato que otra persona puede comprobar.' },
];

const COLORES = [
  { c: '#d32f2f', n: 'Rojo', d: 'Emergencia. Ir ya a urgencias. El Orbe no trata.' },
  { c: '#f57c00', n: 'Naranja', d: 'Muy urgente. Ficha prioritaria para el médico.' },
  { c: '#fbc02d', n: 'Amarillo', d: 'Urgente. Espera corta y valoración humana.' },
  { c: '#388e3c', n: 'Verde', d: 'Estándar. Cita programada.' },
  { c: '#1976d2', n: 'Azul', d: 'No urgente. Orientación y seguimiento.' },
];

export default function Orbe() {
  return (
    <section className="sec sec-hueso" id="orbe">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--turq)' }}>El Orbe · un solo portal</span>
        <h2 className="ttl rv d1">
          Todo lo municipal,<br />
          <em style={{ color: 'var(--turq)' }}>guiado por una voz.</em>
        </h2>
        <p className="bajada rv d2">
          El impacto no es “más aplicación”. Es que el trámite deja de depender de conocer a alguien en la oficina.
        </p>
        <div className="pil-grid rv d3">
          {PASOS.map((p) => (
            <article className="pil q2" key={p.n}>
              <span className="pil-tag">{p.n}</span>
              <div className="pil-t">{p.t}</div>
              <p className="pil-d">{p.d}</p>
            </article>
          ))}
        </div>

        <div className="logros-layout" style={{ marginTop: '2.4rem' }}>
          <article className="lg rv">
            <div className="lg-h">
              <span className="lg-ic">💚</span>
              <div className="lg-t">Triaje de cinco colores</div>
            </div>
            <p className="lg-d">
              Se acopla al triaje Manchester y habla CIE-10 y CIE-11 para que el médico reciba una ficha ordenada. La persona no recibe un diagnóstico ni una receta.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.45rem', marginTop: '.8rem' }}>
              {COLORES.map((color) => (
                <li key={color.n} style={{ display: 'flex', gap: '.6rem', alignItems: 'baseline' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: color.c, flexShrink: 0 }} />
                  <span style={{ fontSize: '.78rem', color: 'var(--tinta)' }}>
                    <strong>{color.n}.</strong> {color.d}
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <article className="lg rv d2">
            <div className="lg-h">
              <span className="lg-ic">🔑</span>
              <div className="lg-t">Llave MX infantil</div>
            </div>
            <p className="lg-d">
              Referencia de países que ya separan la prueba de edad de la identidad del niño: el Estado certifica, la plataforma solo recibe un permiso. Roblox, TikTok o Facebook no deben pedir los datos del menor para dejarlo entrar.
            </p>
            <p className="lg-d">
              En Jala, la activación sería con el tutor, voluntaria, y revocable. El expediente médico y la verificación de edad no comparten base. Comparten llave, no datos.
            </p>
            <span className="lg-pill">Alineado a SINISI · propuesta, no vigilancia</span>
          </article>
        </div>
      </div>
    </section>
  );
}
