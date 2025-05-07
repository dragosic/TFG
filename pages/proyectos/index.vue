<template>
	<h1 class="mb-4 text-3xl font-semibold">Proyectos</h1>
	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.count" type="warning" title="Advertencia"> No hay proyectos registrados en el sistema. </alert>
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
					placeholder="Buscar proyecto..."
					/>
				</div>
				<!-- Botones de navegación -->
				<div class="flex gap-2">
					<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
					<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
				</div>
			</div>

			<!-- Área de Conocimiento -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2">Área de conocimiento</h3>
				<div class="flex flex-col gap-2">
					
					<div v-for="area in areaCon" :key="area.id">
						<label>
							<input type="checkbox" :value="area.nombre" />
							{{ area.nombre }}
						</label>
					</div>
				</div>
			</div>

			<!-- Ciudad -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2">Ciudad</h3>
				<div class="flex flex-col gap-2">
					<div v-for="city in cities" :key="city">
					<label>
						<input type="checkbox" :value="city" />
						{{ city }}
					</label>
					</div>
				</div>
			</div>

			<!-- Estado -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2">Estado</h3>
				<div class="flex flex-col gap-2">
					<select class="select select-bordered w-full">
						<option value="Todos">Todos</option>
						<option value="Abierto">Abierto</option>
						<option value="En curso">En curso</option>
						<option value="Finalizado">Finalizado</option>
						<option value="Cancelado">Cancelado</option>
					</select>
				</div>
			</div>

			<!-- Periodo de ejecución -->
			<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Periodo de ejecución</h3>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-medium">Desde:</label>
				<input 
				type="date" 
				class="input input-bordered w-full"
				/>

				<label class="text-sm font-medium">Hasta:</label>
				<input 
				type="date" 
				class="input input-bordered w-full"
				/>
			</div>
			</div>

			<!-- Periodo de definición -->
			<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Periodo de definición</h3>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-medium">Desde:</label>
				<input 
				type="date" 
				class="input input-bordered w-full"
				/>

				<label class="text-sm font-medium">Hasta:</label>
				<input 
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
		<h2 class="text-lg font-semibold mb-4">Listado de proyectos</h2>
		<!-- Info -->
		<div class="text-xs text-gray-500 mt-2">
			{{ data?.entries.length ?? 0 }} resultados / Total {{ data?.count ?? 0 }}
		</div>
			<div v-if="data" class="w-full overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Profesores</th>
							<th>Entidad</th>
							<th>Estudiantes</th>
							<th>Proyecto</th>
							<th v-if="auth.session.value?.role === 'Admin'">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="entry of data.entries" :key="entry.id" class="hover">
							<td class="flex items-center gap-4">
								<div v-for="professor of JSON.parse(entry.professors)" :key="professor.id">
									{{ professor.firstName }} {{ professor.lastName }}
								</div>
							</td>

							<td >
								{{ entry.offerCreatorName }}</td>
							<td>
								<div v-for="student of JSON.parse(entry.students)" :key="student.id" >
									{{ student.firstName }} {{ student.lastName }}
								</div>
							</td>

							<td>
								<div class="mask mask-circle h-12 w-12 shrink-0">
									<img :src="entry.image" class="h-full w-full object-cover" />
								</div>

								<div><strong>Título:</strong> {{ entry.title }}</div>
								<div><strong>Descripción:</strong> {{ entry.description }}</div>
								<div><strong>Observaciones:</strong> {{ entry.offerTemporaryObservations || 'Ninguna' }}</div>
								<div><strong>Ciudad:</strong> {{ entry.demandCity }}</div>
								<div><strong>Propósito:</strong> {{ entry.demandPurpose }}</div>
								<div><strong>Comunidad Beneficiaria:</strong> {{ entry.demandBeneficiaryCommunity }}</div>
								<div>
									<strong>Periodo de Definición:</strong>
									{{ new Date(entry.demandDefinitionPeriodStart).toLocaleDateString() }} -
									{{ new Date(entry.demandDefinitionPeriodEnd).toLocaleDateString() }}
								</div>
								<div>
									<strong>Periodo de Ejecución:</strong>
									{{ new Date(entry.demandExecutionPeriodStart).toLocaleDateString() }} -
									{{ new Date(entry.demandExecutionPeriodEnd).toLocaleDateString() }}
								</div>
								<div><strong>Fecha de Fin:</strong> {{ new Date(entry.demandEndDate).toLocaleDateString() }}</div>
							</td>
							<th v-if="auth.session.value?.role === 'Admin'">
								<div  class="join">
									<nuxt-link :href="isSelf(entry.id) ? '/@me' : `/gestor/usuarios/${entry.id}`" class="btn btn-ghost join-item">
										<Icon name="material-symbols:edit-rounded" aria-label="Editar" class="h-6 w-6" />
									</nuxt-link>
									<button
										class="btn btn-ghost join-item text-error disabled:bg-transparent"
										:disabled="isSelf(entry.id)"
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
					<p class="py-4">Esta acción es permanente, ¿desea proceder al borrado del proyecto?</p>
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

const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(2);      // Cuántos registros mostrar por página
const query = ref('');      // Cadena de búsqueda ingresada por proyecto
const { data, error } = useFetch('/api/partenariados', { method: 'GET', query: { query, skip, limit } });

watch([query, skip, limit], ([newQuery, newSkip, newLimit]) => {
	console.log("query:", newQuery);
	console.log("skip:", newSkip);
	console.log("limit:", newLimit);
	console.log("datos:", data.value);
	
	if (data.value?.count != null && data.value?.entries.length < 2) {
		skip.value = 0;
	}
	
});

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
	console.log("id:", id);
	console.log("auth:", auth.session.value?.id);
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
const cities = computed(() => {
  if (!data.value?.entries) return []
  const allCities = data.value.entries.map(entry => entry.demandCity)
  return Array.from(new Set(allCities))
})

const { data: areaCon } = useFetch('/api/knowledge-areas', { method: 'GET'});

</script>
