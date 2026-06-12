import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-reportes')!;

const CATEGORIAS = [
  { ic: '🕳️', nombre: 'Bache en calle', area: 'Vialidad', prioridad: 'Alta' },
  { ic: '💡', nombre: 'Alumbrado roto', area: 'Alumbrado', prioridad: 'Media' },
  { ic: '🗑️', nombre: 'Basura acumulada', area: 'Aseo', prioridad: 'Media' },
  { ic: '🌳', nombre: 'Árbol caído', area: 'Parques', prioridad: 'Urgente' },
  { ic: '💧', nombre: 'Fuga de agua', area: 'Agua y Drenaje', prioridad: 'Urgente' },
  { ic: '📋', nombre: 'Otro servicio', area: 'General', prioridad: 'Baja' },
];

export default function Reportes({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Flujo ciudadano via WhatsApp
      </h2>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
        {['📸 Foto del problema', '→ IA clasifica', '→ Asigna área', '→ Folio al ciudadano', '→ Seguimiento hasta cierre'].map((step, i) => (
          <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', fontWeight: 600, color: i === 0 ? 'var(--blanco)' : 'var(--tinta)', background: i === 0 ? 'var(--tinta)' : 'rgba(21,8,0,.07)', padding: '.3rem .7rem', borderRadius: '2rem', whiteSpace: 'nowrap' }}>
            {step}
          </span>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Categorías IA
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '.7rem', marginBottom: '1.5rem' }}>
        {CATEGORIAS.map((c) => (
          <div key={c.nombre} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '.9rem', padding: '.9rem 1rem' }}>
            <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '.4rem' }}>{c.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.8rem', color: 'var(--tinta)', marginBottom: '.2rem' }}>{c.nombre}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.54rem', color: 'var(--gris)' }}>Área: {c.area}</p>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: c.prioridad === 'Urgente' ? 'rgba(244,67,54,.12)' : c.prioridad === 'Alta' ? 'rgba(255,179,0,.15)' : 'rgba(0,0,0,.06)', color: c.prioridad === 'Urgente' ? 'var(--coral)' : c.prioridad === 'Alta' ? '#b45309' : 'var(--gris)', padding: '.15rem .5rem', borderRadius: '2rem', marginTop: '.4rem', display: 'inline-block' }}>
              {c.prioridad}
            </span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--solar)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📱</span>
        <div>
          <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: 'var(--tinta)', lineHeight: 1.4, marginBottom: '.4rem' }}>
            "El ciudadano ve cómo se resuelve su reporte. El gobierno sabe cuántos y en cuánto tiempo. Los datos hablan solos."
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'rgba(21,8,0,.5)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Servicios públicos con trazabilidad · Plan Operativo ConnectX 2026
          </p>
        </div>
      </div>
    </ModuloShell>
  );
}
