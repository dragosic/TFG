<template>
	<h1 class="mb-4 text-3xl font-semibold">Ofertas</h1>
	<alert v-if="error" type="danger" title="Error" class="w-full">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.ofertas.length" type="warning" title="Advertencia" class="w-full">No hay ofertas registradas en el sistema.</alert>
	<!-- PARA BUSCAR PROYECTO -->
	<div class="flex flex-col md:flex-row p-4 gap-6">
	<!-- Sidebar -->
	<aside class="w-full md:w-1/4 space-y-6">
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
				placeholder="Buscar usuarios..."
				/>
			</div>

			<!-- Botones de navegación -->
			<div class="flex gap-2">
				<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
				<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
			</div>
			
		</div>
		<!-- Profesor -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Profesor</h3>
			<div class="flex flex-col gap-2">
				
				<!-- <div v-for="area in areaCon" :key="area.id">
					<label>
						<input type="checkbox" :value="area.nombre" />
						{{ area.nombre }}
					</label>
				</div> -->
			</div>
		</div>
		<!-- Tags -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Tags</h3>
			<div class="flex flex-col gap-2">
				
				<!-- <div v-for="area in areaCon" :key="area.id">
					<label>
						<input type="checkbox" :value="area.nombre" />
						{{ area.nombre }}
					</label>
				</div> -->
			</div>
		</div>
		<!-- Área de implementación -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Área de implementación</h3>
			<div class="flex flex-col gap-2">
				
				<!-- <div v-for="area in areaCon" :key="area.id">
					<label>
						<input type="checkbox" :value="area.nombre" />
						{{ area.nombre }}
					</label>
				</div> -->
			</div>
		</div>
		<!-- Cuatrimestres -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2">Cuatrimestres</h3>
			<div class="flex flex-col gap-2">
				
				<!-- <div v-for="area in areaCon" :key="area.id">
					<label>
						<input type="checkbox" :value="area.nombre" />
						{{ area.nombre }}
					</label>
				</div> -->
			</div>
		</div>
	</aside>
	<!-- Contenido principal -->
	<main class="w-full md:w-3/4">
		<!-- Aquí iría tu tabla y todo lo demás -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h2 class="text-lg font-semibold mb-4">Listado de ofertas</h2>
			<div v-if="data" class="w-full overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Entidad</th>
							<th>Profesores</th>
							<th>Informacion</th>
							<th>Creador</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="oferta in data.ofertas" :key="oferta.id" class="hover">
							<td>
								<!-- Imagen -->
								<div class="mask mask-circle h-12 w-12 shrink-0">
									<img :src="oferta.image" alt="Imagen de la oferta" class="w-full h-64 object-cover rounded-md lg:w-1/3 lg:h-auto" />
								</div>
							
								<h2> <strong>{{ oferta.title }}</strong></h2>
								<p ><strong>Descripción:</strong> {{ oferta.description }}</p>
								<p ><strong>Fecha límite:</strong> {{ new Date(oferta.deadline).toLocaleDateString() }} <span class="inline-block text-xl">⏰</span></p>
							</td>
							<td>
								<!-- {{ oferta }} -->
								<!-- <p class="text-lg"><strong>Profesor:</strong> <span class="inline-block text-xl">👨‍🏫</span> {{ JSON.parse(oferta.professors)[0].firstName }} {{ JSON.parse(oferta.professors)[0].lastName }}</p> -->
							</td>
							<td>
								<div>
									<p ><strong>Año académico:</strong> {{ oferta.academicYear }}</p>
									<p><strong>Cuatrimestre:</strong> {{ oferta.quarter }}</p>
									<p><strong>Observaciones:</strong> {{ oferta.remarks }}</p>
									<p ><strong>Servicios:</strong> {{ JSON.parse(oferta.services).join(', ') }}</p>
									<p ><strong>Asignaturas:</strong> {{ JSON.parse(oferta.subjects).join(', ') }}</p>
									<p ><strong>Tags:</strong> <span class="inline-block text-xl">🏷️</span> {{ JSON.parse(oferta.tags).join(', ') }}</p>
								</div>
							</td>
							<td>
								<p > {{ JSON.parse(oferta.creator).firstName }} {{ JSON.parse(oferta.creator).lastName }}</p>
							</td>
							<th>
								<!-- <div v-if="auth.session.value?.role === 'Admin'" class="join">
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
								</div> -->
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</main>	
</div>
</template>

<script setup lang="ts">
const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(2);      // Cuántos registros mostrar por página
const query = ref('');      // Cadena de búsqueda ingresada por proyecto
const { data, error } = await useFetch('/api/ofertas', { method: 'GET' , query: { query, skip, limit } });
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

</script>
