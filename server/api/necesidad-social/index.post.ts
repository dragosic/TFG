import { readBody } from 'h3';
import { crearNecesidadSocial } from '~/server/utils/database/services/daos/necesidad-social/insert';
import { obtenerListaNecesidadSocial } from '~/server/utils/database/services/daos/necesidad-social/get';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const name = body.name?.trim();

  if (!name) {
    return { error: 'El nombre es obligatorio' };
  }

  // Llamar a la función para obtener todas las necesidades sociales
  const listaNecesidadesSociales = await obtenerListaNecesidadSocial();

  // Verificar si el nombre ya existe en la lista
  const existente = listaNecesidadesSociales.find(ns => ns.nombre === name);

  if (existente) {
    return { exists: true, data: existente };
  } else {
    // Si no existe, crear la nueva necesidad social
    const nueva = await crearNecesidadSocial(name);
    return { created: true, data: nueva };
  }
});