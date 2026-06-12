import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';
import type { AppView } from '../types';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-seguridad-digital')!;

export default function SeguridadDigital({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Funcionalidades del módulo
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '.8rem', marginBottom: '1.5rem' }}>
        {[
          { ic: '🆘', t: 'Botón de emergencia', d: 'Geolocalización en tiempo real + alerta inmediata a Seguridad Pública. 1 toque = respuesta.' },
          { ic: '🗺️', t: 'Mapa de zonas de riesgo', d: 'Actualizado en tiempo real con reportes. Colonias, horarios y tipos de incidente.' },
          { ic: '📎', t: 'Registro con evidencia', d: 'Denuncia digital con foto, video, ubicación y firma digital. Expediente seguro y rastreable.' },
          { ic: '📊', t: 'Dashboard IMM', d: 'Estadísticas de incidencia por colonia, horario y tipo. Base para política pública de prevención.' },
        ].map((f) => (
          <div key={f.t} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.1rem', borderTop: '4px solid var(--coral)' }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '.5rem' }}>{f.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.82rem', color: 'var(--tinta)', marginBottom: '.3rem' }}>{f.t}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', lineHeight: 1.5 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(244,67,54,.08)', border: '1.5px solid rgba(244,67,54,.2)', borderRadius: '1rem', padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '.6rem', fontWeight: 600, color: 'var(--coral)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.5rem' }}>
          🔒 Privacidad y seguridad de datos
        </p>
        <p style={{ fontFamily: 'var(--inst)', fontSize: '.8rem', color: 'var(--tinta)', lineHeight: 1.6 }}>
          Todos los datos de denunciantes son encriptados end-to-end. El número de celular y ubicación de la usuaria nunca se comparten con terceros. Cumple NOM-151 (preservación de mensajes con valor jurídico) y la Ley General de Protección de Datos Personales.
        </p>
      </div>

      <div style={{ background: 'var(--coral)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🛡️</span>
        <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4 }}>
          "Un botón no hace milagros. Pero un sistema conectado — con datos, con respuesta y con seguimiento — sí cambia vidas."
        </p>
      </div>
    </ModuloShell>
  );
}
