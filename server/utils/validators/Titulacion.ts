import { z } from 'zod';

export const TitulacionBody = z.object({
  name: z.string().min(1, 'El nombre es obligatorio').trim(),
});
