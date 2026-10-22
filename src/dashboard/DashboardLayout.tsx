import type { ReactNode } from 'react';
import type { AppView, Modulo } from '../types';
import { MODULOS, ESTADO_LABEL } from '../types';

interface DashboardLayoutProps {
  view: AppView;
  onNavigate: (view: AppView) => void;
  children: ReactNode;
}

const FASE_GRUPOS: { fase: 1 | 2 | 3; label: string; color: string }[] = [
  { fase: 1, label: 'Fase 1 · Ahora', color: 'var(--magenta)' },
  { fase: 2, label: 'Fase 2 · 3–6m', color: 'var(--turq)' },
  { fase: 3, label: 'Fase 3 · 6–18m', color: 'var(--morado)' },
];

const ESTADO_DOT: Record<Modulo['estado'], string> = {
  'activo': '#16a34a',
  'en-desarrollo': '#d97706',
  'planeado': '#9333ea',
};

export default function DashboardLayout({ view, onNavigate, children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--hueso)', fontFamily: 'var(--inst)' }}>
      {/* SIDEBAR */}
      <aside style={{
        width: 240, flexShrink: 0,
        background: 'var(--tinta)',
        display: 'flex', flexDirection: 'column',
        borderRight: '1px solid rgba(255,255,255,.06)',
        position: 'sticky', top: 0, height: '100vh', overflowY: 'auto',
      }}>
        {/* Logo */}
        <div style={{ padding: '1.4rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <button
            onClick={() => onNavigate('landing')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.55rem', textAlign: 'left' }}
          >
            <span style={{ width: 12, height: 12, background: 'var(--magenta)', transform: 'rotate(45deg)', flexShrink: 0, boxShadow: '2px 2px 0 var(--solar)', display: 'block' }} />
            <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 40', fontWeight: 900, fontSize: '1rem', color: 'var(--crema)', letterSpacing: '-.02em' }}>
              ConnectX
            </span>
          </button>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.48rem', color: 'rgba(254,248,238,.35)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '.3rem', paddingLeft: '1.5rem' }}>
            Jala · Nayarit Digital
          </p>
        </div>

        {/* Nav items */}
        <nav style={{ padding: '.8rem .6rem', flex: 1 }}>
          {/* Dashboard home */}
          <SidebarItem
            label="Dashboard"
            icon="📊"
            active={view === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          />

          {/* Módulos por fase */}
          {FASE_GRUPOS.map(({ fase, label, color }) => (
            <div key={fase} style={{ marginTop: '1rem' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: color, paddingLeft: '.6rem', marginBottom: '.4rem' }}>
                {label}
              </p>
              {MODULOS.filter((m) => m.fase === fase).map((m) => (
                <SidebarItem
                  key={m.id}
                  label={m.nombre}
                  icon={m.icono}
                  active={view === m.id}
                  onClick={() => onNavigate(m.id)}
                  dot={ESTADO_DOT[m.estado]}
                />
              ))}
            </div>
          ))}

          {/* Consejo */}
          <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '1rem' }}>
            <SidebarItem
              label="Consejo IA"
              icon="🧠"
              active={view === 'consejo'}
              onClick={() => onNavigate('consejo')}
            />
          </div>
        </nav>

        {/* Footer del sidebar */}
        <div style={{ padding: '1rem 1.2rem', borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <button
            onClick={() => onNavigate('landing')}
            style={{ width: '100%', background: 'var(--magenta)', color: '#fff', border: 'none', borderRadius: '.5rem', padding: '.55rem', fontFamily: 'var(--mono)', fontSize: '.55rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            ← Sitio público
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', background: 'var(--crema)' }}>
        {children}
      </main>
    </div>
  );
}

function SidebarItem({ label, icon, active, onClick, dot }: {
  label: string; icon: string; active: boolean; onClick: () => void; dot?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: '.6rem',
        padding: '.5rem .6rem', borderRadius: '.5rem', border: 'none', cursor: 'pointer',
        background: active ? 'rgba(229,0,122,.15)' : 'transparent',
        transition: 'background .15s',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,.05)'; }}
      onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
    >
      <span style={{ fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: 'var(--inst)', fontSize: '.75rem', fontWeight: active ? 600 : 400, color: active ? 'var(--crema)' : 'rgba(254,248,238,.55)', flex: 1, lineHeight: 1.2 }}>
        {label}
      </span>
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot, flexShrink: 0 }} />
      )}
    </button>
  );
}
