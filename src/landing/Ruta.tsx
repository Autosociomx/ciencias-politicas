const CIEN_DIAS = [
  { mes: 'Mes 1', ic: '🔍', t: 'Triage Digital', d: 'Lanzamiento en cabeceras municipales. Diagnóstico tecnológico y mapeo de brechas digitales en los 20 municipios.' },
  { mes: 'Mes 2', ic: '🛰️', t: 'Censo Agro-Tecnológico', d: 'AgroVision escanea la superficie agrícola de Nayarit con imágenes Sentinel-2 y drones de detección de plagas.' },
  { mes: 'Mes 3', ic: '🏗️', t: 'Portal Obra Pública Cloud', d: 'Apertura pública del sistema estatal. Cada peso de obra, trazable en tiempo real para todos los nayaritas.' },
  { mes: 'Mes 4', ic: '🌐', t: 'Expansión 20 Municipios', d: 'El modelo ConnectX llega a todo el estado. Ventanilla Única, NayaritID y reportes IA en cada cabecera.' },
];

export default function Ruta() {
  return (
    <section className="sec sec-crema" id="ruta">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--verde)' }}>De Tepic al Estado</span>
        <h2 className="ttl rv d1">
          Del municipio<br />
          <em style={{ color: 'var(--verde)' }}>a los 20 municipios.</em>
        </h2>
        <p className="bajada rv d2">
          El modelo Tepic es el molde para Nayarit. Misma estrategia, mayor escala.
        </p>
        <div className="timeline rv d3">
          <div className="tl ahora">
            <span className="tl-bd">Ahora · En curso</span>
            <div className="tl-t">Tepic Digital</div>
            <p className="tl-d">Obras trazables, pagos digitales, IA ciudadana y TEPICTU Salud para 425,924 tepicenses.</p>
          </div>
          <div className="tl">
            <span className="tl-bd">2026</span>
            <div className="tl-t">250 Colonias</div>
            <p className="tl-d">NayaritID: identidad digital única. Promotores digitales en cada colonia.</p>
          </div>
          <div className="tl">
            <span className="tl-bd">2027 · Campaña</span>
            <div className="tl-t">El Debate</div>
            <p className="tl-d">Datos reales contra promesas vacías. El argumento que nadie puede refutar.</p>
          </div>
          <div className="tl">
            <span className="tl-bd">2027–2033</span>
            <div className="tl-t">Nayarit Digital</div>
            <p className="tl-d">Los 20 municipios con el modelo Tepic. El primer gobierno estatal digital de México.</p>
          </div>
        </div>

        {/* Hoja de Ruta 100 Días */}
        <div className="rv d4" style={{ marginTop: '4rem' }}>
          <span className="tag" style={{ background: 'var(--magenta)' }}>Hoja de Ruta · Primeros 100 Días de Gobierno</span>
          <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontSize: 'clamp(.9rem, 1.8vw, 1.05rem)', color: 'var(--gris)', margin: '1rem 0 1.8rem', lineHeight: 1.5 }}>
            "Nayarit Inteligente · Estrategia Digital 2027–2033" — del escritorio al campo en 4 meses.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {CIEN_DIAS.map((item, i) => (
              <div key={item.mes} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.3rem 1.2rem', borderTop: '4px solid var(--magenta)', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--magenta)', display: 'block', marginBottom: '.5rem' }}>
                  {item.mes}
                </span>
                <span style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.4rem' }}>{item.ic}</span>
                <div style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 40', fontWeight: 900, fontSize: '.95rem', color: 'var(--tinta)', marginBottom: '.5rem', letterSpacing: '-.01em', paddingRight: '2rem' }}>
                  {item.t}
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '.57rem', color: 'var(--gris)', lineHeight: 1.55 }}>
                  {item.d}
                </p>
                <span style={{ position: 'absolute', bottom: '1rem', right: '1rem', fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 700, color: 'rgba(21,8,0,.18)' }}>
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
