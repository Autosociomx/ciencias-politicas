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
    estado: 'en-desarrollo',
    dependencia: 'Tesorería Municipal de Jala — propuesta de piloto',
    descripcion: 'Predial y refrendo en el Orbe, con recibo descargable. Meta, no cifra ya lograda.',
    detalle: 'Propuesta: predial y refrendo desde el celular, con recordatorio y recibo que se puede enseñar. El panel de tesorería mostraría la recaudación por concepto. No está conectado al portal del Ayuntamiento. El descuento por pago anticipado solo existe si el Cabildo lo aprueba.',
    color: '#E5007A',
    instalacion: 18000,
    mtoMensual: 4500,
    kpis: [
      { label: '% pagos de predial digitales', actual: 'Sin medir', meta6m: '40%', meta18m: '80%' },
      { label: 'Recaudación vs año anterior', actual: 'Sin medir', meta6m: 'A definir', meta18m: 'A definir' },
      { label: 'Reducción filas presenciales', actual: '0%', meta6m: '60%', meta18m: '85%' },
    ],
  },
  {
    id: 'mod-obra-publica',
    nombre: 'Gobernanza Digital',
    icono: '🏗️',
    fase: 1,
    estado: 'en-desarrollo',
    dependencia: 'Obras Públicas de Jala — propuesta de piloto',
    descripcion: 'Dashboard público: contratos, avance semanal, alerta automática si obra se detiene.',
    detalle: 'Propuesta de tablero público: cada obra con contrato, monto, contratista, fecha de inicio y avance semanal. Foto geolocalizada. Alerta si una obra pasa dos semanas sin actualización o se pasa del presupuesto. Niveles: ciudadanía (lectura), supervisión (carga), presidencia (auditoría).',
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
    estado: 'en-desarrollo',
    dependencia: 'Servicios Públicos de Jala — propuesta de piloto',
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
    dependencia: 'DIF y salud municipal de Jala — propuesta',
    descripcion: 'Orientación de urgencia en cinco colores. No diagnostica ni receta. Pensado para funcionar sin señal.',
    detalle: 'Propuesta: el Orbe clasifica la urgencia con cinco colores, al modo Manchester, y ordena la ficha con CIE-10 y CIE-11. La persona no recibe diagnóstico ni receta. El médico recibe el informe. Puede operar sin señal en localidades del municipio. La consulta que ya exista en IMSS, centro de salud o IMSS-Bienestar se mostraría en el expediente solo con CURP y Llave MX, si esas instituciones autorizan la interoperabilidad.',
    color: '#00873E',
    instalacion: 12000,
    mtoMensual: 2800,
    kpis: [
      { label: 'Puntos con triaje de prueba', actual: '0', meta6m: 'Cabecera', meta18m: 'Localidades piloto' },
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
    dependencia: 'Campo de Jala — propuesta de piloto',
    descripcion: 'Lectura pública Sentinel-2 del suelo de Jala. Recomendación de cultivo como apoyo, no como promesa de cosecha.',
    detalle: 'Propuesta: imágenes públicas Sentinel-2 del municipio de Jala, con índice NDVI, para maíz de Jala, frijol, caña y traspatio. El mapa no sustituye al productor ni al técnico de campo.',
    color: '#00873E',
    instalacion: 20000,
    mtoMensual: 4200,
    kpis: [
      { label: 'Hectáreas revisadas', actual: '0', meta6m: 'Piloto', meta18m: 'Municipio' },
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
    dependencia: 'Medio ambiente de Jala — propuesta de sensores',
    descripcion: '5 sensores ESP32: calidad del aire (PM2.5), temperatura, humedad — dashboard público.',
    detalle: 'Propuesta de cinco sensores en la cabecera y localidades acordadas con el Ayuntamiento: aire, temperatura, humedad y ruido. El tablero sería público. Hoy no hay sensores instalados por esta campaña.',
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
    dependencia: 'Instituto Municipal de la Mujer de Jala — propuesta',
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
    dependencia: '46 localidades de Jala — piloto propuesto: 3',
    descripcion: 'Un perfil con Llave MX. La identidad no se duplica en una base privada de Jala.',
    detalle: 'Propuesta: un perfil para pagar, ver obras, reportar y consultar trámites, siempre con Llave MX. La Llave infantil la activa el tutor y no entrega datos del niño a plataformas. Un promotor digital por localidad piloto, no una meta de 50 colonias de otra ciudad.',
    color: '#7B1FA2',
    instalacion: 30000,
    mtoMensual: 6000,
    kpis: [
      { label: 'Localidades operativas', actual: '0 / 46', meta6m: '3 piloto', meta18m: 'A definir con Cabildo' },
      { label: 'Promotores digitales capacitados', actual: '0', meta6m: '3', meta18m: '50' },
      { label: 'Perfiles ciudadanos activos', actual: '0', meta6m: 'Piloto', meta18m: 'A definir' },
    ],
  },
  {
    id: 'mod-ventanilla-unica',
    nombre: 'Ventanilla Única Digital',
    icono: '🏛️',
    fase: 3,
    estado: 'planeado',
    dependencia: 'Secretaría del Ayuntamiento de Jala — propuesta',
    descripcion: 'Un portal para los trámites municipales, acoplado a la ley nacional de 2025.',
    detalle: 'Propuesta: los trámites del Ayuntamiento de Jala en el Orbe, alineados a la Ley Nacional para Eliminar Trámites Burocráticos, publicada el 16 de julio de 2025, y a Llave MX. Jala puede ser el primer municipio de Nayarit en probar ese acoplamiento. El porcentaje de cumplimiento se mide cuando el Cabildo abra el inventario, no antes.',
    color: '#7B1FA2',
    instalacion: 35000,
    mtoMensual: 7500,
    kpis: [
      { label: '% trámites digitalizados', actual: 'Sin inventario', meta6m: '50%', meta18m: '90%+' },
      { label: 'Acoplamiento a la ley 2025', actual: 'Propuesta', meta6m: 'Inventario', meta18m: 'Piloto verificable' },
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
