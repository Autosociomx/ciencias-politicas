/**
 * Plataforma de campaña Jala Digital.
 * Es una propuesta cívica y un prototipo visible. No es un sitio oficial
 * del Ayuntamiento ni un respaldo de la Presidencia de la República.
 */

export const FIGURA = {
  nombre: 'Vanessa Zúñiga',
  nombreCompleto: 'Vanessa Zúñiga Rafael',
  partido: 'Morena',
  cargo: 'Campaña por Morena a la presidencia municipal de Jala',
  eleccion: 'Presidencia municipal de Jala · 2027',
  lema: 'Palabra de mujer.',
  llamado: 'Vamos.',
  metodo: 'El ciudadano es el automóvil. El gobierno es la autopista.',
} as const;

export const AVISO =
  'Prototipo de campaña de Vanessa Zúñiga por Morena. No es un sitio oficial del partido, del Ayuntamiento de Jala ni un respaldo de la Presidencia de la República. No usa el emblema oficial de Morena. En 2024 ella contendió por Morena a esta misma presidencia; esta página no afirma un registro de 2027 que todavía no se publica. Busca cumplir la Ley Nacional para Eliminar Trámites Burocráticos (DOF, 16 de julio de 2025), con Llave MX y la Agencia de Transformación Digital y Telecomunicaciones.';

export const ESTRATEGIA_IA = [
  {
    titulo: 'Escuchar antes de prometer',
    texto: 'La inteligencia artificial ordena lo que Jala ya pide: baches, predial, citas, permisos. La candidata habla de eso. No de una marca de tecnología.',
  },
  {
    titulo: 'Hacer comprobable la palabra',
    texto: 'Cada compromiso de campaña se puede abrir: una ley, un folio o un prototipo. Palabra de mujer no es un retrato. Es una promesa que deja rastro.',
  },
  {
    titulo: 'Acompañar, no sustituir',
    texto: 'Después del voto, el Orbe guía el trámite por voz. La cara sigue siendo Vanessa. La máquina no diagnostica, no receta y no inventa biografía.',
  },
] as const;

export const PILARES = [
  {
    tag: 'Soberanía',
    icono: '🛣️',
    titulo: 'El gobierno entiende al ciudadano',
    texto: 'Nadie en Jala tiene que aprenderse el organigrama. El Orbe pregunta qué necesitas, en voz, y te lleva por el trámite. Tú conduces. El municipio pone la autopista.',
    frase: 'Un solo portal. Cero ventanillas para entender quién te toca.',
  },
  {
    tag: 'Ley nacional',
    icono: '⚖️',
    titulo: 'Cumplir la ley, no inventar otra',
    texto: 'La ley de 2025 obliga a simplificar y digitalizar trámites en los tres órdenes de gobierno. Jala no construye una isla: se acopla a Llave MX, al portal ciudadano nacional y al repositorio de tecnología pública.',
    frase: 'Interoperar es la forma municipal de la transformación digital.',
  },
  {
    tag: 'Salud',
    icono: '💚',
    titulo: 'Ficha antes de la consulta',
    texto: 'Con CURP y Llave MX, la persona ve citas y medicamentos registrados en IMSS, centro de salud o IMSS-Bienestar. El Orbe clasifica urgencia con cinco colores, al modo Manchester, y usa CIE-10 y CIE-11 solo para ordenar la ficha.',
    frase: 'La inteligencia artificial guía. No diagnostica, no receta y no sustituye al médico.',
  },
  {
    tag: 'Niñez',
    icono: '🔑',
    titulo: 'Llave del tutor, no del mercado',
    texto: 'La Llave MX infantil, alineada a la propuesta SINISI, deja que madre, padre o tutor autorice el acceso del niño. La plataforma recibe un sí o un no. No recibe el CURP, la foto ni el expediente del niño.',
    frase: 'Proteger no es vigilar. Consentimiento del tutor, datos del menor adentro.',
  },
] as const;

