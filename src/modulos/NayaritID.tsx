import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-nayarit-id')!;

const COLONIAS_PILOTO = [
  { tipo: 'Urbana central', colonia: 'Por definir — zona centro', criterio: 'Alta densidad, adopción digital media' },
  { tipo: 'Periférica consolidada', colonia: 'Por definir — zona ejidal', criterio: 'Servicios formales, conectividad limitada' },
  { tipo: 'Alta marginalidad', colonia: 'Por definir — zona norte', criterio: 'Sin servicios digitales, máximo impacto mediático' },
];

export default function NayaritID({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Servicios en el perfil NayaritID
      </h2>
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {[
          '💳 Pago de predial y refrendo',
          '🏗️ Ver avance de obras en mi colonia',
          '📱 Reportar baches y servicios',
          '📋 Estado de mis trámites',
          '💚 Orientación SaludSimi DIF',
          '📍 Geolocalización de servicios cercanos',
          '🗳️ Consultas ciudadanas',
        ].map((s) => (
          <span key={s} style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 600, background: 'rgba(123,31,162,.1)', color: 'var(--morado)', padding: '.3rem .75rem', borderRadius: '2rem', border: '1px solid rgba(123,31,162,.2)' }}>
            {s}
          </span>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Colonias piloto — Selección estratégica
      </h2>
      <div style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
        {COLONIAS_PILOTO.map((c, i) => (
          <div key={c.tipo} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1rem', padding: '1rem 1.2rem', borderBottom: i < COLONIAS_PILOTO.length - 1 ? '1px solid rgba(21,8,0,.08)' : 'none' }}>
            <div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.54rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(123,31,162,.1)', color: 'var(--morado)', padding: '.18rem .5rem', borderRadius: '2rem', display: 'inline-block', marginBottom: '.4rem' }}>
                Piloto {i + 1}
              </span>
              <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.78rem', color: 'var(--tinta)' }}>{c.tipo}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--inst)', fontSize: '.8rem', color: 'var(--tinta)', marginBottom: '.2rem' }}>{c.colonia}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.56rem', color: 'var(--gris)' }}>{c.criterio}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(21,8,0,.05)', borderRadius: '1rem', padding: '1rem 1.2rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '2.5rem', color: 'var(--morado)', lineHeight: 1 }}>50</span>
        <div>
          <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.85rem', color: 'var(--tinta)' }}>Colonias meta pre-campaña</div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', marginTop: '.2rem' }}>50 de 250 colonias operativas antes del registro como candidata a gobernadora 2027</p>
        </div>
      </div>

      <div style={{ background: 'var(--morado)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🪪</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "Cada colonia con NayaritID es un testigo presencial del gobierno digital. 50 colonias = 50 argumentos electorales inapelables."
        </p>
      </div>
    </ModuloShell>
  );
}
