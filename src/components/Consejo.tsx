import type { FC } from 'react';
import { useState } from 'react';
import {
  GraduationCap, Users, Sparkles, Send, Loader2, AlertTriangle,
  CheckCircle2, Award, BookOpen, MessageSquare, ArrowUpRight,
} from 'lucide-react';

type FaseEstado = 'idle' | 'cargando' | 'listo' | 'error';

interface Alumno {
  id: string;
  alias: string;
  modelo: string;
  perfil: string;
}

interface Elevacion {
  paresEvaluados: string[];
  texto: string;
}

interface ResultadoCatedra {
  tarea: string;
  examen: string;
  alumnos: Alumno[];
  propuestas: Record<string, string>;
  elevaciones: Record<string, Elevacion>;
  sintesis: string;
  metadata: {
    duracion_ms: number;
    fecha: string;
    version_constitucion: string;
  };
}

const COLORES_ALUMNO: Record<string, { texto: string; borde: string; bg: string; chip: string }> = {
  llamadex: { texto: 'text-emerald-400', borde: 'border-emerald-500/40', bg: 'bg-emerald-500/10', chip: 'bg-emerald-500/20 text-emerald-300' },
  profundo: { texto: 'text-purple-400',  borde: 'border-purple-500/40',  bg: 'bg-purple-500/10',  chip: 'bg-purple-500/20 text-purple-300' },
  sabia:    { texto: 'text-blue-400',    borde: 'border-blue-500/40',    bg: 'bg-blue-500/10',    chip: 'bg-blue-500/20 text-blue-300' },
  memoria:  { texto: 'text-amber-400',   borde: 'border-amber-500/40',   bg: 'bg-amber-500/10',   chip: 'bg-amber-500/20 text-amber-300' },
  abierto:  { texto: 'text-rose-400',    borde: 'border-rose-500/40',    bg: 'bg-rose-500/10',    chip: 'bg-rose-500/20 text-rose-300' },
};

const colorDe = (id: string) => COLORES_ALUMNO[id] ?? {
  texto: 'text-zinc-300', borde: 'border-zinc-700', bg: 'bg-zinc-800', chip: 'bg-zinc-800 text-zinc-300',
};

const TAREA_EJEMPLO = 'Diseña un producto digital de alta venta para traders principiantes: define propuesta de valor, formato del entregable, pricing por tier y embudo de adquisición.';

export default function Consejo() {
  const [tarea, setTarea] = useState('');
  const [estado, setEstado] = useState<FaseEstado>('idle');
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<ResultadoCatedra | null>(null);
  const [decision, setDecision] = useState<string | null>(null);

  const convocar = async () => {
    if (!tarea.trim()) return;
    setEstado('cargando');
    setError(null);
    setResultado(null);
    setDecision(null);
    try {
      const res = await fetch('/consejo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ tarea }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`${res.status}: ${txt.slice(0, 300)}`);
      }
      const data: ResultadoCatedra = await res.json();
      setResultado(data);
      setEstado('listo');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setEstado('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">

        {/* HEADER */}
        <header className="border-b border-zinc-800 pb-6">
          <div className="flex items-start justify-between gap-6 mb-5">
            <div>
              <h1 className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500 mb-2">
                Cátedra Deliberativa · Alquimia CX v12
              </h1>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-indigo-400" />
                <span className="text-3xl font-bold tracking-tight">Consejo de IA</span>
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
                  1 Maestra · 5 Alumnos
                </span>
              </div>
            </div>
            <RosterMini />
          </div>

          {/* INPUT DE TAREA */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
            <label className="text-[11px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Tarea para la Cátedra
            </label>
            <textarea
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder={TAREA_EJEMPLO}
              rows={3}
              disabled={estado === 'cargando'}
              className="w-full bg-black/40 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder:text-zinc-600 resize-none focus:outline-none focus:border-indigo-500/50 disabled:opacity-50"
            />
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-zinc-500">
                La Maestra reformulará tu tarea como examen, los 5 alumnos la resolverán en paralelo,
                cada uno elevará a 2 pares, y la Maestra entregará un documento híbrido firmado.
              </p>
              <button
                onClick={convocar}
                disabled={estado === 'cargando' || !tarea.trim()}
                className="flex-shrink-0 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
              >
                {estado === 'cargando' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Convocando…</>
                ) : (
                  <><Send className="w-4 h-4" /> Convocar Cátedra</>
                )}
              </button>
            </div>
          </div>

          <IndicadorFases estado={estado} />
        </header>

        {/* ESTADO: ERROR */}
        {estado === 'error' && error && (
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-rose-300 font-bold text-sm mb-1">La Cátedra no pudo abrir</p>
              <p className="text-rose-200/80 text-xs font-mono whitespace-pre-wrap">{error}</p>
              <p className="text-rose-200/60 text-[11px] mt-2">
                Verifica que el servidor está corriendo (<code>npm run server</code>) y que pegaste tus dos claves en <code>.env.local</code>.
              </p>
            </div>
          </div>
        )}

        {/* ESTADO: LISTO */}
        {estado === 'listo' && resultado && (
          <>
            <BloqueExamen examen={resultado.examen} />

            <section>
              <h2 className="text-xs uppercase font-black tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Las 5 Propuestas de los Alumnos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                {resultado.alumnos.map((alumno) => (
                  <ColumnaAlumno
                    key={alumno.id}
                    alumno={alumno}
                    propuesta={resultado.propuestas[alumno.id] ?? ''}
                    elevacion={resultado.elevaciones[alumno.id]}
                    rosterPorId={Object.fromEntries(resultado.alumnos.map(a => [a.id, a]))}
                  />
                ))}
              </div>
            </section>

            <BloqueSintesis sintesis={resultado.sintesis} duracion={resultado.metadata.duracion_ms} />

            <FooterDecision decision={decision} setDecision={setDecision} />
          </>
        )}

        {/* ESTADO: IDLE */}
        {estado === 'idle' && <PantallaInicial />}
      </div>
    </div>
  );
}

