/**
 * Plataforma de campaña Jala Digital.
 * Es una propuesta cívica y un prototipo visible. No es un sitio oficial
 * del Ayuntamiento ni un respaldo de la Presidencia de la República.
 */

export const FIGURA = {
  nombre: 'Miguel Alexis',
  cargo: 'Figura cívica de Jala Digital',
  eleccion: 'Presidencia municipal de Jala · 2027',
  lema: 'El ciudadano es el automóvil. El gobierno es la autopista.',
} as const;

export const AVISO =
  'Plataforma de campaña y prototipo cívico. No es un sitio oficial del Ayuntamiento de Jala ni un respaldo de la Presidencia de la República. Busca cumplir e interoperar con la Ley Nacional para Eliminar Trámites Burocráticos (DOF, 16 de julio de 2025), la Agencia de Transformación Digital y Telecomunicaciones y Llave MX.';

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
    texto: 'La presidencia municipal se discute con un Orbe visible: un trámite, una ficha de salud y una llave de tutor. No con un organigrama.',
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
  { audiencia: 'Familias', linea: 'Tu trámite cabe en una conversación. No en una fila.' },
  { audiencia: 'Campo', linea: 'El elote de Jala también merece un mapa, no solo una promesa de apoyo.' },
  { audiencia: 'Comercio', linea: 'Predial y licencia desde el celular, con recibo que se puede enseñar.' },
  { audiencia: 'Madres y padres', linea: 'La llave del niño la tienes tú. La red no se queda con su nombre.' },
  { audiencia: 'Salud', linea: 'Llegas con una ficha. El médico decide. La máquina no receta.' },
  { audiencia: 'Cabildo', linea: 'No pedimos otro sistema paralelo. Pedimos cumplir la ley nacional y dejar rastro.' },
] as const;

export const GUION = [
  'En Jala nadie debería estudiar el organigrama para ser atendido.',
  'El ciudadano es el automóvil. El gobierno tiene que ser la autopista.',
  'Por eso Jala Digital cabe en un Orbe: una voz que te guía por el trámite, en un solo portal, sin mandarte de oficina en oficina.',
  'Eso no es un invento local. Es cumplir la ley nacional de 2025, usar Llave MX y acoplarnos a la Agencia de Transformación Digital.',
  'En salud, el Orbe ordena la urgencia con cinco colores y te entrega una ficha. No diagnostica y no da receta.',
  'En la niñez, la llave la tiene el tutor. La plataforma solo recibe si hay permiso, nunca los datos del niño.',
  'Jala puede ser el primer municipio de Nayarit que se digitalice así: pequeño, comprobable y listo para compartirse.',
] as const;
