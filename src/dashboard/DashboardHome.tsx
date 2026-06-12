import type { AppView, Modulo } from '../types';
import { MODULOS, ESTADO_LABEL } from '../types';

interface DashboardHomeProps {
  onNavigate: (view: AppView) => void;
}

const FASE_LABEL: Record<1 | 2 | 3, string> = {
  1: 'Fase 1 · Ahora–3 meses',
  2: 'Fase 2 · 3–6 meses',
  3: 'Fase 3 · 6–18 meses',
};

const ESTADO_COLORS: Record<Modulo['estado'], { bg: string; text: string; dot: string }> = {
  'activo':        { bg: '#dcfce7', text: '#166534', dot: '#16a34a' },
  'en-desarrollo': { bg: '#fef9c3', text: '#854d0e', dot: '#d97706' },
  'planeado':      { bg: '#f3e8ff', text: '#6b21a8', dot: '#9333ea' },
};

const KPI_GLOBAL = [
  { label: '% trámites digitalizados', actual: '~15%', meta6m: '50%', color: 'var(--magenta)' },
  { label: 'Colonias con servicios digitales', actual: '0 / 250', meta6m: '3 piloto', color: 'var(--turq)' },
  { label: 'Reportes ciudadanos / mes', actual: 'Manual', meta6m: '500', color: 'var(--solar)' },
  { label: 'Recaudación predial digital', actual: 'Base', meta6m: '+20%', color: '#5DD39E' },
];

export default function DashboardHome({ onNavigate }: DashboardHomeProps) {
  const fases = [1, 2, 3] as const;

  return (
    <div style={{ padding: '2rem', maxWidth: 980, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gris)' }}>
          ConnectX × Ayuntamiento de Tepic
        </span>
        <h1 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: .95, letterSpacing: '-.035em', color: 'var(--tinta)', marginTop: '.4rem', marginBottom: '.5rem' }}>
          Nayarit Digital<br />
          <em style={{ color: 'var(--magenta)', fontStyle: 'italic' }}>Dashboard Central</em>
        </h1>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontSize: '1rem', color: 'var(--gris)' }}>
          Plan de implementación · Junio 2026 · 9 módulos ConnectX
        </p>
      </div>

      {/* KPIs globales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {KPI_GLOBAL.map((k) => (
          <div key={k.label} style={{ background: 'var(--tinta)', borderRadius: '1rem', padding: '1.3rem 1.4rem', borderTop: `5px solid ${k.color}` }}>
            <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '1.8rem', color: k.color, display: 'block', lineHeight: 1, marginBottom: '.3rem' }}>
              {k.actual}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(254,248,238,.5)', display: 'block' }}>
              {k.label}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: k.color, display: 'block', marginTop: '.35rem' }}>
              Meta 6m → {k.meta6m}
            </span>
          </div>
        ))}
      </div>

      {/* Módulos por fase */}
      {fases.map((fase) => {
        const modsFase = MODULOS.filter((m) => m.fase === fase);
        return (
          <div key={fase} style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.05rem', color: 'var(--tinta)', letterSpacing: '-.02em' }}>
                {FASE_LABEL[fase]}
              </h2>
              <div style={{ flex: 1, height: 1, background: 'rgba(21,8,0,.1)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '.9rem' }}>
              {modsFase.map((m) => {
                const ec = ESTADO_COLORS[m.estado];
                return (
                  <button
                    key={m.id}
                    onClick={() => onNavigate(m.id)}
                    style={{
                      background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.12)',
                      borderRadius: '1rem', padding: '1.3rem 1.4rem',
                      textAlign: 'left', cursor: 'pointer',
                      transition: 'transform .2s, box-shadow .2s, border-color .2s',
                      position: 'relative', overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 36px rgba(21,8,0,.12)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = m.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'none';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(21,8,0,.12)';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: m.color }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.8rem' }}>
                      <span style={{ fontSize: '2rem', lineHeight: 1 }}>{m.icono}</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: ec.bg, color: ec.text, padding: '.18rem .55rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: ec.dot, display: 'inline-block', flexShrink: 0 }} />
                        {ESTADO_LABEL[m.estado]}
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.05rem', color: 'var(--tinta)', letterSpacing: '-.01em', marginBottom: '.35rem' }}>
                      {m.nombre}
                    </div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', lineHeight: 1.5, marginBottom: '.8rem' }}>
                      {m.dependencia.split(' — ')[0]}
                    </p>
                    <p style={{ fontSize: '.78rem', color: 'var(--gris)', lineHeight: 1.55 }}>
                      {m.descripcion}
                    </p>
                    <div style={{ marginTop: '.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--gris)' }}>
                        ${m.instalacion.toLocaleString('es-MX')} + ${m.mtoMensual.toLocaleString('es-MX')}/mes
                      </span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: m.color, fontWeight: 600 }}>
                        Ver módulo →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Presupuesto total */}
      <div style={{ background: 'var(--hueso)', border: '2px solid var(--tinta)', borderRadius: '1rem', padding: '1.5rem 1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', boxShadow: '5px 5px 0 var(--solar)' }}>
        <div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gris)', marginBottom: '.3rem' }}>
            Presupuesto total estimado (18 meses)
          </p>
          <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '2rem', color: 'var(--tinta)', lineHeight: 1 }}>
            $187,000 MXN
          </span>
          <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontSize: '.9rem', color: 'var(--gris)', display: 'block', marginTop: '.2rem' }}>
            instalación + $39,000/mes mantenimiento
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--verde)', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            70% elegible
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--gris)', marginTop: '.2rem' }}>
            Fondos federales ATDT · Programa LNETB
          </p>
        </div>
      </div>
    </div>
  );
}
