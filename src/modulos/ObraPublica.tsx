import type { AppView } from '../types';
import { MODULOS } from '../types';
import ModuloShell from '../dashboard/ModuloShell';

interface Props { onBack: () => void; onNavigate: (v: AppView) => void; }

const modulo = MODULOS.find((m) => m.id === 'mod-obra-publica')!;

const NIVELES = [
  { rol: 'Ciudadano', acceso: 'Lectura pública', ic: '👁️', color: 'var(--turq)' },
  { rol: 'Supervisor de obra', acceso: 'Carga de avance semanal + fotos geolocalizadas', ic: '🏗️', color: 'var(--solar)' },
  { rol: 'Presidenta Municipal', acceso: 'Auditoría completa + alertas + exportación', ic: '🏛️', color: 'var(--magenta)' },
];

export default function ObraPublica({ onBack }: Props) {
  return (
    <ModuloShell modulo={modulo} onBack={onBack}>
      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', margin: '1.5rem 0 1rem', letterSpacing: '-.02em' }}>
        Niveles de acceso
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.8rem', marginBottom: '1.5rem' }}>
        {NIVELES.map((n) => (
          <div key={n.rol} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '1rem', padding: '1.1rem', borderLeft: `4px solid ${n.color}` }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '.5rem' }}>{n.ic}</span>
            <div style={{ fontFamily: 'var(--inst)', fontWeight: 700, fontSize: '.85rem', color: 'var(--tinta)', marginBottom: '.3rem' }}>{n.rol}</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--gris)', lineHeight: 1.5 }}>{n.acceso}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 60', fontWeight: 900, fontSize: '1.1rem', color: 'var(--tinta)', marginBottom: '1rem', letterSpacing: '-.02em' }}>
        Alertas automáticas
      </h2>
      <div style={{ display: 'flex', gap: '.7rem', flexDirection: 'column', marginBottom: '1.5rem' }}>
        {[
          { trigger: 'Obra sin actualizar por 2 semanas', accion: 'Alerta a supervisor + Contraloría', severity: 'amarilla' },
          { trigger: 'Costo excede 10% del presupuesto original', accion: 'Alerta a Presidenta + reporte automático', severity: 'roja' },
          { trigger: 'Avance < 50% con plazo vencido', accion: 'Reporte público + alerta a equipo de comunicación', severity: 'roja' },
        ].map((a) => (
          <div key={a.trigger} style={{ background: 'var(--blanco)', border: '1.5px solid rgba(21,8,0,.1)', borderRadius: '.8rem', padding: '.9rem 1.1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: a.severity === 'roja' ? 'var(--coral)' : 'var(--solar)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--inst)', fontSize: '.8rem', fontWeight: 600, color: 'var(--tinta)' }}>{a.trigger}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '.56rem', color: 'var(--gris)', marginTop: '.15rem' }}>→ {a.accion}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--turq)', borderRadius: '1rem', padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏆</span>
        <div>
          <p style={{ fontFamily: 'var(--frau)', fontVariationSettings: '"opsz" 30', fontStyle: 'italic', fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.4, marginBottom: '.4rem' }}>
            "Primera obra pública con trazabilidad pública en Nayarit. En el debate: 'Aquí está cada peso de obra de Tepic, visible para todos.'"
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'rgba(255,255,255,.7)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Argumento electoral · Plan Operativo ConnectX 2026
          </p>
        </div>
      </div>
    </ModuloShell>
  );
}
