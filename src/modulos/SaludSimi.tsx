import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-salud-simi')!;

export default function SaludSimi({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Características técnicas
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.8rem', marginBottom: '1.5rem' }}>
        {[
          { ic: '📶', t: 'Sin señal', d: 'Pensado para localidades de Jala donde la red falla. Hoy es diseño, no una tablet ya entregada.' },
          { ic: '🏥', t: 'Cinco colores', d: 'Clasifica urgencia al modo Manchester. No dice qué enfermedad tienes ni qué medicamento tomar.' },
          { ic: '🗣️', t: 'Voz en español', d: 'El Orbe pregunta y acompaña. La decisión queda con el personal de salud.' },
          { ic: '📋', t: 'CIE-10 y CIE-11', d: 'Sirven para ordenar la ficha que recibe el médico. No son una receta para el paciente.' },
        ].map((f) => (
          <div key={f.t} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.1rem', borderTop: `4px solid var(--verde)` }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '.5rem' }}>{f.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.82rem', color: 'var(--tinta)', marginBottom: '.3rem' }}>{f.t}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', lineHeight: 1.5 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Módulos DIF — Sitios de implementación
      </h2>
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {['Cabecera de Jala', 'Centro de salud', 'Referencia IMSS-Bienestar', 'DIF municipal', 'Localidad sin señal'].map((sitio) => (
          <div key={sitio} style={{ background: 'rgba(0,135,62,.1)', border: '1px solid rgba(0,135,62,.25)', borderRadius: '.6rem', padding: '.5rem .9rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--verde)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--verde)', fontWeight: 600 }}>{sitio}</span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--verde)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💚</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "La inteligencia artificial ordena la urgencia y entrega la ficha. No diagnostica, no recomienda y no da receta."
        </p>
      </div>
    </ModuloShell>
  );
}
