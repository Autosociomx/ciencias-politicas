import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-ventanilla-unica')!;

const TRAMITES = [
  'Licencia de funcionamiento comercial',
  'Licencia de construcción',
  'Uso de suelo',
  'Registro civil (actas)',
  'Certificado de ingresos',
  'Predial — constancias',
  'Refrendo vehicular',
  'Anuncios y espectaculares',
  'Permisos de eventos',
  'Regularización de terrenos',
];

export default function VentanillaUnica({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <div style={{ background: 'rgba(123,31,162,.08)', border: '1.5px solid rgba(123,31,162,.2)', borderRadius: '1rem', padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 600, color: 'var(--morado)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
          ⚖️ Mandato legal: LNETB 2025
        </p>
        <p style={{ fontFamily: 'var(--inst)', fontSize: '.82rem', color: 'var(--tinta)', lineHeight: 1.65 }}>
          La <strong>Ley Nacional para Eliminar Trámites Burocráticos</strong> (vigente desde julio 2025) obliga a todos los municipios a crear una <em>Autoridad Local de Digitalización</em> antes de finales de 2026. Solo el 3% de los municipios mexicanos han cumplido. Tepic puede ser el primero de Nayarit en alcanzar el 100%.
        </p>
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Trámites a digitalizar
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.5rem', marginBottom: '1.5rem' }}>
        {TRAMITES.map((t, i) => (
          <div key={t} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '.7rem', padding: '.7rem 1rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', fontWeight: 600, color: 'var(--morado)', width: 20, textAlign: 'center', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontFamily: 'var(--inst)', fontSize: '.78rem', color: 'var(--tinta)', lineHeight: 1.3 }}>{t}</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Ruta de implementación
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.5rem' }}>
        {[
          { sem: 'Sem 1', accion: 'Auditoría de todos los trámites municipales actuales', resp: 'ConnectX + Secretaría' },
          { sem: 'Sem 2–3', accion: 'Digitalización de los 10 trámites de mayor demanda', resp: 'Equipo técnico' },
          { sem: 'Sem 4', accion: 'Demo ante el Cabildo + comunicado de prensa', resp: 'Presidenta + Comunicación' },
          { sem: 'Mes 3', accion: '50% de trámites en el portal — cumplimiento parcial LNETB', resp: 'Todas las dependencias' },
          { sem: 'Mes 6', accion: '90%+ de trámites digitales — Tepic cumple LNETB al 100%', resp: 'Ayuntamiento + ConnectX' },
        ].map((paso) => (
          <div key={paso.sem} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '.8rem', padding: '.8rem 1.1rem', display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: '.7rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, color: 'var(--morado)', letterSpacing: '.08em' }}>{paso.sem}</span>
            <div style={{ fontFamily: 'var(--inst)', fontSize: '.8rem', color: 'var(--tinta)' }}>{paso.accion}</div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.5rem', color: 'var(--gris)', textAlign: 'right', lineHeight: 1.3 }}>{paso.resp}</span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--morado)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏛️</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "El único municipio de Nayarit que cumple la ley federal de digitalización. Argumento legal y político al mismo tiempo."
        </p>
      </div>
    </ModuloShell>
  );
}
