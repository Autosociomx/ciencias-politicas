import type { ReactNode } from 'react';
import type { Modulo } from '../types';
import { ESTADO_LABEL } from '../types';

interface ModuloShellProps {
  modulo: Modulo;
  onBack: () => void;
  children?: ReactNode;
}

const FASE_ETIQUETA: Record<1 | 2 | 3, string> = {
  1: 'Fase 1 · 0–3 meses',
  2: 'Fase 2 · 3–6 meses',
  3: 'Fase 3 · 6–18 meses',
};

const ESTADO_COLORS: Record<Modulo['estado'], { bg: string; text: string }> = {
  'activo':        { bg: '#dcfce7', text: '#166534' },
  'en-desarrollo': { bg: '#fef9c3', text: '#854d0e' },
  'planeado':      { bg: '#f3e8ff', text: '#6b21a8' },
};

export default function ModuloShell({ modulo, onBack, children }: ModuloShellProps) {
  const ec = ESTADO_COLORS[modulo.estado];
  const formatMXN = (n: number) => `$${n.toLocaleString('es-MX')} MXN`;

  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      {/* Breadcrumb */}
      <button
        onClick={onBack}
        style={{ fontFamily: 'var(--mono)', fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gris)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}
      >
        ← Dashboard
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '3rem', lineHeight: 1 }}>{modulo.icono}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '.5rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', background: modulo.color, color: '#fff', padding: '.22rem .7rem', borderRadius: '2rem' }}>
              {FASE_ETIQUETA[modulo.fase]}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: ec.bg, color: ec.text, padding: '.22rem .7rem', borderRadius: '2rem' }}>
              {ESTADO_LABEL[modulo.estado]}
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 90', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--tinta)', marginBottom: '.3rem' }}>
            {modulo.nombre}
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--gris)', letterSpacing: '.08em' }}>
            {modulo.dependencia}
          </p>
        </div>
        <div style={{ background: 'var(--crema)', border: '2px solid var(--tinta)', borderRadius: '.8rem', padding: '.8rem 1.2rem', textAlign: 'right', boxShadow: `4px 4px 0 ${modulo.color}`, flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '1.3rem', color: 'var(--tinta)', display: 'block', lineHeight: 1 }}>
            {formatMXN(modulo.instalacion)}
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', color: 'var(--gris)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Instalación única</span>
          <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 20', fontStyle: 'italic', fontSize: '.8rem', color: 'var(--gris)', display: 'block', marginTop: '.2rem' }}>
            + {formatMXN(modulo.mtoMensual)}/mes
          </span>
        </div>
      </div>

      {/* Descripción */}
      <div style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.5rem', borderLeft: `5px solid ${modulo.color}` }}>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--tinta)', lineHeight: 1.5, marginBottom: '.8rem' }}>
          {modulo.descripcion}
        </p>
        <p style={{ fontSize: '.85rem', color: 'var(--gris)', lineHeight: 1.7 }}>
          {modulo.detalle}
        </p>
      </div>

      {/* KPIs */}
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Indicadores de éxito
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
        {modulo.kpis.map((kpi) => (
          <div key={kpi.label} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.1rem 1.2rem', borderTop: `4px solid ${modulo.color}` }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gris)', marginBottom: '.5rem' }}>
              {kpi.label}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.4rem' }}>
              {[{ l: 'Hoy', v: kpi.actual }, { l: '6 meses', v: kpi.meta6m }, { l: '18 meses', v: kpi.meta18m }].map((c) => (
                <div key={c.l} style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'var(--gris)', display: 'block', letterSpacing: '.08em', textTransform: 'uppercase' }}>{c.l}</span>
                  <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '.9rem', color: 'var(--tinta)' }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Slot para contenido adicional del módulo */}
      {children}
    </div>
  );
}
