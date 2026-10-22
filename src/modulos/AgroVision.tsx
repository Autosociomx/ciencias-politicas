import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-agrovision')!;

export default function AgroVision({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Tecnología satelital
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '.8rem', marginBottom: '1.5rem' }}>
        {[
          { ic: '🛰️', t: 'Sentinel-2 (ESA)', d: 'Imágenes gratuitas de la Agencia Espacial Europea cada 5 días. Resolución de 10 metros.' },
          { ic: '🌿', t: 'Índice NDVI', d: 'Mide la densidad y salud de la vegetación. Identifica suelo subutilizado con potencial productivo.' },
          { ic: '🌽', t: 'Motor de cultivos', d: 'IA recomienda cultivo óptimo según tipo de suelo + altitud + precipitación histórica de la zona.' },
          { ic: '📱', t: 'Mapa público interactivo', d: 'Ciudadano y productor consultan el estado del suelo de su parcela desde el celular.' },
        ].map((f) => (
          <div key={f.t} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.1rem', borderTop: '4px solid var(--verde)' }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '.5rem' }}>{f.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.82rem', color: 'var(--tinta)', marginBottom: '.3rem' }}>{f.t}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', lineHeight: 1.5 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Cultivos de referencia — municipio de Jala
      </h2>
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {['Maíz de Jala', 'Frijol', 'Caña', 'Aguacate', 'Hortalizas de traspatio'].map((c) => (
          <span key={c} style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.08em', background: 'rgba(0,135,62,.1)', color: 'var(--verde)', padding: '.25rem .7rem', borderRadius: '2rem', border: '1px solid rgba(0,135,62,.2)' }}>
            🌱 {c}
          </span>
        ))}
      </div>

      <div style={{ background: 'var(--verde)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🗺️</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "El mapa se enseña cuando esté hecho. Hasta entonces es una propuesta para el municipio del elote, no una cosecha medida."
        </p>
      </div>
    </ModuloShell>
  );
}
