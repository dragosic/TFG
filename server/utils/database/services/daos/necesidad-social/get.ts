import { NecesidadSocial } from '../../types/NecesidadSocial';

export async function obtenerListaNecesidadSocial() {
	const query = qb(NecesidadSocial.Name).select(NecesidadSocial.Key('*'));

	return query;
}
