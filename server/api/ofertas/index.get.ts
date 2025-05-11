import { z } from 'zod';
import { contarTodasOfertasServicio } from '~/server/utils/database/services/daos/oferta/count';
import { obtenerTodasOfertasServicio } from '~/server/utils/database/services/daos/oferta/get';
import { Quarter } from '~/server/utils/database/services/types/OfertaServicio';
import { SearchQuery } from '~/server/utils/validators/shared';

const schemaQuery = SearchQuery.merge(
	z.object({
		quarter: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		title: z.string().optional(),
		creatorId: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		professorId: z.union([z.string().transform(Number),z.array(z.string().transform(Number)),z.number().int(),z.array(z.number().int())]).optional(),
		tag: z.union([z.string(), z.array(z.string())]).optional(),
		deadline: z.string().optional()
	})
);
export default eventHandler(async (event) => {
	const options = await getValidatedQuery(event, schemaQuery.parse);
	const ofertas = await obtenerTodasOfertasServicio(options);
	const total = await contarTodasOfertasServicio();
	return { ofertas, total };
});
