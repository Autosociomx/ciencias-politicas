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
      </div>
    </section>
  );
}
