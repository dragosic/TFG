import { z } from 'zod';
import { countPartnerships } from '~/server/utils/database/services/daos/colaboracion/count';
import { getAllPartnerships } from '~/server/utils/database/services/daos/colaboracion/get';
import { ProyectoEstado } from '~/server/utils/database/services/types/Proyecto';

const schema = SearchQuery.merge(
	z.object({
		title: z.string().optional(),
		acceptsExternals: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		offerCreatorId: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		demandDefinitionPeriodStart: z.union([z.string(), z.array(z.string())]).optional(),
		demandDefinitionPeriodEnd: z.union([z.string(), z.array(z.string())]).optional(),
		demandExecutionPeriodStart: z.union([z.string(), z.array(z.string())]).optional(),
		demandExecutionPeriodEnd: z.union([z.string(), z.array(z.string())]).optional(),
		demandEndDate: z.union([z.string(), z.array(z.string())]).optional(),
		offerQuarter: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		status: z.union([z.string(), z.array(z.string())]).optional(),
		manager: CoercedIntegerId.optional(),
		demandCity: z.union([z.string(), z.array(z.string())]).optional()
	})
);
export default eventHandler(async (event) => {
	const [entries, count] = await Promise.all([
		getAllPartnerships(await getValidatedQuery(event, schema.parse)), //
		countPartnerships()
	]);
	return { entries, count };
});
