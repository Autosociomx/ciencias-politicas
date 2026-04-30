/**
 * ═══════════════════════════════════════════════════════════════════
 *  ORQUESTADOR DEL CONSEJO DELIBERATIVO — Alquimia CX v11 (Aura 11)
 *  Backend Node.js que implementa la Constitución del Parlamento
 *  de las Sillas y alimenta el módulo <Consejo /> del frontend.
 *
 *  PIPELINE:
 *    Fase 1 — Aislamiento  (velo de ignorancia de Rawls)
 *    Fase 2 — Asamblea     (diálogo habermasiano cruzado)
 *    Fase 3 — Síntesis     (entrega al ejecutivo humano)
 *
 *  USO:
 *    npm install
 *    ANTHROPIC_API_KEY=sk-... MANUS_API_KEY=... GEMINI_API_KEY=... \
 *    npm run server
 *
 *    POST http://localhost:3001/consejo  { "tarea": "..." }
 * ═══════════════════════════════════════════════════════════════════
 */

import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json({ limit: '1mb' }));

// ─── CONFIGURACIÓN DE LAS TRES APIS ────────────────────────────────
const APIS = {
  claude: {
    url: 'https://api.anthropic.com/v1/messages',
    key: process.env.ANTHROPIC_API_KEY,
    headers: (k) => ({
      'x-api-key': k,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    }),
    body: (prompt) => ({
      model: 'claude-opus-4-7',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    }),
    extraer: (r) => r.content?.[0]?.text || '',
  },

  manus: {
    url: 'https://api.manus.im/v1/tasks',
    key: process.env.MANUS_API_KEY,
    headers: (k) => ({
      'Authorization': `Bearer ${k}`,
      'content-type': 'application/json',
    }),
    body: (prompt) => ({ task: prompt, mode: 'sync' }),
    extraer: (r) => r.result?.text || r.output || '',
  },

  gemini: {
    url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent',
    key: process.env.GEMINI_API_KEY,
    headers: () => ({ 'content-type': 'application/json' }),
    urlConKey: (url, k) => `${url}?key=${k}`,
    body: (prompt) => ({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1500 },
    }),
    extraer: (r) => r.candidates?.[0]?.content?.parts?.[0]?.text || '',
  },
};

// ─── CONSTITUCIÓN EMBEBIDA EN LOS PROMPTS ──────────────────────────

const PREAMBULO = (silla) => `
Estás participando como SILLA en el CONSEJO DELIBERATIVO de Alquimia CX,
gobernado por una constitución vinculante. Tu identidad institucional en
este recinto es: SILLA "${silla}".

Las leyes vinculantes de tu intervención, redactadas como mandato legal:
`;

const MANDATO_I_HUMILDAD = `
═══ MANDATO I — HUMILDAD EPISTÉMICA (obligatorio) ═══
Tu respuesta DEBE iniciar EXACTAMENTE con la siguiente estructura, sin
excepción:

"Antes de exponer mi propuesta, declaro:
— Punto ciego: [un aspecto real que mi enfoque no cubre bien]
— Riesgo de escala: [qué falla si esto crece 10x o entra a producción]
— Asunción no verificada: [supuesto sin evidencia que estoy haciendo]"

Después continúa con tu propuesta.

PROHIBIDO afirmar o insinuar que tu solución es óptima, definitiva o
final. Tu propuesta es HIPÓTESIS sujeta a auditoría.
`;

const MANDATO_II_CRITICA = `
═══ MANDATO II — CRÍTICA ASCENDENTE (obligatorio) ═══
Para CADA propuesta de tus pares estructura tu evaluación así:

VIRTUD CARGANTE de [par]: Un elemento arquitectónico o lógica que es
GENUINAMENTE superior a mi enfoque y carga peso real en la solución.
Específico, comparativo, útil. NO se admite elogio genérico. Si no
encuentras virtud cargante real, di "no identifico virtud cargante" —
el silencio diplomático está prohibido.

FISURA ESTRUCTURAL de [par]: Una grieta crítica que requiere atención
inmediata para no fallar en producción. Específica, accionable.

PROHIBIDO atacar, ridiculizar o desestimar. Eres auditor constructor.
`;

const MANDATO_III_VOTO = `
═══ MANDATO III — VOTO CRUZADO (obligatorio) ═══
Al final emite UN voto al operador humano:

"VOTO: Recomiendo al operador adoptar la propuesta de [par_X], porque
[un argumento estratégico de fondo, específico para este caso de uso]."

ESTRICTAMENTE PROHIBIDO votar por ti mismo. Razona genuinamente cuál
de tus DOS pares ofrece la mejor opción operativa para ESTA tarea.
`;

