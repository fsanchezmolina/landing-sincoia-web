import { normalizePhone, type LeadInput } from './validate';

export type SubmitResult = { ok: true } | { ok: false; message: string };

// El envío real a Supabase se implementa en la tarea 4.6.
export async function submitLead(_d: LeadInput): Promise<SubmitResult> {
	return { ok: false, message: 'El envío todavía no está configurado. Inténtalo más tarde.' };
}

export { normalizePhone };