export const EVIDENCIA = [
  {
    icono: '🧠',
    titulo: 'Orbe y SOATM',
    texto: 'El núcleo conversacional enruta trámites, salud y obra. Los datos viven en cada módulo. El Orbe no se vuelve un archivo único de todo el municipio.',
    pill: 'Gobernanza-Digital · en construcción',
  },
  {
    icono: '🧾',
    titulo: 'Evidencia, contexto y código',
    texto: 'contex.os guarda el contexto. evidense.os guarda la prueba. codelense deja leer qué hace el sistema. SOATM es la capa común de identidad, permisos y servicios.',
    pill: 'Capas nombradas · no se presentan como producción',
  },
  {
    icono: '🔗',
    titulo: 'Listo para otro municipio',
    texto: 'Este repositorio es la cara política y el tablero de Jala. Cuando el piloto funcione, el mismo patrón se amplía porque la identidad sigue en la llave nacional, no en una base privada de Jala.',
    pill: 'Interoperabilidad · propuesta',
  },
  {
    icono: '🌽',
    titulo: 'Campo de Jala',
    texto: 'AgroVisión propone leer el suelo del municipio del elote —maíz de Jala, frijol, caña y traspatio— con imágenes públicas Sentinel-2. Es mapa de trabajo, no una cosecha ya medida.',
    pill: 'Prototipo de campaña',
  },
] as const;

export const RUTA = [
  {
    cuando: 'Hoy · Prototipo',
    titulo: 'La evidencia se puede abrir',
    texto: 'Campaña, tablero y límites éticos viven en este repositorio. Todavía no es un servicio del Ayuntamiento.',
    ahora: true,
  },
  {
    cuando: '2026',
    titulo: 'Cabildo y tres localidades',
    texto: 'Auditoría de trámites, demostración ante el Cabildo y piloto en la cabecera más dos localidades. Sin prometer cobertura que no exista.',
    ahora: false,
  },
  {
    cuando: '2027 · Campaña',
    titulo: 'Jala, primer municipio',
    texto: 'La presidencia se discute con palabra de mujer: un trámite, una ficha de salud y una llave de tutor. La tecnología acompaña. No es el rostro.',
    ahora: false,
  },
  {
    cuando: 'Después del piloto',
    titulo: 'De Jala a Nayarit',
    texto: 'Si Jala cumple, el mismo acoplamiento sirve a otros municipios. La ampliación no copia datos de personas: copia el estándar.',
    ahora: false,
  },
] as const;

export const MENSAJES = [
  { audiencia: 'El lema', linea: 'Palabra de mujer. Lo que se dice en campaña se puede abrir y revisar.' },
  { audiencia: 'El llamado', linea: 'Vamos. Jala no espera a que el ciudadano aprenda el organigrama.' },
  { audiencia: 'Familias', linea: 'Tu trámite cabe en una conversación. No en una fila.' },
  { audiencia: 'Campo', linea: 'El elote de Jala también merece palabra cumplida, no solo una promesa de apoyo.' },
  { audiencia: 'Madres y padres', linea: 'La llave del niño la tienes tú. La red no se queda con su nombre.' },
  { audiencia: 'Salud', linea: 'Llegas con una ficha. El médico decide. La máquina no receta.' },
] as const;

export const GUION = [
  'Palabra de mujer.',
  'Vamos.',
  'Soy Vanessa Zúñiga y voy por Morena a la presidencia de Jala.',
  'En 2024 ya puse el nombre. En 2027 la palabra se puede comprobar.',
  'Nadie en Jala debería estudiar el organigrama para ser atendido.',
  'El ciudadano es el automóvil. El gobierno tiene que ser la autopista.',
  'La inteligencia artificial no es mi imagen. Es la forma de cumplir: un portal, una voz que guía y un folio que se puede enseñar.',
  'En salud, esa voz ordena la urgencia y entrega la ficha. No diagnostica y no da receta.',
  'En la niñez, la llave la tiene el tutor. La plataforma no se queda con los datos del niño.',
] as const;
