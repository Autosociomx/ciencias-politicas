export type AppView =
  | 'landing'
  | 'dashboard'
  | 'mod-tesoreria'
  | 'mod-obra-publica'
  | 'mod-reportes'
  | 'mod-salud-simi'
  | 'mod-agrovision'
  | 'mod-iot-ambiental'
  | 'mod-seguridad-digital'
  | 'mod-nayarit-id'
  | 'mod-ventanilla-unica'
  | 'consejo';

export interface ModuloKPI {
  label: string;
  actual: string;
  meta6m: string;
  meta18m: string;
}

export interface Modulo {
  id: AppView;
  nombre: string;
  icono: string;
  fase: 1 | 2 | 3;
  estado: 'activo' | 'en-desarrollo' | 'planeado';
  dependencia: string;
  descripcion: string;
  detalle: string;
  color: string;
  instalacion: number;
  mtoMensual: number;
  kpis: ModuloKPI[];
}

export const MODULOS: Modulo[] = [
  {
    id: 'mod-tesoreria',
    nombre: 'Pagos Digitales',
    icono: '💳',
    fase: 1,
    estado: 'activo',
    dependencia: 'Tesorería Municipal — Puebla No. 218 Norte, Col. Centro',
    descripcion: 'Predial + refrendo 100% digital con recordatorio WhatsApp. +25% recaudación proyectada.',
    detalle: 'Predial 100% digital con recordatorio automático vía WhatsApp (30, 15 y 5 días antes del vencimiento). Refrendo vehicular en línea sin necesidad de ir a ventanilla. Panel de Tesorero con recaudación en tiempo real por concepto. Integración con portal predial.tepic.gob.mx existente. Descuento automático por pago anticipado.',
    color: '#E5007A',
    instalacion: 18000,
    mtoMensual: 4500,
    kpis: [
      { label: '% pagos de predial digitales', actual: '5%', meta6m: '40%', meta18m: '80%' },
      { label: 'Recaudación vs año anterior', actual: 'Base', meta6m: '+20%', meta18m: '+35%' },
      { label: 'Reducción filas presenciales', actual: '0%', meta6m: '60%', meta18m: '85%' },
    ],
  },
  {
    id: 'mod-obra-publica',
    nombre: 'Gobernanza Digital',
    icono: '🏗️',
    fase: 1,
    estado: 'activo',
    dependencia: 'Dirección de Obras Públicas — Mallorca #60, Fracc. Ciudad del Valle',
    descripcion: 'Dashboard público: contratos, avance semanal, alerta automática si obra se detiene.',
    detalle: 'Dashboard público en tepic.gob.mx: cada obra con contrato, monto, contratista, fecha inicio y avance semanal. Foto geolocada por semana. Alerta automática si una obra supera 2 semanas sin actualización o excede 10% del presupuesto. Niveles: ciudadano (lectura), supervisor (carga), Presidenta (auditoría). Reporte semanal automático a Contraloría.',
    color: '#00BCD4',
    instalacion: 22000,
    mtoMensual: 5000,
    kpis: [
      { label: 'Obras con trazabilidad pública', actual: '0', meta6m: '100%', meta18m: '100% + histórico' },
      { label: 'Alertas automáticas activas', actual: '0', meta6m: 'Todas', meta18m: 'Todas' },
      { label: 'Reportes a Contraloría', actual: 'Manual mensual', meta6m: 'Auto semanal', meta18m: 'Auto semanal' },
    ],
  },
  {
    id: 'mod-reportes',
    nombre: 'Reportes Ciudadanos IA',
    icono: '📱',
    fase: 1,
    estado: 'activo',
    dependencia: 'Dirección de Servicios Públicos — Alumbrado, Aseo y Parques',
    descripcion: 'WhatsApp bot: bache, alumbrado, aseo — geolocalizado y clasificado por IA.',
    detalle: 'WhatsApp oficial del municipio: ciudadano envía foto + texto. IA clasifica automáticamente: bache, alumbrado roto, basura acumulada, árbol caído, otro. Asignación automática con geolocalización. El ciudadano recibe número de folio y actualizaciones hasta cierre. Panel por subdirector con cola priorizada.',
    color: '#FFB300',
    instalacion: 15000,
    mtoMensual: 3500,
    kpis: [
      { label: 'Reportes resueltos / mes', actual: 'Manual sin seguimiento', meta6m: '500', meta18m: '2,000' },
      { label: 'Tiempo promedio resolución', actual: 'Sin medir', meta6m: '< 72h', meta18m: '< 48h' },
      { label: 'Satisfacción ciudadana', actual: 'Sin medir', meta6m: '> 70%', meta18m: '> 85%' },
    ],
  },
  {
    id: 'mod-salud-simi',
    nombre: 'SaludSimi Triaje IA',
    icono: '💚',
    fase: 2,
    estado: 'en-desarrollo',
    dependencia: 'Dirección de Bienestar Social — Revolución Social 303, Col. Menchaca',
    descripcion: 'Triaje médico con IA en módulos DIF. Funciona 100% offline para colonias sin señal.',
    detalle: 'Triaje médico con IA en módulos DIF y centros comunitarios. Funciona 100% offline — crítico para colonias periféricas sin señal estable. Manchester Triage System + CIE-11 + voz en español mexicano. El promotor social lleva la tablet. Protocolo de crisis automático + referencia al IMSS con urgencia calificada.',
    color: '#00873E',
    instalacion: 12000,
    mtoMensual: 2800,
    kpis: [
      { label: 'Centros con SaludSimi activo', actual: '0', meta6m: '5 módulos DIF', meta18m: '20+' },
      { label: 'Triajes realizados / mes', actual: '0', meta6m: '500', meta18m: '3,000' },
      { label: 'Colonias offline cubiertas', actual: '0', meta6m: '5', meta18m: '20' },
    ],
  },
  {
    id: 'mod-agrovision',
    nombre: 'AgroVisión Satelital',
    icono: '🌽',
    fase: 2,
    estado: 'en-desarrollo',
    dependencia: 'Dir. Gral. de Ordenamiento Territorial — Praxedis Guerrero #210',
    descripcion: 'Mapeo NDVI Sentinel-2 de suelo periurbano. Motor de recomendación de cultivos por zona.',
    detalle: 'Mapeo satelital Sentinel-2 (ESA, gratuito) de zonas agrícolas periurbanas del municipio de Tepic. Índices NDVI para identificar suelo subutilizado con potencial productivo. Motor de recomendación de cultivos: tipo de suelo + altitud + precipitación histórica. Mapa público interactivo. Base para programa de huertos urbanos y agricultura periurbana.',
    color: '#00873E',
    instalacion: 20000,
    mtoMensual: 4200,
    kpis: [
      { label: 'Hectáreas mapeadas', actual: '0', meta6m: '500', meta18m: '2,000' },
      { label: 'Productores con recomendación', actual: '0', meta6m: '50', meta18m: '500' },
      { label: 'Mapa público activo', actual: 'No', meta6m: 'Sí', meta18m: 'Sí + histórico' },
    ],
  },
  {
    id: 'mod-iot-ambiental',
    nombre: 'IoT Ambiental',
    icono: '🌿',
    fase: 2,
    estado: 'en-desarrollo',
    dependencia: 'Dir. Medio Ambiente y Desarrollo Sustentable — Allende #195',
    descripcion: '5 sensores ESP32: calidad del aire (PM2.5), temperatura, humedad — dashboard público.',
    detalle: '5 sensores ESP32 estratégicos: Centro, Ejidal, Menchaca, Ciudad del Valle, periurbana. Monitoreo en tiempo real: calidad del aire (PM2.5), temperatura, humedad, ruido. Dashboard público: ciudadano consulta calidad ambiental de su colonia. Datos para justificar inversión en áreas verdes. Alerta automática si se detectan niveles críticos.',
    color: '#00BCD4',
    instalacion: 25000,
    mtoMensual: 3000,
    kpis: [
      { label: 'Sensores ESP32 activos', actual: '0', meta6m: '5', meta18m: '15' },
      { label: 'Colonias monitoreadas', actual: '0', meta6m: '5', meta18m: '15' },
      { label: 'Alertas críticas automáticas', actual: 'No', meta6m: 'Activo', meta18m: 'Activo' },
    ],
  },
  {
    id: 'mod-seguridad-digital',
    nombre: 'Seguridad Digital IMM',
    icono: '🛡️',
    fase: 2,
    estado: 'en-desarrollo',
    dependencia: 'Instituto Municipal de la Mujer — Luis G. Urbina esq. Tacubaya',
    descripcion: 'Botón emergencia + mapa zonas riesgo + registro digital de denuncias con evidencia.',
    detalle: 'Botón de emergencia en la app municipal con geolocalización y alerta a Seguridad Pública. Mapa de zonas de riesgo actualizado en tiempo real basado en reportes. Registro digital de denuncias con evidencia fotográfica y seguimiento de caso. Dashboard para el IMM con estadísticas de incidencia por colonia y horario.',
    color: '#F44336',
    instalacion: 10000,
    mtoMensual: 2500,
    kpis: [
      { label: 'Usuarias activas en app', actual: '0', meta6m: '500', meta18m: '3,000' },
      { label: 'Denuncias digitalizadas / mes', actual: 'Manual', meta6m: '50', meta18m: '200' },
      { label: 'Tiempo de respuesta emergencia', actual: 'Sin medir', meta6m: '< 10 min', meta18m: '< 7 min' },
    ],
  },
  {
    id: 'mod-nayarit-id',
    nombre: 'NayaritID Municipal',
    icono: '🪪',
    fase: 3,
    estado: 'planeado',
    dependencia: '250 Colonias de Tepic — Piloto: 3 colonias diversas',
    descripcion: 'Identidad digital única: todos los servicios municipales en un solo perfil ciudadano.',
    detalle: 'Un perfil único donde el ciudadano puede pagar predial, ver avance de obra en su colonia, reportar problemas, consultar trámites y acceder a orientación de salud en DIF. Capacitación de un Promotor Digital por colonia — vecino seleccionado con tablet oficial. Meta pre-campaña: 50 colonias operativas antes del registro como candidata a gobernadora.',
    color: '#7B1FA2',
    instalacion: 30000,
    mtoMensual: 6000,
    kpis: [
      { label: 'Colonias operativas', actual: '0 / 250', meta6m: '3 piloto', meta18m: '50+' },
      { label: 'Promotores digitales capacitados', actual: '0', meta6m: '3', meta18m: '50' },
      { label: 'Perfiles ciudadanos activos', actual: '0', meta6m: '500', meta18m: '10,000' },
    ],
  },
  {
    id: 'mod-ventanilla-unica',
    nombre: 'Ventanilla Única Digital',
    icono: '🏛️',
    fase: 3,
    estado: 'planeado',
    dependencia: 'Secretaría del Ayuntamiento — Centro Histórico',
    descripcion: 'Un portal = todos los trámites municipales. Cumple LNETB 2025 al 100%.',
    detalle: 'Portal unificado: todos los trámites del Ayuntamiento de Tepic en un solo lugar. Cumplimiento de la Ley Nacional para Eliminar Trámites Burocráticos (LNETB, vigente julio 2025). Tepic puede ser el primer municipio de Nayarit en alcanzar el 100% de trámites registrados en el sistema nacional (hoy solo el 3% de municipios mexicanos lo han logrado).',
    color: '#7B1FA2',
    instalacion: 35000,
    mtoMensual: 7500,
    kpis: [
      { label: '% trámites digitalizados', actual: '~15%', meta6m: '50%', meta18m: '90%+' },
      { label: 'Cumplimiento LNETB 2025', actual: '0%', meta6m: '70%', meta18m: '100%' },
      { label: 'Tiempo promedio por trámite', actual: 'Días en ventanilla', meta6m: 'Horas en línea', meta18m: '< 1 hora' },
    ],
  },
];

export const FASE_COLOR: Record<1 | 2 | 3, string> = {
  1: '#E5007A',
  2: '#00BCD4',
  3: '#7B1FA2',
};

export const ESTADO_LABEL: Record<Modulo['estado'], string> = {
  'activo': 'Activo',
  'en-desarrollo': 'En Desarrollo',
  'planeado': 'Planeado',
};
