import { TitulacionLocal } from '../../types/TitulacionLocal';

export async function crearTitulacionLocal(nombre: string) {
	const [nueva] = await qb(TitulacionLocal.Name)
		.insert({ nombre })
		.returning('*');

	return nueva;
}
