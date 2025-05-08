<template>
	<h1 class="mb-4 text-3xl font-semibold">Demandas</h1>

	<alert v-if="role === null" type="warning" title="Atención">
		Estás en la aplicación como invitado. Por favor,
		<nuxt-link to="/login">inicie sesión</nuxt-link> si desea presentar demandas.
	</alert>

	<div v-else-if="isCommunityPartnerRole(role) || isAdminRole(role)" class="mb-4">
		<nuxt-link href="/demandas/crear" class="btn btn-neutral">Crear Demanda</nuxt-link>
	</div>

	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>

	<alert v-else-if="!data?.entries.length" type="warning" title="Advertencia">
		No hay ofertas registradas en el sistema.
	</alert>


	<div class="flex flex-col md:flex-row p-4 gap-6">
	<!-- Sidebar -->
	<aside class="w-full md:w-1/4 space-y-6">
		<!-- Filtros Card -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h2 class="text-lg font-semibold mb-4">Filtros</h2>
		</div>
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Búsqueda</strong></h3>
				<!-- Búsqueda -->
				<div class="mb-4">
					<input
					v-model="query"
					type="text"
					class="input input-bordered w-full"
					placeholder="Buscar demandas..."
					/>
				</div>
				<!-- Botones de navegación -->
				<div class="flex gap-2">
					<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
					<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
				</div>
			</div>

			<!-- Ciudad -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Ciudad</strong></h3>
				<div class="flex flex-col gap-2">
					<div v-for="ciudad in allCities" :key="ciudad">
					<label>
						<input v-model="city" type="checkbox" :value="ciudad"   />
						{{ciudad}}
					</label>
					</div>
				</div>
			</div>

			<!-- Áreas de Servicio -->
			<div class="rounded-lg shadow p-4 bg-white">
				<div class="mb-4">
					<h3 class="text-md font-semibold mb-2"><strong>Áreas de servicio</strong></h3>
					<div class="flex flex-col gap-2">
						<label
						v-for="servicio in servicios"
						:key="servicio.id"
						class="flex items-center gap-2"
						>
						<input
							v-model="serviceAreas"
							type="checkbox"
							:value="servicio.nombre"
						/>
						{{ servicio.nombre }}
						</label>
					</div>
				</div>
			</div>


			<!-- Titulaciones requeridas -->
			<div class="rounded-lg shadow p-4 bg-white">
				<div class="mb-4">
					<h3 class="text-md font-semibold mb-2"><strong>Titulaciones</strong></h3>
					<div class="flex flex-col gap-2">
						<label
						v-for="titulos in t?.data"
						:key="titulos.id"
						class="flex items-center gap-2"
						>
						<input
							v-model="degree"
							type="checkbox"
							:value="titulos.nombre"	
						/>
						{{ titulos.nombre }}
						</label>
					</div>
				</div>
			</div>

			<!-- Creador -->
			<div class="rounded-lg shadow p-4 bg-white">
				<div class="mb-4">
					<h3 class="text-md font-semibold mb-2"><strong>Creador</strong></h3>
					<div class="flex flex-col gap-2">
						<label
						v-for="sc in socio"
						:key="sc.id"
						class="flex items-center gap-2"
						>
						<input
							v-model="creatorId"
							type="checkbox"
							:value="sc.id"
						/>
						{{ sc.firstName  }} {{ sc.lastName }}
						</label>
					</div>
				</div>
			</div>

			<!-- Periodo de ejecución -->
			<div class="rounded-lg shadow p-4 bg-white">
				<h3 class="text-md font-semibold mb-2"><strong>Periodo de ejecución</strong></h3>
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium">Desde:</label>
					<input 
					v-model="periodExecutionStart"
					type="date" 
					class="input input-bordered w-full"
					/>

					<label class="text-sm font-medium">Hasta:</label>
					<input 
					v-model="periodExecutionEnd"
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
					v-model="periodDefinitionStart"
					type="date" 
					class="input input-bordered w-full"
					/>

					<label class="text-sm font-medium">Hasta:</label>
					<input 
					v-model="periodDefinitionEnd"
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
			<h2 class="text-lg font-semibold mb-4">Listado de demandas</h2>
			<!-- Info -->
			<div class="text-xs text-gray-500 mt-2">
				{{ data?.entries.length ?? 0 }} resultados / Total {{ data?.count ?? 0 }}
			</div>
			<div v-if="filteredEntries" class="w-full overflow-x-auto">
				<table class="table ">
					<!-- head -->
					<thead>
						<tr>
							<th>Título</th>
							<th>Ciudad</th>
							<th>Comunidad</th>
							<th>Objetivo</th>
							<th>Inicio - Definición</th>
							<th>Inicio - Ejecución</th>
							<th>Fecha Límite</th>
							<th>Creador</th>
							<th>Area servicio</th>
							<th>Grado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="entry in filteredEntries" :key="entry.id">
							<td class="font-medium">{{ entry.title }}</td>
							<td>{{ entry.city }}</td>
							<td>{{ entry.beneficiaryCommunity }}</td>
							<td>{{ entry.purpose }}</td>
							<td>{{ formatDate(entry.periodDefinitionStart) }}</td>
							<td>{{ formatDate(entry.periodExecutionStart) }}</td>
							<td>{{ formatDate(entry.periodDeadline) }}</td>
							<td>{{ entry.creatorIdName }}</td>
							<td>{{ JSON.parse(entry.serviceAreas).join(', ') }}</td>
							<td>{{ JSON.parse(entry.degrees).join(', ') }}</td>
							
							<th>
								<div class="join">
									<nuxt-link :href="`/demandas/${entry.id}`" class="btn btn-ghost join-item">
										<Icon name="material-symbols:visibility" aria-label="Ver demanda" class="h-6 w-6" />
									</nuxt-link>
									<template v-if="auth.session.value?.role === 'Admin'">
									<nuxt-link :href="isSelf(entry.id) ? '/@me' : `/gestor/usuarios/${entry.id}`" class="btn btn-ghost join-item">
										<Icon name="material-symbols:edit-rounded" aria-label="Editar" class="h-6 w-6" />
									</nuxt-link>
									<button
										class="btn btn-ghost join-item text-error disabled:bg-transparent"
										@click="onDelete(entry as any)"
									>
										<Icon name="material-symbols:delete-forever-rounded" aria-label="Borrar" class="h-6 w-6" />
									</button>
									</template>
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
</template>


