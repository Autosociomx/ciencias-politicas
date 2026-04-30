<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cátedra Deliberativa · Alquimia CX v12

Una **Maestra** (Gemini) y **5 Alumnos** (modelos Groq) deliberan tu tarea.
Documento final híbrido, auditado, firmado, en menos de un minuto.

> Lee la [`CONSTITUCION.md`](./CONSTITUCION.md) para entender los Mandatos
> que rigen al recinto.

---

## Encender la Cátedra en 3 pasos (a prueba de niños)

### ① Pega tus dos claves

Abre el archivo **`.env.local`** y pega tus claves entre las comillas. Es lo único que tienes que tocar.

- **Clave de Groq** (los 5 alumnos) — sácala en https://console.groq.com/keys
- **Clave de Google AI Studio** (la Maestra Gemini) — sácala en https://aistudio.google.com/apikey

Guarda el archivo. Listo.

### ② Instala dependencias (sólo la primera vez)

```bash
npm install
```

### ③ Enciende dos terminales

**Terminal A — la Cátedra (backend):**
```bash
npm run server
```
Verás: `Recinto abierto en http://localhost:3001`

**Terminal B — la pantalla (frontend):**
```bash
npm run dev
```
Abre **http://localhost:3000** en tu navegador.

Escribe una tarea, pulsa **Convocar Cátedra**, espera ~15 segundos, y recibe un documento sintetizado por 6 IAs.

---

## Arquitectura de la Cátedra

```
TÚ → "Diseña un producto digital de trading"
              │
              ▼
   ┌──────────────────────────┐
   │ Maestra Gemini · FASE 1  │ Reformula la tarea como examen
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │ 5 Alumnos Groq · FASE 2  │ Trabajan en paralelo, aislados
   │   Llamadex · Profundo ·  │
   │   Sabia · Memoria ·      │
   │   Abierto                │
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │ Asamblea · FASE 3        │ Cada alumno eleva a 2 pares
   │   (no puede defenderse,  │ (Mandato IV: elevación forzada)
   │   sólo argumentar por    │
   │   qué su par es mejor)   │
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │ Maestra Gemini · FASE 4  │ Síntesis magistral firmada
   └──────────┬───────────────┘
              │
              ▼
            TÚ — decisión soberana (FASE 5)
```

## Endpoints del backend

- `GET  /salud`   → estado de la cátedra y modelos configurados
- `POST /consejo` → cuerpo `{ "tarea": "..." }` → devuelve `{ examen, propuestas, elevaciones, sintesis }`

## Cambiar el roster de alumnos

Edita el array `ALUMNOS` en
[`server/consejo_orquestador.js`](./server/consejo_orquestador.js).
Puedes usar cualquier modelo del catálogo de Groq:
https://console.groq.com/docs/models

---

## Stack

- Frontend: Vite + React 19 + Tailwind 4 + lucide-react
- Backend:  Node 18+ + Express + dotenv (ESM nativo)
- IAs:      Gemini 2.5 Pro (vía Google AI Studio) + 5 modelos vía Groq
