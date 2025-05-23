import { isNullishOrEmpty } from '@sapphire/utilities';
import { AreaConocimiento } from '../../types/AreaConocimiento';
import { AreaConocimiento_Profesor } from '../../types/AreaConocimiento_Profesor';
import { Universidad } from '../../types/Universidad';
import { ViewUser } from '../../types/views/User';
import { ViewUserAdmin } from '../../types/views/UserAdmin';
import { ViewUserApSOffice } from '../../types/views/UserApSOffice';
import { ViewUserCommunityPartner } from '../../types/views/UserCommunityPartner';
import { ViewUserExternalProfessor } from '../../types/views/UserExternalProfessor';
import { ViewUserExternalStudent } from '../../types/views/UserExternalStudent';
import { ViewUserInternalProfessor } from '../../types/views/UserInternalProfessor';
import { ViewUserInternalStudent } from '../../types/views/UserInternalStudent';
import type { SearchParameters } from '../shared';
import { parseViewUserExternalProfessorJsonStringProperties, parseViewUserJsonStringProperties, parseViewUserInternalProfessorJsonStringProperties } from './_shared';

export async function maybeGetUsuarioSinRolPorEmail(email: string): Promise<ViewUser.Value | null> {
	return parseViewUserJsonStringProperties(await qb(ViewUser.Name).where({ email }).first()) ?? null;
}

export async function obtenerUsuarioSinRolPorEmail(email: string): Promise<ViewUser.Value> {
	return ensureDatabaseEntry(await maybeGetUsuarioSinRolPorEmail(email));
}

export async function maybeGetUsuarioSinRolPorId(id: number): Promise<ViewUser.Value | null> {
	return parseViewUserJsonStringProperties(await qb(ViewUser.Name).where({ id }).first()) ?? null;
}

export async function obtenerUsuarioSinRolPorId(id: number): Promise<ViewUser.Value> {
	return ensureDatabaseEntry(await maybeGetUsuarioSinRolPorId(id));
}

export async function obtenerUniversidades(): Promise<Universidad.Value[]> {
	return await qb(Universidad.Name);
}

export interface GetAllUserKnowledgeAreasResult {
	id: AreaConocimiento.Value['id'];
	name: AreaConocimiento.Value['nombre'];
}
export async function obtenerAreasConocimientoUsuario(id: number): Promise<GetAllUserKnowledgeAreasResult[]> {
	return await qb(AreaConocimiento.Name)
		.join(AreaConocimiento_Profesor.Name, AreaConocimiento.Key('id'), '=', AreaConocimiento_Profesor.Key('id_area'))
		.where(AreaConocimiento_Profesor.Key('id_profesor'), '=', id)
		.select(AreaConocimiento.Key('id'), qb.ref(AreaConocimiento.Key('nombre')).as('name'));
}

export async function obtenerAreasConocimiento(): Promise<AreaConocimiento.Value[]> {
	return await qb(AreaConocimiento.Name);
}

export async function obtenerAdmin(id: number): Promise<ViewUserAdmin.Value | null> {
	return (await qb(ViewUserAdmin.Name).where({ id }).first()) ?? null;
}

export async function obtenerOficinaAps(id: number): Promise<ViewUserApSOffice.Value | null> {
	return (await qb(ViewUserApSOffice.Name).where({ id }).first()) ?? null;
}

export async function obtenerSocioComunitario(id: number): Promise<ViewUserCommunityPartner.Value | null> {
	return (await qb(ViewUserCommunityPartner.Name).where({ id }).first()) ?? null;
}

export async function obtenerSociosComunitarios(): Promise<ViewUserCommunityPartner.Value[]> {
	return await qb(ViewUserCommunityPartner.Name);
}

export async function obtenerProfesoresInternos(): Promise<ViewUserInternalProfessor.Value[]> {
	const entries = await qb(ViewUserInternalProfessor.Name);
	return entries.map((entry) => parseViewUserInternalProfessorJsonStringProperties(entry));
}

export async function obtenerProfesoresExternos(): Promise<ViewUserExternalProfessor.Value[]> {
	const entries = await qb(ViewUserExternalProfessor.Name);
	return entries.map((entry) => parseViewUserExternalProfessorJsonStringProperties(entry));
}
  

export async function obtenerProfesorInterno(id: number): Promise<ViewUserInternalProfessor.Value | null> {
	return (await qb(ViewUserInternalProfessor.Name).where({ id }).first()) ?? null;
}

export async function obtenerProfesorExterno(id: number): Promise<ViewUserExternalProfessor.Value | null> {
	const entry = await qb(ViewUserExternalProfessor.Name).where({ id }).first();
	return parseViewUserExternalProfessorJsonStringProperties(entry) ?? null;
}

export async function obtenerEstudianteInterno(id: number): Promise<ViewUserInternalStudent.Value | null> {
	return (await qb(ViewUserInternalStudent.Name).where({ id }).first()) ?? null;
}

export async function obtenerEstudianteExterno(id: number): Promise<ViewUserExternalStudent.Value | null> {
	return (await qb(ViewUserExternalStudent.Name).where({ id }).first()) ?? null;
}

export interface SearchUsersOptions extends SearchParameters {
	query?: string;
	roles?: string | string[]; 
}
export async function searchUsers(options: SearchUsersOptions): Promise<ViewUser.Value[]> {
	const entries = (await qb(ViewUser.Name)
		.modify((queryBuilder) => {
			if (!isNullishOrEmpty(options.query)) {
				queryBuilder
					.where('firstName', 'like', `%${options.query}%`) //
					.orWhere('lastName', 'like', `%${options.query}%`)
					.orWhere('email', 'like', `%${options.query}%`);
			}
			
			console.log("roles:", options.roles);
			if (!isNullishOrEmpty(options.roles)) {
				const roles = Array.isArray(options.roles)
					? options.roles
					: [options.roles];
			
					roles.forEach((roles, index) => {
					if (index === 0) {
						queryBuilder.where(ViewUser.Key('data'), 'like', `%${roles}%`);
					} else {
						queryBuilder.orWhere(ViewUser.Key('data'), 'like', `%${roles}%`);
					}
				});
			}
			// if (!isNullishOrEmpty(options.roles)) {
			// 	queryBuilder
			// 	.where('city', options.roles);
			// }
			// if (options.roles && options.roles.length > 0) {
			// 	queryBuilder.andWhere((builder) => {
			// 		if(options.roles!.length === 1) {
			// 			builder.orWhereRaw(`JSON_EXTRACT(data, '$.role') = ?`, [options.roles![0]]);
			// 		}
			// 		for (const role of options.roles!) {
			// 			builder.orWhereRaw(`JSON_UNQUOTE(JSON_EXTRACT(data, '$.role')) = ?`, [role]);
			// 		}
			// 	});
			// }
		})
		.limit(options.limit ?? 100)
		.offset(options.offset ?? 0)
		.orderBy('createdAt')) as ViewUser.RawValue[];

	return entries.map((entry) => parseViewUserJsonStringProperties(entry));
}
