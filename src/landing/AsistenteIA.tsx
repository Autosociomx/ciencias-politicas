import { useRef, useState } from 'react';

interface Message {
  role: 'user' | 'ia';
  text: string;
}

const RESPUESTAS = {
  default:
    'Puedo explicarte el Orbe, la ley de trámites, la ficha de salud o la llave del tutor. No invento cargos ni resultados de gobierno. ¿Qué quieres revisar?',
  orbe:
    'El Orbe es una voz dentro de un solo portal. Tú dices el trámite. Él te guía y deja folio. No sustituye a la persona funcionaria: evita que tú armes la ruta entre oficinas.',
  salud:
    'La ficha usa cinco colores, como el triaje Manchester, y el lenguaje CIE-10 y CIE-11 para ordenar lo que el médico va a evaluar. La inteligencia artificial no diagnostica, no recomienda un medicamento y no da receta.',
  llave:
    'La Llave MX infantil la activa el tutor. Una plataforma como un juego o una red solo debería recibir si hay permiso, nunca el CURP, la foto o el expediente del niño. Proteger no es vigilar.',
  ley:
    'La Ley Nacional para Eliminar Trámites Burocráticos se publicó el 16 de julio de 2025. La Agencia de Transformación Digital y Telecomunicaciones la implementa. Jala Digital propone cumplirla con Llave MX, no crear un sistema paralelo.',
  jala:
    'Jala es el municipio piloto: cerca de 19,300 habitantes en el Censo 2020. La figura de esta plataforma es Miguel Alexis, para la presidencia municipal de 2027. Todavía no es un cargo ni un sitio del Ayuntamiento.',
};

function getResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('salud') || m.includes('médic') || m.includes('medic') || m.includes('triaje') || m.includes('receta')) return RESPUESTAS.salud;
  if (m.includes('niñ') || m.includes('nin') || m.includes('tutor') || m.includes('llave') || m.includes('roblox')) return RESPUESTAS.llave;
  if (m.includes('ley') || m.includes('claudia') || m.includes('agencia') || m.includes('trámite') || m.includes('tramite')) return RESPUESTAS.ley;
  if (m.includes('jala') || m.includes('miguel') || m.includes('candidato') || m.includes('campaña') || m.includes('campana')) return RESPUESTAS.jala;
  if (m.includes('orbe') || m.includes('portal') || m.includes('voz')) return RESPUESTAS.orbe;
  return RESPUESTAS.default;
}

export default function AsistenteIA() {
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'ia', text: 'Soy el asistente de la plataforma Jala Digital. Pregunta por el Orbe, la salud o la llave del tutor. No doy diagnósticos.' },
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
                <span className="chat-head-t">Orbe de campaña</span>
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