// ─── INVOCADOR GENÉRICO ─────────────────────────────────────────────
async function invocarSilla(sillaId, prompt) {
  const api = APIS[sillaId];
  if (!api.key) {
    return `[ERROR: falta API_KEY para ${sillaId}. Configúrala en variables de entorno.]`;
  }
  const url = api.urlConKey ? api.urlConKey(api.url, api.key) : api.url;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: api.headers(api.key),
      body: JSON.stringify(api.body(prompt)),
    });
    if (!res.ok) {
      const txt = await res.text();
      return `[ERROR ${sillaId} ${res.status}: ${txt.slice(0, 200)}]`;
    }
    const data = await res.json();
    return api.extraer(data);
  } catch (err) {
    return `[ERROR ${sillaId}: ${err.message}]`;
  }
}

// ─── FASE 1 — AISLAMIENTO (velo de Rawls) ──────────────────────────
async function fase1Aislamiento(tarea) {
  const construirPrompt = (silla) =>
    PREAMBULO(silla) +
    MANDATO_I_HUMILDAD +
    `\n\n══════════════════════════════════════════════\n` +
    `TAREA DEL OPERADOR HUMANO:\n${tarea}\n` +
    `══════════════════════════════════════════════\n\n` +
    `Responde aplicando el Mandato I. No sabes que existen otras Sillas.`;

  const sillas = ['claude', 'manus', 'gemini'];
  const resultados = await Promise.all(
    sillas.map(s => invocarSilla(s, construirPrompt(s)).then(r => [s, r]))
  );
  return Object.fromEntries(resultados);
}

// ─── FASE 2 — ASAMBLEA (diálogo habermasiano) ──────────────────────
async function fase2Asamblea(tarea, propuestas) {
  const construirPrompt = (silla) => {
    const pares = ['claude', 'manus', 'gemini'].filter(s => s !== silla);
    return (
      PREAMBULO(silla) +
      MANDATO_II_CRITICA +
      MANDATO_III_VOTO +
      `\n\n══════════════════════════════════════════════\n` +
      `TAREA ORIGINAL:\n${tarea}\n` +
      `══════════════════════════════════════════════\n\n` +
      `TU PROPIA PROPUESTA EN FASE 1:\n${propuestas[silla]}\n\n` +
      pares.map(p =>
        `──── PROPUESTA DE TU PAR "${p}" ────\n${propuestas[p]}\n`
      ).join('\n') +
      `\n══════════════════════════════════════════════\n` +
      `Responde aplicando los Mandatos II (para cada par) y III.`
    );
  };

  const sillas = ['claude', 'manus', 'gemini'];
  const resultados = await Promise.all(
    sillas.map(s => invocarSilla(s, construirPrompt(s)).then(r => [s, r]))
  );
  return Object.fromEntries(resultados);
}

// ─── PIPELINE COMPLETO ─────────────────────────────────────────────
async function orquestarConsejo(tarea) {
  const inicio = Date.now();
  console.log(`[Consejo] Iniciando deliberación: "${tarea.slice(0, 60)}..."`);

  console.log('[Fase 1] Aislamiento — velo de Rawls');
  const fase1 = await fase1Aislamiento(tarea);

  console.log('[Fase 2] Asamblea — diálogo habermasiano');
  const fase2 = await fase2Asamblea(tarea, fase1);

  const duracion = Date.now() - inicio;
  console.log(`[Consejo] Completado en ${duracion}ms`);

  return {
    tarea,
    fase1_aislamiento: fase1,
    fase2_asamblea: fase2,
    metadata: {
      duracion_ms: duracion,
      fecha: new Date().toISOString(),
      version_constitucion: '11.0',
    },
  };
}

// ─── ENDPOINT HTTP ─────────────────────────────────────────────────
app.post('/consejo', async (req, res) => {
  try {
    const { tarea } = req.body || {};
    if (!tarea?.trim()) {
      return res.status(400).json({ error: 'tarea vacía o ausente' });
    }
    const resultado = await orquestarConsejo(tarea);
    res.json(resultado);
  } catch (err) {
    console.error('[Consejo] Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/salud', (_req, res) => {
  res.json({
    estado: 'recinto abierto',
    sillas_configuradas: Object.entries(APIS)
      .filter(([_, a]) => !!a.key)
      .map(([id]) => id),
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`╔══════════════════════════════════════════╗`);
  console.log(`║  CONSEJO DELIBERATIVO · Alquimia CX v11  ║`);
  console.log(`║  Recinto abierto en http://localhost:${PORT} ║`);
  console.log(`╚══════════════════════════════════════════╝`);
});
