import { NecesidadSocial } from '../../types/NecesidadSocial';

export async function crearNecesidadSocial(nombre: string) {
	const [nueva] = await qb(NecesidadSocial.Name)
		.insert({ nombre })
		.returning('*');

	return nueva;
}