function RosterMini() {
  const roster: Alumno[] = [
    { id: 'llamadex', alias: 'Llamadex', modelo: 'llama-3.3-70b',     perfil: 'Generalista' },
    { id: 'profundo', alias: 'Profundo', modelo: 'deepseek-r1',       perfil: 'Razonador' },
    { id: 'sabia',    alias: 'Sabia',    modelo: 'qwen3-32b',         perfil: 'Código' },
    { id: 'memoria',  alias: 'Memoria',  modelo: 'kimi-k2',           perfil: 'Síntesis' },
    { id: 'abierto',  alias: 'Abierto',  modelo: 'gpt-oss-120b',      perfil: 'Robusto' },
  ];
  return (
    <div className="hidden lg:flex flex-col gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 min-w-[280px]">
      <div className="flex items-center gap-2 mb-1">
        <Award className="w-3.5 h-3.5 text-indigo-400" />
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Roster · Maestra + Alumnos</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span className="text-indigo-300 font-bold">Gemini 2.5 Pro</span>
        <span className="text-zinc-500 text-[10px]">— Maestra</span>
      </div>
      {roster.map(a => {
        const c = colorDe(a.id);
        return (
          <div key={a.id} className="flex items-center gap-2 text-[11px]">
            <div className={`w-1.5 h-1.5 rounded-full ${c.bg.replace('/10','')}`} />
            <span className={`${c.texto} font-semibold`}>{a.alias}</span>
            <span className="text-zinc-600 font-mono">{a.modelo}</span>
          </div>
        );
      })}
    </div>
  );
}

