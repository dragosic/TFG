import { z } from 'zod';
import { crearNecesidadSocial } from '~/server/utils/database/services/daos/necesidad-social/insert';
import { obtenerListaNecesidadSocial } from '~/server/utils/database/services/daos/necesidad-social/get';

// Definimos el esquema de validación
const schema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio').trim(),
});

export default defineEventHandler(async (event) => {
  // Valida y obtiene el body
  const body = await readValidatedBody(event, schema.parse);
  const name = body.name;

  // Llamar a la función para obtener todas las necesidades sociales
  const listaNecesidadesSociales = await obtenerListaNecesidadSocial();

  // Verificar si el nombre ya existe en la lista
  const existente = listaNecesidadesSociales.find(ns => ns.nombre === name);

  if (existente) {
    return { exists: true, data: existente };
  }

  // Si no existe, crear la nueva necesidad social
  const nueva = await crearNecesidadSocial(name);
  return { created: true, data: nueva };
});
