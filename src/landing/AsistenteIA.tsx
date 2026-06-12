import { useRef, useState } from 'react';

interface Message {
  role: 'user' | 'ia';
  text: string;
}

const RESPUESTAS_DEMO: Record<string, string> = {
  default: 'Gracias por tu pregunta. Puedo contarte sobre las propuestas de Geraldine para Nayarit, sus logros en Tepic o cómo participar en el movimiento. ¿Qué te gustaría saber? 🌽',
  salud: 'TEPICTU Salud es el sistema de triaje médico con inteligencia artificial que ya funciona en módulos DIF de Tepic. Evalúa la urgencia de tu malestar y te orienta a la atención correcta — funciona sin internet, para que llegue hasta la sierra. 💚',
  tepic: 'Como Presidenta Municipal de Tepic desde 2021, Geraldine ha implementado obras públicas trazables, pagos digitales, reportes ciudadanos por WhatsApp y TEPICTU Salud para los 425,924 tepicenses.',
  nayarit: 'La propuesta para Nayarit tiene 4 pilares: Gobierno Transparente, Sexenio del Campesino, TEPICTU Salud estatal y PyMEs Nayaritas. Todo basado en lo que ya funciona en Tepic. 🏛️',
};

function getResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('salud') || m.includes('tepictu')) return RESPUESTAS_DEMO.salud;
  if (m.includes('tepic') || m.includes('logro')) return RESPUESTAS_DEMO.tepic;
  if (m.includes('nayarit') || m.includes('propuesta') || m.includes('pilar')) return RESPUESTAS_DEMO.nayarit;
  return RESPUESTAS_DEMO.default;
}

export default function AsistenteIA() {
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'ia', text: '¡Hola! Soy el asistente de la campaña. Pregúntame sobre las propuestas, los logros en Tepic o cómo participar. 🌽' },
    { role: 'user', text: '¿Qué es TEPICTU Salud?' },
    { role: 'ia', text: RESPUESTAS_DEMO.salud },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  const send = () => {
    const texto = input.trim();
    if (!texto) return;
    setInput('');
    const respuesta = getResponse(texto);
    setMsgs((prev) => [
      ...prev,
      { role: 'user', text: texto },
      { role: 'ia', text: respuesta },
    ]);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 50);
  };

  return (
    <section className="sec ia-sec" id="ia">
      <div className="wrap">
        <span className="tag rv" style={{ background: 'var(--solar)', color: 'var(--tinta)' }}>
          Propuesta de valor · Inteligencia Artificial
        </span>
        <h2 className="ttl rv d1">
          Pregúntale a la<br />
          <em style={{ color: 'var(--solar)' }}>campaña. Directamente.</em>
        </h2>
        <p className="bajada rv d2">
          El primer asistente de IA de una campaña en Nayarit: responde dudas sobre propuestas, trámites y resultados — las 24 horas, en lenguaje claro.
        </p>
        <div className="ia-grid">
          <div className="chat-shell rv d1">
            <div className="chat-head">
              <div className="chat-ava">🌽</div>
              <div>
                <span className="chat-head-t">Asistente Nayarit Digital</span>
                <span className="chat-head-s">Potenciado por IA · Siempre disponible</span>
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
              { ic: '💬', t: 'Respuestas al instante, 24/7', d: 'Cualquier ciudadano pregunta sobre propuestas, trámites municipales o resultados — y recibe respuesta clara al momento, sin esperar oficinas.' },
              { ic: '🗳️', t: 'Escucha ciudadana inteligente', d: 'Cada conversación detecta las preocupaciones reales por colonia: agua, seguridad, baches. La campaña responde a lo que la gente realmente pide.' },
              { ic: '🌐', t: 'Habla tu idioma', d: 'Español, wixárika, náhuatl o cora: la IA responde en la lengua del ciudadano. Inclusión real para los pueblos originarios de Nayarit.' },
              { ic: '📊', t: 'Transparencia verificable', d: 'El asistente cita datos reales del gobierno municipal: obras, presupuestos, avances. No opina — informa con evidencia.' },
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