function IndicadorFases({ estado }: { estado: FaseEstado }) {
  const fases = [
    { n: 1, label: 'Reparto', icon: BookOpen },
    { n: 2, label: 'Tareas', icon: Users },
    { n: 3, label: 'Asamblea', icon: MessageSquare },
    { n: 4, label: 'Síntesis', icon: Sparkles },
    { n: 5, label: 'Decisión', icon: Award },
  ];
  const activa = estado === 'cargando';
  const lista = estado === 'listo';
  return (
    <div className="mt-4 flex items-center gap-2">
      {fases.map((f, i) => {
        const Icon = f.icon;
        const ultima = f.n === 5;
        const cumplida = lista && !ultima;
        return (
          <div key={f.n} className="flex items-center gap-2 flex-1">
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] font-bold uppercase tracking-widest transition-colors
              ${cumplida ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : ''}
              ${activa ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' : ''}
              ${!cumplida && !activa ? 'bg-zinc-900 border-zinc-800 text-zinc-600' : ''}
            `}>
              <Icon className="w-3 h-3" />
              <span>{f.n}. {f.label}</span>
              {activa && <Loader2 className="w-3 h-3 animate-spin" />}
              {cumplida && <CheckCircle2 className="w-3 h-3" />}
            </div>
            {i < fases.length - 1 && <div className={`flex-1 h-px ${cumplida ? 'bg-emerald-500/30' : 'bg-zinc-800'}`} />}
          </div>
        );
      })}
    </div>
  );
}

function BloqueExamen({ examen }: { examen: string }) {
  return (
    <section className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-indigo-400" />
        <h2 className="text-[11px] uppercase font-black tracking-[0.25em] text-indigo-300">
          Maestra Gemini · Reformulación de la tarea (Fase 1)
        </h2>
      </div>
      <pre className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap font-sans">{examen}</pre>
    </section>
  );
}

interface ColumnaAlumnoProps {
  alumno: Alumno;
  propuesta: string;
  elevacion?: Elevacion;
  rosterPorId: Record<string, Alumno>;
}

const ColumnaAlumno: FC<ColumnaAlumnoProps> = ({ alumno, propuesta, elevacion, rosterPorId }) => {
  const c = colorDe(alumno.id);
  return (
    <div className={`flex flex-col bg-zinc-900/50 border ${c.borde} rounded-xl overflow-hidden shadow-2xl shadow-black/40`}>
      <div className={`p-3 border-b border-zinc-800 ${c.bg} flex items-center justify-between`}>
        <div className="flex flex-col">
          <span className={`font-bold uppercase text-sm ${c.texto}`}>{alumno.alias}</span>
          <span className="text-[10px] font-mono text-zinc-500">{alumno.modelo}</span>
        </div>
        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${c.chip}`}>
          {alumno.perfil}
        </span>
      </div>

      <div className="p-3 flex-1 overflow-hidden">
        <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2 flex items-center gap-1.5">
          <BookOpen className="w-3 h-3" /> Propuesta (Fase 2)
        </p>
        <pre className="bg-black/40 border border-zinc-800 rounded-lg p-3 text-[11px] text-zinc-300 whitespace-pre-wrap font-sans leading-snug max-h-[280px] overflow-auto">
          {propuesta}
        </pre>

        {elevacion && (
          <>
            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-4 mb-2 flex items-center gap-1.5">
              <ArrowUpRight className="w-3 h-3" /> Elevaciones (Fase 3)
            </p>
            <div className="text-[10px] text-zinc-500 mb-2 flex flex-wrap gap-1">
              {elevacion.paresEvaluados.map(parId => {
                const par = rosterPorId[parId];
                const cp = colorDe(parId);
                return (
                  <span key={parId} className={`px-1.5 py-0.5 rounded ${cp.chip}`}>
                    elevó a {par?.alias ?? parId}
                  </span>
                );
              })}
            </div>
            <pre className="bg-black/40 border border-zinc-800 rounded-lg p-3 text-[11px] text-zinc-300 whitespace-pre-wrap font-sans leading-snug max-h-[220px] overflow-auto">
              {elevacion.texto}
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

function BloqueSintesis({ sintesis, duracion }: { sintesis: string; duracion: number }) {
  return (
    <section className="bg-gradient-to-br from-emerald-950/30 to-indigo-950/20 border border-emerald-500/20 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          <h2 className="text-[11px] uppercase font-black tracking-[0.25em] text-emerald-300">
            Maestra Gemini · Síntesis Magistral (Fase 4)
          </h2>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono">
          {(duracion / 1000).toFixed(1)}s · cátedra completa
        </span>
      </div>
      <pre className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap font-sans bg-black/30 rounded-lg p-4 border border-zinc-800/60 max-h-[600px] overflow-auto">
        {sintesis}
      </pre>
    </section>
  );
}

function FooterDecision({ decision, setDecision }: { decision: string | null; setDecision: (s: string) => void }) {
  return (
    <footer className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-indigo-500" />
      <div className="flex items-center gap-3 pl-2">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
            Fase 5 · Decisión Soberana
          </span>
          <span className="text-xs text-zinc-500">Tú eres el ejecutivo. La Cátedra es consultiva.</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-end">
        {[
          { id: 'aprobar',     label: 'Aprobar síntesis',  cls: 'bg-emerald-500 hover:bg-emerald-400 text-white' },
          { id: 'reabrir',     label: 'Reabrir ticket',    cls: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700' },
          { id: 're-trabajo',  label: 'Pedir re-trabajo',  cls: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700' },
          { id: 'hibrido',     label: 'Editar híbrido',    cls: 'bg-white hover:bg-zinc-200 text-black' },
        ].map(b => (
          <button
            key={b.id}
            onClick={() => setDecision(b.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${b.cls} ${decision === b.id ? 'ring-2 ring-offset-2 ring-offset-zinc-900 ring-white/40' : ''}`}
          >
            {b.label}
          </button>
        ))}
      </div>
    </footer>
  );
}

function PantallaInicial() {
  return (
    <div className="border border-dashed border-zinc-800 rounded-xl p-12 flex flex-col items-center text-center gap-3">
      <GraduationCap className="w-10 h-10 text-zinc-700" />
      <p className="text-zinc-500 text-sm max-w-md">
        Escribe arriba la tarea que quieres deliberar. La Cátedra reúne a 6 inteligencias artificiales —
        una Maestra que orquesta y cinco Alumnos que ejecutan — para entregarte un documento auditado en menos de un minuto.
      </p>
      <p className="text-zinc-600 text-[11px] font-mono">
        Pega tus 2 claves en <span className="text-zinc-400">.env.local</span> · ejecuta <span className="text-zinc-400">npm run server</span> en otra terminal.
      </p>
    </div>
  );
}
