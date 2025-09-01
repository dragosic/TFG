<template>
	<h1 class="mb-4 text-3xl font-semibold">Partenariados</h1>
	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.count" type="warning" title="Advertencia"> No hay Partenariados registrados en el sistema. </alert>
	<div v-else>
	<div class="flex flex-col md:flex-row p-4 gap-6">
	<!-- Sidebar -->
	<aside class="w-full md:w-1/4 space-y-6">
		<!-- Filtros Card -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h2 class="text-lg font-semibold mb-4">Filtros</h2>
		</div>
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2">Búsqueda</h3>
				<!-- Búsqueda -->
				<div class="mb-4">
					<input
					v-model="query"
					type="text"
					class="input input-bordered w-full"
					placeholder="Buscar partenariado..."
					/>
				</div>
				<!-- Botones de navegación -->
				<div class="flex gap-2">
					<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
					<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
				</div>
			</div>
<!-- Entidad -->
<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Entidad</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="form-control w-full">
					<input-select-multiple
						v-model="offerCreatorId"
						:entries="socio?.map(sc => ({ 
						name: `${sc.firstName} ${sc.lastName}`, 
						value: sc.id 
						})) ?? []"
						tooltip="Seleccione la(s) entidad(es)"
					/>
					</label>
				</div>
			</div>

			<!-- Ciudad -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Ciudad</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="form-control w-full">
					<input-select-multiple 
						v-model="city"
						:entries="allCities?.map(ciudad => ({ name: ciudad, value: ciudad })) ?? []"
						tooltip="Seleccione la(s) ciudad(es)"
					/>
					</label>
				</div>
			</div>

			<!-- Cuatrimestre -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Cuatrimestre</strong></h3>
				<div class="flex flex-col gap-2">
					<label>
						<input v-model="offerQuarter" type="checkbox" :value="1" />
						{{ 'Primer Cuatrimestre' }}
					</label>
					<label>
						<input v-model="offerQuarter" type="checkbox" :value="2" />
						{{ 'Segundo Cuatrimestre' }}
					</label>
					<label>
						<input v-model="offerQuarter" type="checkbox" :value="3" />
						{{ 'Anual' }}
					</label>
				</div>
			</div>

			<!-- Acepta externos -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Acepta externos</strong></h3>
				<label class="flex items-center gap-2">
					<input v-model="acceptsExternals" class="radio radio-primary" type="radio" :value="1" />{{ 'Sí' }}
				</label>
				<label class="flex items-center gap-2">
					<input v-model="acceptsExternals" class="radio radio-primary" type="radio" :value="0" />{{ 'No' }}
				</label>
				<label class="flex items-center gap-2">
					<input v-model="acceptsExternals" class="radio radio-primary" type="radio" :value="-1" />{{ 'Todos' }}
				</label>
			</div>


			<!-- Estado -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Estado</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="form-control w-full">
					<input-select-multiple
						v-model="status"
						:entries="[
						{ name: 'Abierto Profesores', value: ProyectoEstado.AbiertoProfesores },
						{ name: 'Abierto Estudiantes', value: ProyectoEstado.AbiertoEstudiantes },
						{ name: 'En creacion', value: ProyectoEstado.EnCreacion },
						{ name: 'En curso', value: ProyectoEstado.EnCurso },
						{ name: 'Cerrado', value: ProyectoEstado.Cerrado }
						]"
						tooltip="Seleccione el/los estado(s)"
					/>
					</label>
				</div>
			</div>

			<!-- Periodo de ejecución -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Periodo de ejecución</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium">Desde:</label>
					<input 
					v-model="demandExecutionPeriodStart"
					type="date" 
					class="input input-bordered w-full"
					/>

					<label class="text-sm font-medium">Hasta:</label>
					<input 
					v-model="demandExecutionPeriodEnd"
					type="date" 
					class="input input-bordered w-full"
					/>
				</div>
			</div>

			<!-- Periodo de definición -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Periodo de definición</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium">Desde:</label>
					<input 
					v-model="demandDefinitionPeriodStart"
					type="date" 
					class="input input-bordered w-full"
					/>

					<label class="text-sm font-medium">Hasta:</label>
					<input 
					v-model="demandDefinitionPeriodEnd"
					type="date" 
					class="input input-bordered w-full"
					/>
				</div>
			</div>

			<!-- Periodo de definición -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Fecha fin</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium">Desde:</label>
					<input 
					v-model="demandEndDate"
					type="date" 
					class="input input-bordered w-full"
					/>
				</div>
			</div>
	</aside>
	<!-- Contenido principal -->
	<main class="w-full md:w-3/4">
		<!-- Aquí iría tu tabla y todo lo demás -->
		<div class="rounded-lg shadow p-4 bg-white">
		<h2 class="text-lg font-semibold mb-4">Listado de Partenariados</h2>
		<!-- Info -->
		<div class="text-xs text-gray-500 mt-2">
			{{ data?.entries.length ?? 0 }} resultados / Total {{ data?.count ?? 0 }}
		</div>
			<div v-if="data" class="w-full overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Entidad</th>
							<th>Título</th>
							<th>Descripción</th>
							<th>Ciudad</th>
							<th>Propósito</th>
							<th>Estado</th>
							<th>Periodo de Definición</th>
							<th>Periodo de Ejecución</th>
							<th>Fecha de Fin</th>
							<th>Estudiantes</th>
							<th>Profesores</th>
							<th v-if="auth.session.value?.role === 'Admin'">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="entry of data.entries" :key="entry.id" class="hover">
							<td>
								<div class="mask mask-circle h-12 w-12 shrink-0">
									<img :src="entry.image" class="h-full w-full object-cover" />
								</div>
							</td>
							

							<td>{{ entry.offerCreatorName }}</td>
							
							<td>{{ entry.title }}</td>
							<td>{{ entry.description }}</td>
								<!-- <div><strong>Observaciones:</strong> {{ entry.offerTemporaryObservations || 'Ninguna' }}</div> -->
							<td>{{ entry.demandCity }}</td>
							<td>{{ entry.demandPurpose }}</td>
							<td>{{ entry.status }}</td>
								<!-- <div><strong>Comunidad Beneficiaria:</strong> {{ entry.demandBeneficiaryCommunity }}</div> -->
							<td>
								{{ new Date(entry.demandDefinitionPeriodStart).toLocaleDateString() }} -
								{{ new Date(entry.demandDefinitionPeriodEnd).toLocaleDateString() }}
							</td>
							<td>
								{{ new Date(entry.demandExecutionPeriodStart).toLocaleDateString() }} -
								{{ new Date(entry.demandExecutionPeriodEnd).toLocaleDateString() }}
							</td>
							<td>{{ new Date(entry.demandEndDate).toLocaleDateString() }}</td>
							<td>
								<template v-for="student in JSON.parse(entry.students)" :key="student.id" >
									{{ student.firstName }} {{ student.lastName }}
								</template>
							</td>
							<td>
								<template v-for="professor of JSON.parse(entry.professors)" :key="professor.id">
									{{ professor.firstName }} {{ professor.lastName }}
								</template>
							</td>

							<th v-if="auth.session.value?.role === 'Admin'">
								<div  class="join">
									<nuxt-link :href="isSelf(entry.id) ? '/@me' : `/gestor/usuarios/${entry.id}`" class="btn btn-ghost join-item">
										<Icon name="material-symbols:edit-rounded" aria-label="Editar" class="h-6 w-6" />
									</nuxt-link>
									<button
										class="btn btn-ghost join-item text-error disabled:bg-transparent"
										@click="onDelete(entry as any)"
									>
										<Icon name="material-symbols:delete-forever-rounded" aria-label="Borrar" class="h-6 w-6" />
									</button>
								</div>
							</th>
						</tr>
					</tbody>
				</table>
			</div>

			<div v-if="data" class="join mt-8 w-full justify-center">
				<button class="btn join-item" :disabled="firstPage">
					<Icon name="ph:caret-left-bold" />
					Back
				</button>
				<button class="btn join-item btn-active">1</button>
				<button v-if="pages > 1" class="btn join-item">{{ pages }}</button>
				<button class="btn join-item" :disabled="lastPage">
					Next
					<Icon name="ph:caret-right-bold" />
				</button>
			</div>
			<dialog ref="dialogElement" class="modal" @click="onDialogClick">
				<div class="modal-box">
					<h3 class="text-lg font-bold">¡Atención!</h3>
					<p class="py-4">Esta acción es permanente, ¿desea proceder al borrado del partenariado?</p>
					<div v-if="deleting" class="rounded-xl bg-base-200 p-4 drop-shadow-lg">
						<div class="flex items-center gap-4">
							<div class="mask mask-circle h-12 w-12 shrink-0">
								<avatar :src="deleting.avatar" :size="64" />
							</div>
							<div class="grid gap-1">
								<span class="font-semibold"> {{ deleting.firstName }} {{ deleting.lastName }} </span>
								<span class="badge badge-ghost badge-sm">{{ deleting.email }}</span>
							</div>
						</div>

						<ul class="mt-4">
							<li>
								<span class="font-semibold">Rol</span>:
								{{ UserRoleMapping[deleting.role] }}
							</li>
							<li>
								<span class="font-semibold">Fecha de Creación</span>:
								{{ useDateTimeFormat(deleting.createdAt) }}
							</li>
							<li>
								<span class="font-semibold">Teléfono</span>:
								{{ deleting.phone }}
							</li>
						</ul>
					</div>
					<div class="modal-action">
						<form method="dialog">
							<button class="btn btn-error rounded-r-none" @click="onConfirmDelete">Borrar</button>
							<button class="btn rounded-l-none" @click="onConfirmCancel">Cerrar</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	</main>
	</div>
