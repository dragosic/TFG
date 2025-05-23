import { z } from 'zod';
import {
	borrarAdmin,
	borrarEstudianteExterno,
	borrarEstudianteInterno,
	borrarOficinaAPS,
	borrarProfesorExterno,
	borrarProfesorInterno,
	borrarSocioComunitario,
	borrarCollaborator                                                                              
} from '~/server/utils/database/services/daos/usuario/delete';
import { obtenerUsuarioSinRolPorId } from '~/server/utils/database/services/daos/usuario/get';

const schema = z.object({ id: CoercedIntegerId });
export default eventHandler(async (event) => {
	const { id } = await getValidatedRouterParams(event, schema.parse);
	const currentUser = await requireAuthSession(event);
	if (currentUser.data.role !== 'Admin') {
		throw createError({ statusCode: 403, statusMessage: 'Operación no autorizada, solo gestores.' });
	}

	if (id === currentUser.data.id) {
		throw createError({ statusCode: 403, statusMessage: 'Operación no autorizada, no se puede borrar a uno mismo.' });
	}

	const usuario = await obtenerUsuarioSinRolPorId(id);
	switch (usuario.role) {
		case 'Admin':
			await borrarAdmin(id);
			break;
		case 'InternalProfessor':
			await borrarProfesorInterno(id);
			break;
		case 'ExternalProfessor':
			await borrarProfesorExterno(id);
			break;
		case 'InternalStudent':
			await borrarEstudianteInterno(id);
			break;
		case 'ExternalStudent':
			await borrarEstudianteExterno(id);
			break;
		case 'CommunityPartner':
			await borrarSocioComunitario(id);
			break;
		case 'ApSOffice':
			await borrarOficinaAPS(id);
			break;
		case 'Collaborator':
			await borrarCollaborator(id);
			break;
		default:
			throw new Error('Unreachable');
	}

	return null;
});
