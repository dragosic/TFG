import { isNullish, isNullishOrEmpty } from '@sapphire/utilities';
import { Nota } from '../../types/Nota';
import type { Partenariado } from '../../types/Partenariado';
import { ViewPartnership } from '../../types/views/Partnership';
import type { SearchParameters } from '../shared';
import { formatNota, type FormattedNota } from './_shared';

export async function obtenerNota(id: number): Promise<FormattedNota> {
	return formatNota(ensureDatabaseEntry(await qb(Nota.Name).where({ id }).first()));
}

export async function getPartnership(id: number) {
	return ensureDatabaseEntry(await qb(ViewPartnership.Name).where({ id }).first());
}

export async function maybeObtenerIdPartenariado(data: Pick<Partenariado.Value, 'id_demanda' | 'id_oferta'>): Promise<number | null> {
	const entry = await qb('partenariado').where({ id_demanda: data.id_demanda, id_oferta: data.id_oferta }).select('id').first();
	return entry?.id ?? null;
}

export interface GetAllPartnershipsFilter extends SearchParameters {
	title?: string;
	status?: string | string[];
	manager?: ViewPartnership.Value['managerId'];
	offerCreatorId?: number | number[];
	offerQuarter?: number | number[];
	acceptsExternals?: number | number[];
	demandCity?: string | string[];
	demandDefinitionPeriodStart?: string | string[];
	demandDefinitionPeriodEnd?: string | string[];
	demandExecutionPeriodStart?: string | string[];
	demandExecutionPeriodEnd?: string | string[];
	demandEndDate?: string | string[];
}
export async function getAllPartnerships(options: GetAllPartnershipsFilter): Promise<ViewPartnership.Value[]> {
	return await qb(ViewPartnership.Name) //
		.modify((queryBuilder) => {
			if (!isNullishOrEmpty(options.title)){
				queryBuilder
					.where('title', `%${options.title}%`)
					.orWhere('description', 'like', `%${options.title}%`)
					.orWhere('status', 'like', `%${options.title}%`)
					.orWhere('students', 'like', `%${options.title}%`)
					.orWhere('professors', 'like', `%${options.title}%`)
					.orWhere('demandCity', 'like', `%${options.title}%`)
					.orWhere('offerCreatorName', 'like', `%${options.title}%`)

			} 
			
			if (options.acceptsExternals !== undefined && options.acceptsExternals !== -1) {
				if (options.acceptsExternals === 1) queryBuilder.where(ViewPartnership.Key('acceptsExternals'), true);
				else if (options.acceptsExternals === 0) queryBuilder.where(ViewPartnership.Key('acceptsExternals'), false);
			}
			
			if (!isNullishOrEmpty(options.offerCreatorId)) {
				const ids = Array.isArray(options.offerCreatorId)
					? options.offerCreatorId
					: [options.offerCreatorId]; 
				
				queryBuilder.whereIn(ViewPartnership.Key('offerCreatorId'), ids);
			}
			if (!isNullishOrEmpty(options.offerQuarter)) {
				const ids = Array.isArray(options.offerQuarter)
					? options.offerQuarter
					: [options.offerQuarter]; 
				
				queryBuilder.whereIn(ViewPartnership.Key('offerQuarter'), ids);
			}
			if (!isNullishOrEmpty(options.status)) {
				const cities = Array.isArray(options.status)
					? options.status
					: [options.status];

				queryBuilder.whereIn(ViewPartnership.Key('status'), cities);
			}
			if (!isNullishOrEmpty(options.manager)) queryBuilder.andWhere('managerId', options.manager);
			if (!isNullishOrEmpty(options.demandCity)) {
				const cities = Array.isArray(options.demandCity)
					? options.demandCity
					: [options.demandCity];

				queryBuilder.whereIn(ViewPartnership.Key('demandCity'), cities);
			}
		})
		.limit(options.limit ?? 100)
		.offset(options.offset ?? 0);
}
