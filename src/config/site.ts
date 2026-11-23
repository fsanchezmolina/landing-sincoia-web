// Única fuente de verdad de marca, textos, zonas y servicios.
// Todo lo marcado como PROVISIONAL se cambia aquí y se refleja en toda la web.

export const site = {
	name: 'Automia', // PROVISIONAL: nombre de ejemplo, pendiente del definitivo
	url: 'https://sincroia.es', // dominio definitivo (debe coincidir con `site` en astro.config.mjs)
	locale: 'es-ES',
	phone: '', // PROVISIONAL: se rellena cuando exista
	email: '', // PROVISIONAL: se rellena cuando exista
	// Vacío = web sin zonas locales. Para reactivar el SEO local: ['Huelva', 'Sevilla']
	// (reaparecen la sección Zonas, el pie de página y las áreas de los datos estructurados).
	cities: [] as string[],
	region: 'Andalucía',
	slogan: 'Menos tareas repetitivas. Más clientes atendidos.',
	tagline: 'Automatización con IA, SEO local y webs con panel personalizado',
	seoTitle: 'Automatización con IA para tu negocio',
	seoDescription:
		'Automatizamos la atención al cliente, las citas y las tareas repetitivas de tu negocio con IA. Además, SEO local y webs con panel personalizado.',
};

export type Service = {
	id: string;
	title: string;
	description: string;
};

export const services: Service[] = [
	{
		id: 'whatsapp',
		title: 'Chatbots y agentes de WhatsApp',
		description:
			'Un asistente que atiende a tus clientes por WhatsApp a cualquier hora, resuelve dudas y recoge sus datos.',
	},
	{
		id: 'voz',
		title: 'Agentes de voz y llamadas',
		description:
			'Una voz con IA que contesta llamadas, filtra consultas y avisa de lo importante.',
	},
	{
		id: 'citas',
		title: 'Agendado de citas',
		description:
			'Reservas automáticas conectadas a tu calendario, con recordatorios para reducir las ausencias.',
	},
	{
		id: 'integraciones',
		title: 'Integraciones y flujos internos',
		description:
			'Conectamos tus herramientas (hojas de cálculo, CRM, facturación, correo) para eliminar tareas manuales.',
	},
	{
		id: 'seo',
		title: 'SEO local y posicionamiento en Google',
		description:
			'Optimizamos tu web y tu ficha de Google para que los clientes de tu zona te encuentren cuando buscan lo que ofreces.',
	},
	{
		id: 'web',
		title: 'Páginas web con panel personalizado',
		description:
			'Creamos tu web, rápida y preparada para Google, conectada a un panel privado a medida donde ves las solicitudes y los datos de tus clientes.',
	},
];

// Valor extra del desplegable del formulario
export const otherService = { id: 'otro', title: 'Otro / no estoy seguro' };

export const sectors = [
	'Clínicas y centros de salud',
	'Restauración y comercio',
	'Inmobiliarias',
	'Despachos y servicios profesionales',
	'Pymes y negocios locales',
];

export const steps = [
	{
		title: 'Conversación inicial',
		description: 'Nos cuentas cómo funciona tu negocio y qué tareas te quitan más tiempo.',
	},
	{
		title: 'Diseño de la automatización',
		description: 'Proponemos qué automatizar, con qué herramientas y qué resultado esperar.',
	},
	{
		title: 'Implantación y pruebas',
		description: 'La montamos, la probamos con casos reales y la ajustamos antes de ponerla en marcha.',
	},
	{
		title: 'Seguimiento y mejoras',
		description: 'Revisamos cómo funciona y la mejoramos según lo que vaya pasando en tu día a día.',
	},
];

export const faqs = [
	{
		q: '¿Qué es una automatización con IA?',
		a: 'Es un sistema que realiza por ti tareas repetitivas: contestar mensajes de clientes, registrar solicitudes, agendar citas o pasar datos de una herramienta a otra. La IA le permite entender lo que escribe o dice el cliente y responder con naturalidad.',
	},
	{
		q: '¿Qué tipo de negocios pueden beneficiarse?',
		a: 'Cualquier negocio que reciba muchas consultas o repita tareas a diario: clínicas, restaurantes, comercios, inmobiliarias, despachos y pymes en general.',
	},
	{
		q: '¿Con qué negocios trabajáis?',
		a: 'Trabajamos en remoto con negocios de cualquier punto de España. Si tu caso lo requiere, lo hablamos antes de empezar.',
	},
	{
		q: '¿Qué incluye el SEO local y el posicionamiento en Google?',
		a: 'Trabajamos tu ficha de Google, tu web y tu presencia local para que aparezcas cuando tus clientes buscan lo que ofreces cerca de ellos. Te explicamos qué se hace y qué resultados esperar.',
	},
	{
		q: '¿Creáis también páginas web y paneles a medida?',
		a: 'Sí. Diseñamos webs rápidas, adaptadas al móvil y preparadas para posicionar en Google, y las conectamos a un panel personalizado con acceso privado para gestionar solicitudes, clientes y datos, y a tus automatizaciones.',
	},
	{
		q: '¿Cuánto tiempo se tarda en tenerla funcionando?',
		a: 'Depende de lo que haya que automatizar. Cuando conocemos tu caso te damos un plazo estimado antes de empezar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El precio depende del alcance de cada proyecto. Cuéntanos tu caso con el formulario y te preparamos una propuesta sin compromiso.',
	},
	{
		q: '¿Qué pasa con los datos de mis clientes?',
		a: 'Tratamos los datos personales conforme al RGPD y solo los usamos para el servicio acordado. Antes de empezar revisamos contigo qué datos intervienen y cómo se protegen.',
	},
];
