import { useState } from 'react';
import type { ComponentType } from 'react';
import type { AppView } from './types';
import LandingPage from './landing/LandingPage';
import DashboardLayout from './dashboard/DashboardLayout';
import DashboardHome from './dashboard/DashboardHome';
import Consejo from './components/Consejo';
import Tesoreria from './modulos/Tesoreria';
import ObraPublica from './modulos/ObraPublica';
import Reportes from './modulos/Reportes';
import SaludSimi from './modulos/SaludSimi';
import AgroVision from './modulos/AgroVision';
import IoTAmbiental from './modulos/IoTAmbiental';
import SeguridadDigital from './modulos/SeguridadDigital';
import NayaritID from './modulos/NayaritID';
import VentanillaUnica from './modulos/VentanillaUnica';

export default function App() {
  const [view, setView] = useState<AppView>('landing');

  if (view === 'landing') {
    return <LandingPage onNavigate={setView} />;
  }

  if (view === 'consejo') {
    return (
      <div>
        <button
          onClick={() => setView('dashboard')}
          style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 999, background: 'var(--magenta)', color: '#fff', border: 'none', borderRadius: '.5rem', padding: '.45rem .9rem', fontFamily: 'var(--mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer' }}
        >
          ← Dashboard
        </button>
        <Consejo />
      </div>
    );
  }

  const MODULE_MAP: Partial<Record<AppView, ComponentType<{ onBack: () => void; onNavigate: (v: AppView) => void }>>> = {
    'mod-tesoreria':         Tesoreria,
    'mod-obra-publica':      ObraPublica,
    'mod-reportes':          Reportes,
    'mod-salud-simi':        SaludSimi,
    'mod-agrovision':        AgroVision,
    'mod-iot-ambiental':     IoTAmbiental,
    'mod-seguridad-digital': SeguridadDigital,
    'mod-nayarit-id':        NayaritID,
    'mod-ventanilla-unica':  VentanillaUnica,
  };

  const ModuloComponent = MODULE_MAP[view];

  return (
    <DashboardLayout view={view} onNavigate={setView}>
      {view === 'dashboard' && <DashboardHome onNavigate={setView} />}
      {ModuloComponent && (
        <ModuloComponent onBack={() => setView('dashboard')} onNavigate={setView} />
      )}
    </DashboardLayout>
  );
}
