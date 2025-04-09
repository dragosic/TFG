import { obtenerListaNecesidadSocial } from '~/server/utils/database/services/daos/necesidad-social/get';

export default eventHandler(async () => {
	const data = await obtenerListaNecesidadSocial();
	return { data };
});
