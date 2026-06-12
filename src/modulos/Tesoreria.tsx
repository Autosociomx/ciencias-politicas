import type { AppView } from '../types';
import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-tesoreria')!;

export default function Tesoreria({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      {/* Flujo del proceso */}
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Flujo de pago digital
      </h2>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {[
          { n: '1', label: 'WhatsApp recuerda', desc: '30 / 15 / 5 días antes del vencimiento' },
          { n: '2', label: 'Ciudadano paga', desc: 'Desde su celular, sin ir a ventanilla' },
          { n: '3', label: 'Recibo automático', desc: 'PDF en WhatsApp e email al instante' },
          { n: '4', label: 'Tesorero ve en tiempo real', desc: 'Panel de recaudación por concepto' },
        ].map((step, i) => (
          <div key={i} style={{ flex: '1 1 200px', background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1rem 1.1rem', display: 'flex', gap: '.7rem', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '1.6rem', color: 'var(--magenta)', lineHeight: 1, flexShrink: 0 }}>{step.n}</span>
            <div>
              <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.82rem', color: 'var(--tinta)', marginBottom: '.2rem' }}>{step.label}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--gris)' }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conceptos a digitalizar */}
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Conceptos de pago
      </h2>
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {['Predial', 'Refrendo vehicular', 'Licencias de funcionamiento', 'Multas', 'Derechos de uso de vía', 'Servicios de rastro'].map((c) => (
          <span key={c} style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(229,0,122,.1)', color: 'var(--magenta)', padding: '.25rem .7rem', borderRadius: '2rem', border: '1px solid rgba(229,0,122,.2)' }}>
            {c}
          </span>
        ))}
      </div>

      {/* Argumento político */}
      <div style={{ background: 'var(--magenta)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏛️</span>
        <div>
          <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4, marginBottom: '.4rem' }}>
            "Tepic: primer municipio de Nayarit con predial 100% digital. En el debate: 'Aquí están los números de recaudación — sin mentiras.'"
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'rgba(255,255,255,.65)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Argumento electoral irrebutible · Plan Operativo ConnectX 2026
          </p>
        </div>
      </div>
    </ModuloShell>
  );
}
