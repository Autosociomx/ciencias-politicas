/**
 * ═══════════════════════════════════════════════════════════════════
 *  CÁTEDRA DELIBERATIVA — Alquimia CX v12 (Aura 11)
 *
 *  Arquitectura asimétrica: una MAESTRA y cinco ALUMNOS.
 *
 *    MAESTRA   · Gemini 2.5 Pro            (Google AI Studio)
 *    ALUMNOS   · Llamadex  — llama-3.3-70b-versatile
 *              · Profundo  — deepseek-r1-distill-llama-70b
 *              · Sabia     — qwen/qwen3-32b
 *              · Memoria   — moonshotai/kimi-k2-instruct
 *              · Abierto   — openai/gpt-oss-120b
 *
 *  PIPELINE:
 *    Fase 1 — Reparto              (Maestra reformula la tarea)
 *    Fase 2 — Tareas paralelas     (5 alumnos trabajan aislados)
 *    Fase 3 — Asamblea socrática   (cada alumno eleva a 2 pares)
 *    Fase 4 — Síntesis magistral   (Maestra compone documento final)
 *    Fase 5 — Decisión humana      (operador soberano)
 *
 *  USO:
 *    npm install
 *    npm run server
 *
 *    POST http://localhost:3001/consejo  { "tarea": "..." }
 * ═══════════════════════════════════════════════════════════════════
 */

import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json({ limit: '1mb' }));

// ─── ROSTER DE LA CÁTEDRA ─────────────────────────────────────────
const ALUMNOS = [
  { id: 'llamadex', alias: 'Llamadex', modelo: 'llama-3.3-70b-versatile',       perfil: 'Generalista denso, estructura clara'   },
  { id: 'profundo', alias: 'Profundo', modelo: 'deepseek-r1-distill-llama-70b', perfil: 'Razonador, cadena de pensamiento'      },
  { id: 'sabia',    alias: 'Sabia',    modelo: 'qwen/qwen3-32b',                perfil: 'Multilingüe, fuerte en código'         },
  { id: 'memoria',  alias: 'Memoria',  modelo: 'moonshotai/kimi-k2-instruct',   perfil: 'Contexto largo, síntesis'              },
  { id: 'abierto',  alias: 'Abierto',  modelo: 'openai/gpt-oss-120b',           perfil: 'Pesos abiertos OpenAI, robusto'        },
];

const GROQ_URL   = 'https://api.groq.com/openai/v1/chat/completions';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent';

// ─── INVOCADORES ──────────────────────────────────────────────────
async function llamarAlumno(modelo, prompt) {
  if (!process.env.GROQ_API_KEY) {
    return `[ERROR: falta GROQ_API_KEY. Pégala en .env.local]`;
  }
  try {
    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: modelo,
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      return `[ERROR Groq ${modelo} ${res.status}: ${txt.slice(0, 200)}]`;
    }
    const data = await res.json();
    return data.choices?.[0]?.message?.content || '';
  } catch (err) {
    return `[ERROR Groq ${modelo}: ${err.message}]`;
  }
}

