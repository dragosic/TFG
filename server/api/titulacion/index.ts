import { obtenerListaTitulacionLocal } from '~/server/utils/database/services/daos/titulaciones/get';

export default eventHandler(async () => {
	const data = await obtenerListaTitulacionLocal();
	return { data };
});
