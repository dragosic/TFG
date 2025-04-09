import { TitulacionLocal } from '../../types/TitulacionLocal';

export async function obtenerListaTitulacionLocal() {
	const query = qb(TitulacionLocal.Name).select(TitulacionLocal.Key('*'));

	return query;
}