</div>
</template>

<script setup lang="ts">
import type { ViewUser } from '~/server/utils/database/services/types/views/User';

useSeoMeta({
	title: 'Partenariado',
	description: 'Listado de partenariados de la plataforma.'
});

const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(2);      // Cuántos registros mostrar por página
const query = ref('');      // Cadena de búsqueda ingresada por partenariado
const city = ref<string[]>([]);
const offerQuarter = ref<number[]>([]);
const offerCreatorId = ref<string[]>([]);
const demandExecutionPeriodStart = ref<string | null>(null);
const demandExecutionPeriodEnd = ref<string | null>(null);
const demandDefinitionPeriodStart = ref<string | null>(null);
const demandDefinitionPeriodEnd = ref<string | null>(null);
const demandEndDate = ref<string | null>(null);
const acceptsExternals = ref<number[]>([]);

// Cambia el ref para que sea un string simple, no un array
const status = ref<ProyectoEstado[]>([]); // Inicializado como array vacío

// Asegúrate de importar el enum ProyectoEstado
enum ProyectoEstado {
    EnCreacion = "EN_CREACION",
    AbiertoProfesores = "ABIERTO_PROFESORES",
    AbiertoEstudiantes = "ABIERTO_ESTUDIANTES",
    EnCurso = "EN_CURSO",
    Cerrado = "CANCELADO"
}


