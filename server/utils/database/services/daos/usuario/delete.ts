import { Admin } from '../../types/Admin';
import { AreaConocimiento_Profesor } from '../../types/AreaConocimiento_Profesor';
import { Colaborador } from '../../types/Colaborador';
import { DatosPersonalesExterno } from '../../types/DatosPersonalesExterno';
import { DatosPersonalesInterno } from '../../types/DatosPersonalesInterno';
import { Estudiante } from '../../types/Estudiante';
import { EstudianteExterno } from '../../types/EstudianteExterno';
import { EstudianteInterno } from '../../types/EstudianteInterno';
import { OficinaAps } from '../../types/OficinaAps';
import { Profesor } from '../../types/Profesor';
import { ProfesorExterno } from '../../types/ProfesorExterno';
import { ProfesorInterno } from '../../types/ProfesorInterno';
import { SocioComunitario } from '../../types/SocioComunitario';
import { Usuario } from '../../types/Usuario';
import { sharedDeleteEntryTable } from '../shared';


export async function borrarEstudianteInterno(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const estudianteInterno = await trx(EstudianteInterno.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!estudianteInterno) return false;

		const datosPersonalesId = estudianteInterno.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(EstudianteInterno.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesInterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Estudiante.Name, id, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}


export async function borrarEstudianteExterno(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const estudianteExterno = await trx(EstudianteExterno.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!estudianteExterno) return false;

		const datosPersonalesId = estudianteExterno.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(EstudianteExterno.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesExterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Estudiante.Name, id, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}


export async function borrarProfesorExterno(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const profesorExterno = await trx(ProfesorExterno.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!profesorExterno) return false;

		const datosPersonalesId = profesorExterno.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(ProfesorExterno.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesExterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Profesor.Name, id, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx)) &&
			(await sharedDeleteEntryTable(AreaConocimiento_Profesor.Name, id, trx))
		);
	});
}


export async function borrarProfesorInterno(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const profesorInterno = await trx(ProfesorInterno.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!profesorInterno) return false;

		const datosPersonalesId = profesorInterno.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(ProfesorInterno.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesInterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Profesor.Name, id, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}


export async function borrarAdmin(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const admin = await trx(Admin.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!admin) return false;

		const datosPersonalesId = admin.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(Admin.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesInterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}


export async function borrarOficinaAPS(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const oficina = await trx(OficinaAps.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!oficina) return false;

		const datosPersonalesId = oficina.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(OficinaAps.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesInterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}

export async function borrarSocioComunitario(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const socioComunitario = await trx(SocioComunitario.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!socioComunitario) return false;

		const datosPersonalesId = socioComunitario.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(SocioComunitario.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesExterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}

export async function borrarCollaborator(id: number): Promise<boolean> {
	return await qb.transaction(async (trx) => {
		const colaborador = await trx(Colaborador.Name)
			.select('datos_personales_Id')
			.where('id', id)
			.first();

		if (!colaborador) return false;

		const datosPersonalesId = colaborador.datos_personales_Id;

		return (
			(await sharedDeleteEntryTable(Colaborador.Name, id, trx)) &&
			(await sharedDeleteEntryTable(DatosPersonalesExterno.Name, datosPersonalesId, trx)) &&
			(await sharedDeleteEntryTable(Usuario.Name, id, trx))
		);
	});
}