<script setup lang="ts">
import type { ViewUser } from '~/server/utils/database/services/types/views/User';

useSeoMeta({
	title: 'Demandas',
	description: 'Listado de demandas de la plataforma.'
});



const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(15);      // Cuántos registros mostrar por página
const query = ref('');      // Cadena de búsqueda ingresada por proyecto
const creatorId = ref<number[]>([]);  // Filtro por creador de la demanda
const serviceAreas = ref<string[]>([]); // Filtro por áreas de servicio
const degree = ref<string[]>([]); // Filtro por titulaciones requeridas
const city = ref<string[]>([]);
const periodExecutionStart = ref<string | null>(null);
const periodExecutionEnd = ref<string | null>(null);
const periodDefinitionStart = ref<string | null>(null);
const periodDefinitionEnd = ref<string | null>(null);



const { data, error } = await useFetch('/api/demandas', {
  method: 'GET',
  query: {
    query: query.value,
    skip: skip.value,
    limit: limit.value,
    city: city.value.length ? city.value : undefined,
    periodExecutionStart: periodExecutionStart.value,
    periodExecutionEnd: periodExecutionEnd.value,
    periodDefinitionStart: periodDefinitionStart.value,
    periodDefinitionEnd: periodDefinitionEnd.value,
    creatorId: creatorId.value,
    degree: degree.value,
    serviceAreas: serviceAreas.value
  }
});

watch(
  [query, skip, limit, city, creatorId, degree, serviceAreas, periodExecutionStart, periodExecutionEnd, periodDefinitionStart, periodDefinitionEnd],
  async () => {
    const res = await $fetch('/api/demandas', {
      method: 'GET',
      query: {
        query: query.value,
        skip: skip.value,
        limit: limit.value,
        city: city.value,
        periodExecutionStart: periodExecutionStart.value,
        periodExecutionEnd: periodExecutionEnd.value,
        periodDefinitionStart: periodDefinitionStart.value,
        periodDefinitionEnd: periodDefinitionEnd.value,
		creatorId: creatorId.value,
        degree: degree.value,
        serviceAreas: serviceAreas.value
      }
    });

    data.value = res;

    if (data.value?.count != null && data.value?.entries.length < 2) {
      skip.value = 0;
    }
  }
);



const { data: servicios } = await useFetch('/api/ofertas/areas-servicio', { method: 'GET' });
const { data: t } = await useFetch('/api/titulacion', { method: 'GET' });
const { data: socio } = await useFetch('/api/users/socios', { method: 'GET' });


const skipPreviousDisabled = computed(() => skip.value === 0);
const skipNextDisabled = computed(() => (data.value ? data.value.count < limit.value : true));


const pages = computed(() => (data.value ? Math.ceil(data.value.count / 10) : 0));
const page = ref(0);



function skipPrevious() {
	if (data.value?.count != null && data.value?.count >= skip.value && limit.value > skip.value) {
		skip.value -= 10;
		limit.value -= 10;
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


const role = useAuthRole();

const search = ref('');

const filteredEntries = computed(() => {
	if (!data?.value?.entries) return [];
	return data.value.entries.filter((entry: any) => {
		const searchText = search.value.toLowerCase();
		return (
			entry.title.toLowerCase().includes(searchText) ||
			entry.city.toLowerCase().includes(searchText) ||
			entry.creatorIdName.toLowerCase().includes(searchText)
		);
	});
});

function formatDate(dateStr: string) {
	if (!dateStr) return 'Sin Definir';
	return new Date(dateStr).toLocaleDateString('es-ES', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
}

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
    const currentCities = data.value.entries.map(entry => entry.city);
    const uniqueCities = Array.from(new Set(currentCities));

    if (allCities.value.length === 0) {
      allCities.value = uniqueCities;
    }
  }
});

</script>
