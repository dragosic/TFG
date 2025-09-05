import { crearTitulacionLocal } from '~/server/utils/database/services/daos/titulaciones/insert';
import { obtenerListaTitulacionLocal } from '~/server/utils/database/services/daos/titulaciones/get';
import { TitulacionBody } from '~/server/utils/validators/Titulacion';

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, TitulacionBody.parse);
  const name = body.name;

  const listaTitulacionLocal = await obtenerListaTitulacionLocal();
  const existente = listaTitulacionLocal.find(ns => ns.nombre === name);

  if (existente) {
    return { exists: true, data: existente };
  }

  const nueva = await crearTitulacionLocal(name);
  return { created: true, data: nueva };
});
