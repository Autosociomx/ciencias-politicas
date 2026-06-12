import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-iot-ambiental')!;

const SENSORES = [
  { colonia: 'Centro Histórico', lat: '21.5026° N', lon: '104.8950° W', estado: 'planificado' },
  { colonia: 'Col. Ejidal', lat: '21.4985° N', lon: '104.9120° W', estado: 'planificado' },
  { colonia: 'Col. Menchaca', lat: '21.5110° N', lon: '104.8870° W', estado: 'planificado' },
  { colonia: 'Ciudad del Valle', lat: '21.4910° N', lon: '104.9050° W', estado: 'planificado' },
  { colonia: 'Zona Periurbana Norte', lat: '21.5250° N', lon: '104.9020° W', estado: 'planificado' },
];

export default function IoTAmbiental({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Parámetros monitoreados por sensor ESP32
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '.7rem', marginBottom: '1.5rem' }}>
        {[
          { ic: '🌬️', param: 'PM2.5', desc: 'Partículas finas en aire' },
          { ic: '🌡️', param: 'Temperatura', desc: 'Ambiente en °C' },
          { ic: '💧', param: 'Humedad relativa', desc: 'Porcentaje HR' },
          { ic: '🔊', param: 'Nivel de ruido', desc: 'Decibeles ambientales' },
        ].map((p) => (
          <div key={p.param} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '.9rem', padding: '.9rem', textAlign: 'center', borderTop: '4px solid var(--turq)' }}>
            <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '.4rem' }}>{p.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.82rem', color: 'var(--tinta)' }}>{p.param}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--gris)', marginTop: '.2rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Red de sensores — 5 puntos estratégicos
      </h2>
      <div style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
        {SENSORES.map((s, i) => (
          <div key={s.colonia} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '.9rem 1.2rem', borderBottom: i < SENSORES.length - 1 ? '1px solid rgba(21,8,0,.08)' : 'none' }}>
            <span style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 144', fontWeight: 900, fontSize: '1.2rem', color: 'var(--turq)', width: 24, textAlign: 'center', flexShrink: 0 }}>{i + 1}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--inst)', fontWeight: 600, fontSize: '.82rem', color: 'var(--tinta)' }}>{s.colonia}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.54rem', color: 'var(--gris)' }}>{s.lat} · {s.lon}</p>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.52rem', background: '#fef9c3', color: '#854d0e', padding: '.18rem .5rem', borderRadius: '2rem', fontWeight: 600, letterSpacing: '.08em' }}>
              Planificado
            </span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--turq)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📊</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "Los datos ambientales públicos justifican inversión en áreas verdes con evidencia técnica, no con promesas políticas."
        </p>
      </div>
    </ModuloShell>
  );
}
