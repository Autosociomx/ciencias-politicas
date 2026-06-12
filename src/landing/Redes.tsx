const REDES = [
  { cls: 'r1', ic: '📘', nombre: 'Facebook', handle: '@GeraldinePonceMexico', desc: 'Noticias y eventos', href: 'https://facebook.com/GeraldinePonceMexico' },
  { cls: 'r2', ic: '📸', nombre: 'Instagram', handle: '@geraldineponcem · 519K', desc: 'El día a día del gobierno', href: 'https://instagram.com/geraldineponcem' },
  { cls: 'r3', ic: '🎵', nombre: 'TikTok', handle: '@geraldineponcem', desc: 'Recorridos en vivo', href: 'https://tiktok.com/@geraldineponcem' },
  { cls: 'r4', ic: '𝕏', nombre: 'X / Twitter', handle: '@GeraldinePonceM', desc: 'Debate político', href: 'https://x.com/GeraldinePonceM' },
  { cls: 'r5', ic: '▶️', nombre: 'YouTube', handle: '@geraldine-ponce-m', desc: 'Propuestas a detalle', href: 'https://youtube.com/@geraldine-ponce-m' },
  { cls: 'r6', ic: '🧵', nombre: 'Threads', handle: '@geraldineponcem', desc: 'Comunidad y reflexiones', href: 'https://threads.net/@geraldineponcem' },
];

export default function Redes() {
  return (
    <section className="sec sec-blanco" id="redes">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--morado)' }}>Canales oficiales</span>
        <h2 className="ttl rv d1">
          Sigue el <em style={{ color: 'var(--morado)' }}>movimiento.</em>
        </h2>
        <p className="bajada rv d2">519 mil seguidores en Instagram. La voz más fuerte de Tepic.</p>
        <div className="redes-grid rv d3">
          {REDES.map((r) => (
            <a key={r.nombre} className={`red ${r.cls}`} href={r.href} target="_blank" rel="noopener">
              <span className="red-ic">{r.ic}</span>
              <div>
                <span className="red-n">{r.nombre}</span>
                <span className="red-h">{r.handle}</span>
                <span className="red-u">{r.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
