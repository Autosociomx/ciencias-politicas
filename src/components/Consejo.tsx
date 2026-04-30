import React, { useState } from 'react';
import { Bot, Sparkles, Zap, GitCommit, Search, CheckCircle2, AlertTriangle, Layers, Award } from 'lucide-react';

interface AgentVote {
  targetId: string;
  reason: string;
}

interface AgentCritique {
  targetId: string;
  targetName: string;
  pros: string;
  cons: string;
}

interface AgentProposal {
  id: string;
  name: string;
  icon: React.ReactNode;
  colorClass: string;
  borderClass: string;
  ringClass: string;
  bgClass: string;
  bgLighter: string;
  hoverTextClass: string;
  hoverBgClass: string;
  solutionSummary: string;
  deliverableSnippet: string;
  critiques: AgentCritique[];
  vote: AgentVote;
}

const mockTask = "Crear un módulo unificado de autenticación en Node.js que soporte JWT y OAuth2, con soporte para refresh tokens en Redis. Debe ser altamente seguro y estar listo para integrarse en un proyecto Express.";

const MOCK_AGENTS: AgentProposal[] = [
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    icon: <Search className="w-5 h-5 text-purple-400" />,
    colorClass: "text-purple-400",
    borderClass: "border-purple-500/50",
    ringClass: "ring-purple-500/50",
    bgClass: "bg-purple-600",
    bgLighter: "bg-purple-500/10",
    hoverTextClass: "hover:text-purple-400",
    hoverBgClass: "hover:bg-purple-600/20",
    solutionSummary: "Enfoque arquitectónico y seguro. Implementa middlewares robustos para validar tokens y un patrón claro para interactuar con Redis evitando Race Conditions.",
    deliverableSnippet: `// Middleware JWT con rotación segura
export const requireAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const payload = await verifyToken(token);
    // Verificación contra blacklist en Redis
    const isRevoked = await redis.get(\`revoked:\${token}\`);
    if (isRevoked) throw new Error('Token revocado');
    
    req.user = payload;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token expirado', 
        code: 'TOKEN_EXPIRED' 
      });
    }
    return res.status(401).json({ error: 'Token inválido' });
  }
};`,
    critiques: [
      {
        targetId: "llama",
        targetName: "Llama",
        pros: "Generó los scripts de Docker para levantar Redis, lo cual facilita mucho la prueba local.",
        cons: "Su código Express asume configuraciones globales y no maneja bien la inyección de dependencias para testing."
      },
      {
        targetId: "gemini",
        targetName: "Gemini",
        pros: "Excelente manejo de los scopes de OAuth2 y llamadas optimizadas.",
        cons: "No implementó la invalidación forzada de tokens en Redis al cerrar sesión."
      }
    ],
    vote: {
      targetId: "gemini",
      reason: "Elegiría a Gemini. Su enfoque modular para OAuth2 me parece más maduro que el de Llama."
    }
  },
  {
    id: "llama",
    name: "Meta Llama 3",
    icon: <GitCommit className="w-5 h-5 text-emerald-400" />,
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-500/50",
    ringClass: "ring-emerald-500/50",
    bgClass: "bg-emerald-600",
    bgLighter: "bg-emerald-500/10",
    hoverTextClass: "hover:text-emerald-400",
    hoverBgClass: "hover:bg-emerald-600/20",
    solutionSummary: "Orientado a ejecución. Proporciona los archivos de configuración, el código funcional, e incluye un `docker-compose.yml` para levantar Redis de inmediato.",
    deliverableSnippet: `// Setup de Redis con manejo de conexión y reconexión automática
import { createClient } from 'redis';

export const setupRedis = async () => {
  const client = createClient({ url: process.env.REDIS_URL });
  
  client.on('error', (err) => console.error('Redis Client Error', err));
  client.on('connect', () => console.log('Redis conectado para auth'));
  
  await client.connect();
  return client;
};

// docker-compose up -d redis`,
    critiques: [
      {
        targetId: "claude",
        targetName: "Claude",
        pros: "Su middleware de verificación JWT maneja las excepciones de forma más elegante que mi propuesta.",
        cons: "Escribe demasiado boilerplate para casos de uso simples."
      },
      {
        targetId: "gemini",
        targetName: "Gemini",
        pros: "Integra muy bien los adapters de Google/GitHub.",
        cons: "Su código solo describe los pasos, yo creo los archivos listos para ejecutar."
      }
    ],
    vote: {
      targetId: "claude",
      reason: "Elegiría a Claude. Su seguridad a nivel de middleware en el flujo base es más estricta, lo cual es crítico aquí."
    }
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    colorClass: "text-blue-400",
    borderClass: "border-blue-500/50",
    ringClass: "ring-blue-500/50",
    bgClass: "bg-blue-600",
    bgLighter: "bg-blue-500/10",
    hoverTextClass: "hover:text-blue-400",
    hoverBgClass: "hover:bg-blue-600/20",
    solutionSummary: "Enfoque exhaustivo y optimizado. Cubre múltiples proveedores de OAuth2 usando un Factory pattern y documenta casos de límite (rate limiting).",
    deliverableSnippet: `// Factory Pattern para OAuth Providers
class OAuthProviderFactory {
  static getProvider(name: string) {
    switch(name) {
      case 'google': return new GoogleAuthAdapter();
      case 'github': return new GithubAuthAdapter();
      default: throw new Error('Provider no soportado');
    }
  }
}

// Implementación con soporte paralelo para PKCE y Rate Limiting
export const handleOAuthCallback = async (req, res) => {
  const { code, state, providerName } = req.query;
  
  // Rate limiting preventivo (Ej: Redis token bucket)
  await checkRateLimit(req.ip, 'oauth_callback');

  const provider = OAuthProviderFactory.getProvider(providerName);
  const user = await provider.exchangeCode(code);
  
  return generateAuthTokens(user);
};`,
    critiques: [
      {
        targetId: "claude",
        targetName: "Claude",
        pros: "Incluyó control de listas negras en Redis explícitamente en el interceptor, muy seguro.",
        cons: "Su código es algo rígido si queremos añadir proveedores de OAuth2 de terceros después."
      },
      {
        targetId: "llama",
        targetName: "Llama",
        pros: "Su entorno local en Docker hace el setup inicial en 0 minutos.",
        cons: "Su factory no es tipado estricto (any) y abre la puerta a errores de runtime."
      }
    ],
    vote: {
      targetId: "claude",
      reason: "Elegiría a Claude. Su arquitectura previene explícitamente vulnerabilidades. Yo aporté conectores extra, pero su base es más resiliente."
    }
  }
];

