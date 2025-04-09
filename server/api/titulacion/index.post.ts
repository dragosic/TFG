import { readBody } from 'h3';
import { crearTitulacionLocal } from '~/server/utils/database/services/daos/titulaciones/insert';
import { obtenerListaTitulacionLocal} from '~/server/utils/database/services/daos/titulaciones/get';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const name = body.name?.trim();

  if (!name) {
    return { error: 'El nombre es obligatorio' };
  }

  // Llamar a la función para obtener todas las necesidades sociales
  const listaTitulacionLocal = await obtenerListaTitulacionLocal();

  // Verificar si el nombre ya existe en la lista
  const existente = listaTitulacionLocal.find(ns => ns.nombre === name);

  if (existente) {
    return { exists: true, data: existente };
  } else {
    // Si no existe, crear la nueva necesidad social
    const nueva = await crearTitulacionLocal(name);
    return { created: true, data: nueva };
  }
});