const { data, error } = await useFetch('/api/partenariados', {
	method: 'GET',
	query: {
		query : query.value,
		skip : skip.value,
		limit : limit.value,
		city : city.value,
		offerCreatorId : offerCreatorId.value,
		demandExecutionPeriodStart: demandExecutionPeriodStart.value,
		demandExecutionPeriodEnd: demandExecutionPeriodEnd.value,
		demandDefinitionPeriodStart: demandDefinitionPeriodStart.value,
		demandDefinitionPeriodEnd: demandDefinitionPeriodEnd.value,
		offerQuarter: offerQuarter.value,
		acceptsExternals: acceptsExternals.value,
		status: status.value,
		demandEndDate: demandEndDate.value
	}
 });

watch(
	[query, skip, limit, city, offerCreatorId, demandExecutionPeriodStart, demandExecutionPeriodEnd, demandDefinitionPeriodStart, demandDefinitionPeriodEnd, demandEndDate, offerQuarter, acceptsExternals, status],

	async () => {
    const res = await $fetch('/api/partenariados', {
		method: 'GET', 
		query: {
			query: query.value,
			skip : skip.value,
			limit : limit.value,
			city: city.value,
			offerCreatorId: offerCreatorId.value,
			demandExecutionPeriodStart: demandExecutionPeriodStart.value,
			demandExecutionPeriodEnd: demandExecutionPeriodEnd.value,
			demandDefinitionPeriodStart: demandDefinitionPeriodStart.value,
			demandDefinitionPeriodEnd: demandDefinitionPeriodEnd.value,
			offerQuarter: offerQuarter.value,
			acceptsExternals: acceptsExternals.value,
			status: status.value,
			demandEndDate: demandEndDate.value
		} 
	});
	
	
	data.value = res;
	console.log("accepetd:", acceptsExternals.value);
	console.log("demandExecutionPeriodStart.value:", demandExecutionPeriodStart.value);
	console.log("demandEndDate.value:", demandEndDate.value);
	if (data.value?.count != null && data.value?.entries.length < 2) {
		skip.value = 0;
	}
	
});