export default function Consejo() {
  const [selectedWinner, setSelectedWinner] = useState<string | null>(null);

  const handleVote = (id: string) => {
    setSelectedWinner(id);
    // Here you would save the vote to backend/history
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans flex flex-col p-6 selection:bg-indigo-500/30">
      
      {/* HEADER TAREA Y CONTEXTO */}
      <header className="max-w-7xl mx-auto w-full flex flex-col mb-6 border-b border-zinc-800 pb-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          <div className="flex-1">
            <h1 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Protocolo de Deliberación</h1>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-indigo-400 hidden sm:block" />
              <span className="text-2xl font-bold tracking-tight text-[#fafafa]">Consejo Directivo</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">Orquestación Central</span>
            </div>
            
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex gap-4 items-start w-full">
              <div className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 mt-1">
                <Bot className="w-5 h-5" />
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-zinc-500 uppercase font-bold tracking-widest mb-1.5 flex items-center gap-2">
                  <span>Misión Asignada</span>
                  <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full text-[9px]">ID_4092</span>
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {mockTask}
                </p>
              </div>
            </div>
          </div>

          {/* VECTORES DE ALQUIMIA INYECTADOS */}
          <div className="lg:w-[380px] flex-shrink-0 bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
             <p className="text-[10px] text-indigo-400/80 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Memoria Activa (Matriz 500x9)
             </p>
             <div className="space-y-2">
               <div className="bg-black/40 border border-indigo-500/10 rounded-lg p-2.5 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_theme(colors.emerald.500)]"></div>
                 <span className="text-xs text-zinc-300 font-medium">Vector_42: Tolerancia Cero a Fricción UI</span>
               </div>
               <div className="bg-black/40 border border-indigo-500/10 rounded-lg p-2.5 flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_theme(colors.orange.500)]"></div>
                 <span className="text-xs text-zinc-300 font-medium">Cruce_9: Escalabilidad Microservicios</span>
               </div>
               <div className="bg-black/40 border border-indigo-500/10 rounded-lg p-2.5 flex flex-col gap-1">
                 <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_theme(colors.purple.500)]"></div>
                  <span className="text-xs text-zinc-300 font-medium">Protocolo_De_Sillas: Priorizar Seguridad</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* TRES COLUMNAS */}
      <main className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">
        {MOCK_AGENTS.map((agent) => {
          const isSelected = selectedWinner === agent.id;
          
          return (
            <div 
              key={agent.id}
              className={`flex flex-col bg-zinc-900/50 border rounded-xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-300 ${isSelected ? agent.borderClass : 'border-zinc-800'} hover:border-zinc-700/80 focus-within:ring-2 focus-within:${agent.ringClass}`}
            >
              {/* AGENT HEADER */}
              <div className={`p-4 border-b border-zinc-800 ${agent.bgLighter} flex justify-between items-center`}>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:block">{agent.icon}</div>
                  <span className={`font-bold uppercase ${agent.colorClass}`}>{agent.name}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">{agent.id}</span>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="text-sm text-zinc-400 leading-relaxed mb-6 italic">
                  "{agent.solutionSummary}"
                </div>

                {/* PROPUESTA / CÓDIGO */}
                <div className="relative border border-zinc-800/80 bg-black/40 rounded-lg overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 bg-zinc-900/50 text-[10px] text-zinc-500 px-2 py-1 uppercase tracking-wider rounded-bl-lg border-b border-l border-zinc-800/80">Snippet</div>
                  <pre className="p-4 overflow-x-auto text-[11px] font-mono text-zinc-300 leading-snug">
                    {agent.deliverableSnippet}
                  </pre>
                </div>

                {/* CRÍTICAS RECIBIDAS */}
                <div className="space-y-4">
                  {agent.critiques.map((critique, idx) => {
                     let criticBorder = "border-zinc-700";
                     let criticColor = "text-zinc-500";
                     if (critique.targetId === "claude") { criticBorder = "border-purple-500"; criticColor = "text-purple-500"; }
                     if (critique.targetId === "llama") { criticBorder = "border-emerald-500"; criticColor = "text-emerald-500"; }
                     if (critique.targetId === "gemini") { criticBorder = "border-blue-500"; criticColor = "text-blue-500"; }

                     return (
                       <div key={idx} className={`bg-zinc-900 p-3 rounded-lg border-l-2 ${criticBorder}`}>
                         <div className="flex items-center gap-2 mb-1.5">
                           <span className={`text-[9px] font-bold ${criticColor} uppercase`}>Crítica de {critique.targetName}</span>
                         </div>
                         <div className="space-y-1.5">
                           <div className="flex items-start gap-2">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500/80 mt-0.5 flex-shrink-0" />
                             <span className="text-zinc-300 text-xs">{critique.pros}</span>
                           </div>
                           <div className="flex items-start gap-2">
                             <AlertTriangle className="w-3 h-3 text-zinc-500 mt-0.5 flex-shrink-0" />
                             <span className="text-zinc-400 text-xs italic">{critique.cons}</span>
                           </div>
                         </div>
                       </div>
                     );
                  })}
                </div>
              </div>

              {/* VOTO / RECOMENDACIÓN */}
              <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest hidden sm:inline">Voto de {agent.name.split(' ')[0]}:</span>
                <span className={`text-xs font-semibold px-2 py-1 ${agent.bgLighter} ${agent.colorClass} rounded uppercase flex-shrink-0`}>
                  ELEGIRÍA A {agent.vote.targetId}
                </span>
              </div>
            </div>
          );
        })}
      </main>

      {/* BARRA INFERIOR DE ORQUESTACIÓN */}
      <footer className="max-w-7xl mx-auto mt-6 p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Decisión Humana Requerida</span>
            <span className="text-xs text-zinc-500">Aprobar manifiesto para enviar a la Pista de Producción</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-3 items-center">
          <div className="hidden lg:flex gap-3">
            {MOCK_AGENTS.map(agent => (
              <button 
                key={`btn-${agent.id}`}
                onClick={() => handleVote(agent.id)}
                className={`px-4 py-2 bg-zinc-800 ${agent.hoverBgClass} ${agent.hoverTextClass} border border-zinc-700 rounded-lg text-sm font-semibold transition-all duration-200 ${selectedWinner === agent.id ? `ring-1 ring-zinc-500 ${agent.colorClass}` : 'text-zinc-400'}`}
              >
                Aprobar {agent.name.split(' ')[0]}
              </button>
            ))}
            <div className="w-[1px] bg-zinc-700 py-4 mx-2"></div>
          </div>
          <button
            onClick={() => handleVote('hybrid')}
            className={`px-6 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-lg text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center gap-2
              ${selectedWinner === 'hybrid'
                ? 'ring-2 ring-white ring-offset-2 ring-offset-zinc-900'
                : ''
              }
            `}
          >
            <Zap className="w-4 h-4" />
            Orquestar Combinación Híbrida
          </button>
        </div>
      </footer>

    </div>
  );
}
