import type { DatosPersonalesInterno } from './DatosPersonalesInterno';
import type { Profesor } from './Profesor';
import { makeKeyFunction, type ForeignKey, type GetCreateType, type GetType, type PrimaryKey } from './base/Shared';

export interface ProfesorInterno {
	/** Foreign key of {@linkcode Profesor.id} */
	id: PrimaryKey<ForeignKey<Profesor, 'id'>>;
	/** Foreign key of {@linkcode DatosPersonalesInterno.id} */
	datos_personales_Id: ForeignKey<DatosPersonalesInterno, 'id'>;
}

export namespace ProfesorInterno {
	export const Name = 'profesor_interno';
	export const Key = makeKeyFunction(Name);

	export interface Value extends GetType<ProfesorInterno> {}
	export interface CreateData extends GetCreateType<ProfesorInterno> {}
}