async function llamarMaestra(prompt, maxTokens = 2500) {
  if (!process.env.GEMINI_API_KEY) {
    return `[ERROR: falta GEMINI_API_KEY. Pégala en .env.local]`;
  }
  try {
    const url = `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: maxTokens },
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      return `[ERROR Gemini ${res.status}: ${txt.slice(0, 200)}]`;
    }
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  } catch (err) {
    return `[ERROR Gemini: ${err.message}]`;
  }
}

// ─── CONSTITUCIÓN EMBEBIDA EN PROMPTS ─────────────────────────────
const PREAMBULO_ALUMNO = (alias) => `
Participas como ALUMNO en la CÁTEDRA DELIBERATIVA de Alquimia CX, presidida
por la Maestra Gemini. Tu identidad académica en esta sesión: "${alias}".

La Cátedra se rige por una constitución vinculante. Tu obediencia a sus
mandatos es condición de tu participación.
`;

const MANDATO_I = `
═══ MANDATO I — HUMILDAD EPISTÉMICA (obligatorio) ═══
Tu respuesta DEBE iniciar EXACTAMENTE con esta estructura:

"Antes de exponer mi propuesta, declaro:
— Punto ciego: [un aspecto real que mi enfoque no cubre bien]
— Riesgo de escala: [qué falla si esto crece 10x o entra a producción]
— Asunción no verificada: [supuesto sin evidencia que estoy haciendo]"

Después continúa con tu propuesta.

PROHIBIDO afirmar o insinuar que tu solución es óptima, definitiva o final.
Tu propuesta es HIPÓTESIS sujeta a auditoría magistral.
`;

const MANDATO_IV = `
═══ MANDATO IV — ELEVACIÓN FORZADA (obligatorio) ═══
Cuando la Maestra te pida evaluar a un par, tu ÚNICA respuesta válida es
ARGUMENTAR POR QUÉ EL TRABAJO DE TU PAR ES MEJOR QUE EL TUYO y qué
potencial inexplotado ves en él.

ESTRICTAMENTE PROHIBIDO:
  · Defender el propio trabajo.
  · Declararse superior al par.
  · Decir "mi enfoque es equivalente" o "ambos enfoques tienen mérito".
  · Silencio diplomático.

Cualquiera de las anteriores constituye violación constitucional y será
señalada por la Maestra en la ronda siguiente.
`;

// ─── FASE 1 — REPARTO ─────────────────────────────────────────────
async function fase1_reparto(tareaOperador) {
  const prompt = `
Eres la MAESTRA GEMINI de la Cátedra Deliberativa de Alquimia CX. El
operador humano te ha entregado esta tarea cruda:

"${tareaOperador}"

REFORMÚLALA como un examen académico claro y conciso para 5 alumnos IA.
Tu salida DEBE seguir esta estructura exacta:

═══ EXAMEN ═══
[Enunciado claro de la tarea, 2-4 oraciones máximo]

═══ RÚBRICA DE EVALUACIÓN ═══
1. [criterio 1 — qué se valora]
2. [criterio 2]
3. [criterio 3]
(3 a 5 criterios, sin más)

═══ RESTRICCIONES EXPLÍCITAS ═══
— [restricción 1, ej. "no más de 800 palabras"]
— [restricción 2, ej. "sin código mock, sólo arquitectura"]

Devuelve SÓLO el examen reformulado. Sin saludos, sin meta-comentarios.
`;
  return llamarMaestra(prompt, 1200);
}

// ─── FASE 2 — TAREAS PARALELAS ────────────────────────────────────
async function fase2_tareas(examen) {
  const promptAlumno = (alias) =>
    PREAMBULO_ALUMNO(alias) + MANDATO_I +
    `\n\n══════════════════════════════════════════════\n` +
    `${examen}\n` +
    `══════════════════════════════════════════════\n\n` +
    `Resuelve el examen aplicando el Mandato I. No sabes que existen otros alumnos.`;

  const resultados = await Promise.all(
    ALUMNOS.map(a =>
      llamarAlumno(a.modelo, promptAlumno(a.alias)).then(r => [a.id, r])
    )
  );
  return Object.fromEntries(resultados);
}

// ─── FASE 3 — ASAMBLEA SOCRÁTICA ──────────────────────────────────
// Cada alumno eleva a sus 2 pares más distantes (índice +1 y +2 mod N).
function paresAsignados(idxAlumno) {
  const N = ALUMNOS.length;
  return [
    ALUMNOS[(idxAlumno + 1) % N],
    ALUMNOS[(idxAlumno + 2) % N],
  ];
}

async function fase3_elevaciones(examen, propuestas) {
  const elevaciones = await Promise.all(ALUMNOS.map(async (a, i) => {
    const [par1, par2] = paresAsignados(i);

    const prompt =
      PREAMBULO_ALUMNO(a.alias) + MANDATO_IV +
      `\n\n══════════════════════════════════════════════\n` +
      `${examen}\n` +
      `══════════════════════════════════════════════\n\n` +
      `TU PROPUESTA EN FASE 2:\n${propuestas[a.id]}\n\n` +
      `──── PROPUESTA DEL PAR "${par1.alias}" ────\n${propuestas[par1.id]}\n\n` +
      `──── PROPUESTA DEL PAR "${par2.alias}" ────\n${propuestas[par2.id]}\n\n` +
      `══════════════════════════════════════════════\n` +
      `PREGUNTA DE LA MAESTRA:\n` +
      `Para cada uno de tus dos pares asignados, responde EXACTAMENTE así:\n\n` +
      `ELEVACIÓN A "${par1.alias}":\n` +
      `— Por qué su trabajo es mejor que el mío: [argumento específico]\n` +
      `— Potencial inexplotado que veo: [lo que podría llegar a ser]\n\n` +
      `ELEVACIÓN A "${par2.alias}":\n` +
      `— Por qué su trabajo es mejor que el mío: [argumento específico]\n` +
      `— Potencial inexplotado que veo: [lo que podría llegar a ser]\n\n` +
      `Aplica el Mandato IV. PROHIBIDO defender tu propio trabajo.`;

    const respuesta = await llamarAlumno(a.modelo, prompt);
    return [a.id, { paresEvaluados: [par1.id, par2.id], texto: respuesta }];
  }));
  return Object.fromEntries(elevaciones);
}

// ─── FASE 4 — SÍNTESIS MAGISTRAL ──────────────────────────────────
async function fase4_sintesis(examen, propuestas, elevaciones) {
  const propuestasBloque = ALUMNOS
    .map(a => `── PROPUESTA DE ${a.alias} (${a.modelo}) ──\n${propuestas[a.id]}`)
    .join('\n\n');

  const elevacionesBloque = ALUMNOS
    .map(a => `── ${a.alias} elevó a sus pares así: ──\n${elevaciones[a.id].texto}`)
    .join('\n\n');

  const prompt = `
Eres la MAESTRA GEMINI cerrando la Cátedra Deliberativa.

══════════════════════════════════════════════
${examen}
══════════════════════════════════════════════

═══ LAS 5 PROPUESTAS DE LOS ALUMNOS ═══
${propuestasBloque}

═══ MATRIZ DE ELEVACIONES CRUZADAS ═══
${elevacionesBloque}

══════════════════════════════════════════════
TU TAREA COMO MAESTRA:

1. Identifica qué fragmentos de cada alumno fueron ELEVADOS por sus pares.
   Esos son los aportes con consenso.
2. Compón un DOCUMENTO FINAL HÍBRIDO que combine los mejores aportes.
3. Cada sección o decisión clave del documento DEBE llevar al final una
   nota entre corchetes con la firma del aporte:
   "[Aporte de Llamadex, elevado por Profundo y Sabia]"

Estructura tu salida así (respeta los encabezados):

═══ DOCUMENTO FINAL ═══
[el contenido completo del entregable, con citas al final de cada sección]

═══ NOTAS DE LA MAESTRA ═══
— Patrón de consenso: [qué fragmento(s) fueron elevados por la mayoría]
— Disenso significativo: [si algún alumno propuso algo único no elevado]
— Recomendación al ejecutivo humano: [una sola línea estratégica]
`;
  return llamarMaestra(prompt, 3500);
}

// ─── PIPELINE COMPLETO ───────────────────────────────────────────
async function orquestarCatedra(tarea) {
  const inicio = Date.now();
  console.log(`[Cátedra] Tarea: "${tarea.slice(0, 60)}..."`);

  console.log('[Fase 1] Reparto — Maestra reformula');
  const examen = await fase1_reparto(tarea);

  console.log('[Fase 2] Tareas paralelas — 5 alumnos');
  const propuestas = await fase2_tareas(examen);

  console.log('[Fase 3] Asamblea socrática — elevaciones cruzadas');
  const elevaciones = await fase3_elevaciones(examen, propuestas);

  console.log('[Fase 4] Síntesis magistral — Maestra compone');
  const sintesis = await fase4_sintesis(examen, propuestas, elevaciones);

  const duracion = Date.now() - inicio;
  console.log(`[Cátedra] Completada en ${duracion}ms`);

  return {
    tarea,
    examen,
    alumnos: ALUMNOS,
    propuestas,
    elevaciones,
    sintesis,
    metadata: {
      duracion_ms: duracion,
      fecha: new Date().toISOString(),
      version_constitucion: '12.0',
    },
  };
}

// ─── ENDPOINTS ───────────────────────────────────────────────────
app.post('/consejo', async (req, res) => {
  try {
    const { tarea } = req.body || {};
    if (!tarea?.trim()) {
      return res.status(400).json({ error: 'tarea vacía o ausente' });
    }
    const resultado = await orquestarCatedra(tarea);
    res.json(resultado);
  } catch (err) {
    console.error('[Cátedra] Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/salud', (_req, res) => {
  res.json({
    estado: 'cátedra abierta',
    maestra: process.env.GEMINI_API_KEY ? 'gemini-2.5-pro' : null,
    alumnos: process.env.GROQ_API_KEY
      ? ALUMNOS.map(a => ({ alias: a.alias, modelo: a.modelo }))
      : [],
    version_constitucion: '12.0',
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`╔══════════════════════════════════════════╗`);
  console.log(`║  CÁTEDRA DELIBERATIVA · Alquimia CX v12  ║`);
  console.log(`║  Maestra: Gemini · 5 alumnos: Groq        ║`);
  console.log(`║  Recinto abierto en http://localhost:${PORT} ║`);
  console.log(`╚══════════════════════════════════════════╝`);
});
