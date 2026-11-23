import { services, otherService } from '../config/site';

export type LeadInput = {
	name: string;
	email: string;
	phone: string;
	company: string;
	business_activity: string;
	service: string;
	consent: boolean;
	website?: string; // honeypot
};

const validServices = new Set([...services.map((s) => s.id), otherService.id]);
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Móvil o fijo español, con o sin prefijo +34 / 0034, admite espacios, puntos y guiones
const phoneRe = /^(?:\+34|0034)?[6789]\d{8}$/;

export function normalizePhone(raw: string): string {
	return raw.replace(/[\s.\-()]/g, '');
}

export function validateLead(d: LeadInput): Record<string, string> {
	const e: Record<string, string> = {};
	if (d.name.trim().length < 2) e.name = 'Escribe tu nombre.';
	if (!emailRe.test(d.email.trim())) e.email = 'Escribe un email válido, por ejemplo nombre@empresa.es.';
	if (!phoneRe.test(normalizePhone(d.phone))) e.phone = 'Escribe un teléfono español válido, por ejemplo 600 123 456.';
	if (d.company.trim().length < 2) e.company = 'Escribe el nombre de tu empresa.';
	// Opcionales: solo se validan si se rellenan
	const activity = d.business_activity.trim();
	if (activity.length > 0 && activity.length < 3) e.business_activity = 'Describe un poco más a qué se dedica tu empresa.';
	if (d.service !== '' && !validServices.has(d.service)) e.service = 'Selecciona una opción válida.';
	if (!d.consent) e.consent = 'Debes aceptar la política de privacidad para continuar.';
	return e;
}
