import { useRef, useState } from 'react';

interface Message {
  role: 'user' | 'ia';
  text: string;
}

const RESPUESTAS = {
  default:
    'Puedo explicarte Palabra de mujer, Vamos, la estrategia de inteligencia artificial o los límites de salud. No invento cargos, fotos ni resultados. ¿Qué quieres revisar?',
  orbe:
    'El Orbe guía el trámite y deja folio. No es la imagen de Vanessa Zúñiga. La imagen es su palabra. La máquina acompaña para que esa palabra se cumpla.',
  salud:
    'La ficha usa cinco colores, como el triaje Manchester, y el lenguaje CIE-10 y CIE-11 para ordenar lo que el médico va a evaluar. La inteligencia artificial no diagnostica, no recomienda un medicamento y no da receta.',
  llave:
    'La Llave MX infantil la activa el tutor. Una plataforma como un juego o una red solo debería recibir si hay permiso, nunca el CURP, la foto o el expediente del niño. Proteger no es vigilar.',
  ley:
    'La Ley Nacional para Eliminar Trámites Burocráticos se publicó el 16 de julio de 2025. La Agencia de Transformación Digital y Telecomunicaciones la implementa. Jala Digital propone cumplirla con Llave MX, no crear un sistema paralelo.',
  jala:
    'Esta campaña es de Vanessa Zúñiga Rafael, por Morena, a la presidencia municipal de Jala en 2027. El lema es Palabra de mujer. El llamado es Vamos. En 2024 ella ya contendió por Morena a este mismo cargo. Esta página no afirma que ya ganó ni que el registro de 2027 esté publicado.',
  estrategia:
    'La inteligencia artificial no se usa para construir una imagen de tecnología. Se usa para escuchar lo que Jala pide, ordenar la palabra de campaña y dejar un rastro que se pueda abrir. El rostro sigue siendo el de Vanessa.',
};

function getResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('salud') || m.includes('médic') || m.includes('medic') || m.includes('triaje') || m.includes('receta')) return RESPUESTAS.salud;
  if (m.includes('niñ') || m.includes('nin') || m.includes('tutor') || m.includes('llave') || m.includes('roblox')) return RESPUESTAS.llave;
  if (m.includes('ley') || m.includes('claudia') || m.includes('agencia') || m.includes('trámite') || m.includes('tramite')) return RESPUESTAS.ley;
  if (m.includes('imagen') || m.includes('estrateg') || m.includes('tecnolog')) return RESPUESTAS.estrategia;
  if (m.includes('jala') || m.includes('vanessa') || m.includes('morena') || m.includes('palabra') || m.includes('vamos') || m.includes('candidato') || m.includes('campaña') || m.includes('campana')) return RESPUESTAS.jala;
  if (m.includes('orbe') || m.includes('portal') || m.includes('voz')) return RESPUESTAS.orbe;
  return RESPUESTAS.default;
}

export default function AsistenteIA() {
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'ia', text: 'Soy el asistente de la campaña de Vanessa Zúñiga. Pregunta por Palabra de mujer, Morena o por qué la inteligencia artificial no es la imagen. No doy diagnósticos.' },
    { role: 'user', text: '¿La inteligencia artificial da receta?' },
    { role: 'ia', text: RESPUESTAS.salud },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  const send = () => {
    const texto = input.trim();
    if (!texto) return;
    setInput('');
    setMsgs((prev) => [...prev, { role: 'user', text: texto }, { role: 'ia', text: getResponse(texto) }]);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 50);
  };

  return (
    <section className="sec ia-sec" id="ia">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--solar)', color: 'var(--tinta)' }}>
          Asistente de la plataforma
        </span>
        <h2 className="ttl rv d1">
          Pregunta aquí.<br />
          <em style={{ color: 'var(--solar)' }}>Sin letra pequeña.</em>
        </h2>
        <p className="bajada rv d2">
          Respuestas fijas de la campaña, no un médico y no un buzón que guarda tu CURP.
        </p>
        <div className="ia-grid">
          <div className="chat-shell rv d1">
            <div className="chat-head">
              <div className="chat-ava">🛣️</div>
              <div>
                <span className="chat-head-t">Palabra de mujer</span>
                <span className="chat-head-s">Guía · no diagnostica · no pide datos</span>
              </div>
            </div>
            <div className="chat-body" ref={bodyRef}>
              {msgs.map((m, i) => (
                <div key={i} className={`msg ${m.role === 'user' ? 'msg-u' : 'msg-ia'}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="chat-input-row">
              <input
                className="chat-input"
                type="text"
                placeholder="Escribe tu pregunta..."
                maxLength={200}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
              />
              <button className="chat-send" onClick={send} aria-label="Enviar">→</button>
            </div>
          </div>
          <div className="ia-features rv d2">
            {[
              { ic: '🗣️', t: 'Voz que acompaña', d: 'El mismo principio del Orbe: el ciudadano dice la necesidad y recibe el siguiente paso, no un mapa de oficinas.' },
              { ic: '🩺', t: 'Límite de salud', d: 'Cinco colores para ordenar la urgencia. La decisión y la receta quedan con el personal de salud.' },
              { ic: '🔑', t: 'Límite de niñez', d: 'Si la pregunta es de un menor, la respuesta recuerda que la llave la tiene el tutor y que los datos no salen.' },
              { ic: '📎', t: 'Sin respaldo inventado', d: 'No afirma que Claudia Sheinbaum apoya esta candidatura. Afirma con qué política nacional quiere alinearse.' },
            ].map((f) => (
              <div className="ia-f" key={f.t}>
                <span className="ia-f-ic">{f.ic}</span>
                <div>
                  <span className="ia-f-t">{f.t}</span>
                  <p className="ia-f-d">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
