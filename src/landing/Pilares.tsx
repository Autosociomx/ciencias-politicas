export default function Pilares() {
  return (
    <section className="sec sec-hueso" id="pilares">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--turq)' }}>
          Propuesta de Gobierno · 2027–2033
        </span>
        <h2 className="ttl rv d1">
          Cuatro pilares.<br />
          <em style={{ color: 'var(--turq)' }}>Un solo Nayarit.</em>
        </h2>
        <p className="bajada rv d2">
          Productos ya construidos en Tepic. Listos el primer día de gobierno.
        </p>
        <div className="pil-grid rv d3">
          <div className="pil q1">
            <span className="pil-tag">Transparencia</span>
            <span className="pil-ic">🏛️</span>
            <div className="pil-t">Gobierno Transparente</div>
            <p className="pil-d">
              Trazabilidad satelital de cada obra estatal. Contratos, avances y auditoría ciudadana en tiempo real.
            </p>
            <p className="pil-q">"Cada peso del erario, visible en el celular de cualquier nayarita."</p>
          </div>
          <div className="pil q2">
            <span className="pil-tag">Campo</span>
            <span className="pil-ic">🌽</span>
            <div className="pil-t">El Sexenio del Campesino</div>
            <p className="pil-d">
              Mapeo satelital de la sierra. IA que recomienda cultivos por suelo, altitud y clima. Sensores IoT en el celular del productor.
            </p>
            <p className="pil-q">"Llego con el mapa ya hecho. Los demás llegan con promesas."</p>
          </div>
          <div className="pil q3">
            <span className="pil-tag">Salud</span>
            <span className="pil-ic">💚</span>
            <div className="pil-t">TEPICTU Salud</div>
            <p className="pil-d">
              Triaje médico con IA en cada clínica estatal. Funciona offline — llega a El Nayar, Huajicori, La Yesca.
            </p>
            <p className="pil-q">"Inteligencia artificial del mar a la sierra. Sin excepción."</p>
          </div>
          <div className="pil q4">
            <span className="pil-tag">PyMEs</span>
            <span className="pil-ic">🛒</span>
            <div className="pil-t">PyMEs Nayaritas</div>
            <p className="pil-d">
              Digitalización para tortillerías, panaderías y restaurantes. Tecnología de grandes empresas, para el pueblo.
            </p>
            <p className="pil-q">"El primer gobierno que digitaliza al pueblo, no a las corporaciones."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