const { data: socio } = await useFetch('/api/users/socios', { method: 'GET' });

const skipPreviousDisabled = computed(() => skip.value === 0);
const skipNextDisabled = computed(() => (data.value ? data.value.count < limit.value : true));


const pages = computed(() => (data.value ? Math.ceil(data.value.count / 10) : 0));
const page = ref(0);



function skipPrevious() {
	if (data.value?.count != null && data.value?.count >= skip.value && limit.value > skip.value) {
		skip.value -= 2;
		limit.value -= 2;
	}
}

function skipNext() {
	
	if (data.value?.count != null && data.value?.count >= limit.value) {
		skip.value += limit.value;
		limit.value += limit.value;
	}
	
}

const firstPage = computed(() => page.value === 0);
const lastPage = computed(() => pages.value <= 1 || page.value === pages.value);



//______________________ACCIONES__________________________//
const auth = useAuth();

const dialogElement = ref<HTMLDialogElement>(null!);
const deleting = ref<ViewUser.Value | null>(null);



function onDelete(user: ViewUser.Value) {
	deleting.value = user;
	dialogElement.value.showModal();
}

function isSelf(id: number) {
	return auth.session.value?.id === id;
}

async function onConfirmDelete() {
	if (!deleting.value) return;

	try {
		await $fetch(`/api/users/${deleting.value.id}`, { method: 'delete' });

		if (data.value) {
			data.value = {
				...data.value,
				users: data.value.users.filter((user) => user.id !== deleting.value?.id)
			};
		}
	} catch (e) {
		error.value = e as any;
	}
}

function onConfirmCancel() {
	deleting.value = null;
}

function onDialogClick(event: MouseEvent) {
	if (event.target === dialogElement.value) {
		onConfirmCancel();
		dialogElement.value.close();
	}
}

//__________________Ciudades____________________//
const allCities = ref<string[]>([]); // lista permanente

watchEffect(() => {
  if (data.value?.entries) {
    const currentCities = data.value.entries.map(entry => entry.demandCity);
    const uniqueCities = Array.from(new Set(currentCities));

    if (allCities.value.length === 0) {
      allCities.value = uniqueCities;
    }
  }
});



</script>
