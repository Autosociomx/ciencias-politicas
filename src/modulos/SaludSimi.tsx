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
          { ic: '📶', t: '100% Offline', d: 'Funciona sin internet. Crítico para colonias periféricas de Tepic y futura sierra nayarita.' },
          { ic: '🏥', t: 'Manchester Triage', d: 'Sistema de triaje internacionalmente validado. Clasifica urgencia en 5 niveles de color.' },
          { ic: '🗣️', t: 'Voz en español MX', d: 'Instrucciones y preguntas en español mexicano. Accesible para adultos mayores.' },
          { ic: '📋', t: 'CIE-11', d: 'Clasificación Internacional de Enfermedades versión 11. Base médica actualizada.' },
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
        {['Centro DIF Tepic', 'Col. Menchaca', 'Col. Ejidal', 'Ciudad del Valle', 'Periurbana Norte'].map((sitio) => (
          <div key={sitio} style={{ background: 'rgba(0,135,62,.1)', border: '1px solid rgba(0,135,62,.25)', borderRadius: '.6rem', padding: '.5rem .9rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--verde)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--verde)', fontWeight: 600 }}>{sitio}</span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--verde)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💚</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "Inteligencia artificial del mar a la sierra. El promotor social lleva la tablet — no el ciudadano va a la oficina."
        </p>
      </div>
    </ModuloShell>
  );
}
