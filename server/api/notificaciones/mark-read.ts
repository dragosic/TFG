import { Notificacion } from '~/server/utils/database/services/types/Notificacion';

export default defineEventHandler(async (event) => {
	const body = (await readBody(event)) as { ids?: number[] };
	const IdList = body?.ids;

	if (!IdList || IdList.length === 0) {
		setResponseStatus(event, 400);
		return { success: false, message: 'No hay notificaciones para marcar como leídas' };
	}

	try {
		await qb(Notificacion.Name)
			.whereIn('id', IdList)
			.update({ leido: Boolean(1) });
	} catch (error) {
		setResponseStatus(event, 500);
		return { success: false, message: 'Error al marcar las notificaciones como leídas' };
	}

	return { success: true, message: 'Notificaciones marcadas como leídas' };
});
