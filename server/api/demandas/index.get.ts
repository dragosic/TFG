import { z } from 'zod';
import { contarTodasDemandasServicio } from '~/server/utils/database/services/daos/demanda/count';
import { obtenerTodasDemandasServicio } from '~/server/utils/database/services/daos/demanda/get';
import { SearchQuery } from '~/server/utils/validators/shared';

const schema = z
  .object({
    query: z.string().optional(),
    socialNeed: z.union([z.string(), z.array(z.string())]).optional(),
    creatorId: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
    serviceAreas: z.union([z.string(), z.array(z.string())]).optional(),
    withCounts: z.coerce.boolean().optional(),
    city: z.union([z.string(), z.array(z.string())]).optional(),
    degree: z.union([z.string(), z.array(z.string())]).optional(),
    periodExecutionStart: z.string().optional(),
    periodExecutionEnd: z.string().optional(),
    periodDefinitionStart: z.string().optional(),
    periodDefinitionEnd: z.string().optional(),
  })
  .merge(SearchQuery);


export default eventHandler(async (event) => {
	const query = await getValidatedQuery(event, schema.parse);
	const [count, entries] = await Promise.all([
		query.withCounts ? contarTodasDemandasServicio() : undefined, //
		obtenerTodasDemandasServicio(query)
	]);
	return { count, entries };
});
