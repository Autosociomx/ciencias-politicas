export default function Logros() {
  return (
    <section className="sec sec-crema" id="logros">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--magenta)' }}>
          Resultados reales · Tepic 2021–2026
        </span>
        <h2 className="ttl rv d1">
          Mientras otros prometen,<br />
          <em style={{ color: 'var(--magenta)' }}>ella ya lo hizo.</em>
        </h2>
        <p className="bajada rv d2">
          Cada logro ya funciona hoy. No es plan de campaña — es historial de gobierno.
        </p>
        <div className="logros-layout">
          <div className="rv d1">
            <div className="lf-wrap">
              <img
                className="lf-img"
                src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=500&h=625&fit=crop&crop=faces&auto=format&q=80"
                alt="Geraldine Ponce en actividad de gobierno"
                loading="lazy"
              />
              <div className="lf-cap">
                <b>2021</b>
                <small>–2026 · En gobierno</small>
              </div>
            </div>
          </div>
          <div className="lg-cards">
            <div className="lg rv d1">
              <div className="lg-h">
                <span className="lg-ic">🏗️</span>
                <div className="lg-t">Obras Públicas Transparentes</div>
              </div>
              <p className="lg-d">
                Cada peso de construcción vial, drenaje y equipamiento, visible en tiempo real desde cualquier celular. Cero opacidad.
              </p>
              <span className="lg-pill">Activo · Dashboard público</span>
            </div>
            <div className="lg rv d2">
              <div className="lg-h">
                <span className="lg-ic">💳</span>
                <div className="lg-t">Predial y Trámites Digitales</div>
              </div>
              <p className="lg-d">
                Pagos municipales sin filas, con recordatorio por WhatsApp. Recaudación incrementada desde el primer mes.
              </p>
              <span className="lg-pill">Activo · Tesorería digital</span>
            </div>
            <div className="lg rv d3">
              <div className="lg-h">
                <span className="lg-ic">📱</span>
                <div className="lg-t">Reportes Ciudadanos con IA</div>
              </div>
              <p className="lg-d">
                Foto por WhatsApp → la IA clasifica y asigna → el vecino recibe seguimiento hasta resolución.
              </p>
              <span className="lg-pill">Activo · Servicios públicos</span>
            </div>
            <div className="lg rv d4">
              <div className="lg-h">
                <span className="lg-ic">💚</span>
                <div className="lg-t">TEPICTU Salud</div>
              </div>
              <p className="lg-d">
                Triaje médico con IA en módulos DIF. Funciona sin internet. Nombre de la palabra original que da origen a "Tepic".
              </p>
              <span className="lg-pill">Activo · Bienestar social</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
