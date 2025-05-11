<template>
	<h1 class="mb-4 text-3xl font-semibold">Ofertas</h1>
	<alert v-if="error" type="danger" title="Error" class="w-full">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.ofertas.length " type="warning" title="Advertencia" class="w-full">No hay ofertas registradas en el sistema.</alert> 
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
				placeholder="Buscar Ofertas..."
				/>
			</div>

			<!-- Botones de navegación -->
			<div class="flex gap-2">
				<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
				<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
			</div>

		</div>
		<!-- Profesores / Creadores -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2"><strong>Creadores</strong></h3>
			<div class="flex flex-col gap-2 max-h-48 overflow-y-auto">
				<label
				v-for="creator in allCreators"
				:key="creator.id"
				>
				<input v-model="selectedCreators" type="checkbox" :value="creator.id" />
				{{ creator.firstName }} {{ creator.lastName }}
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
			</div>
		</div>

		<!-- Tags -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2"><strong>Etiquetas</strong></h3>
			<div class="flex flex-col gap-2 max-h-48 overflow-y-auto">
				<label v-for="tag in allTags" :key="tag">
				<input v-model="selectedTags" type="checkbox" :value="tag"  />
				{{ tag }}
				</label>
			</div>
		</div>

		<!-- Periodo de definición -->
		<div class="rounded-lg shadow p-4 bg-white">
			<h3 class="text-md font-semibold mb-2"><strong>Fecha limite</strong></h3>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-medium"></label>
				<input 
				v-model="deadline"
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
			<h2 class="text-lg font-semibold mb-4">Listado de ofertas</h2>
			<!-- Info -->
			<div class="text-xs text-gray-500 mt-2">
				{{ data?.ofertas.length ?? 0 }} resultados / Total {{ data?.total ?? 0 }}
			</div>
			<div v-if="data" class="w-full overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Titulo</th>
							<th>Descripcion</th>
							<th>Curso</th>
							<th>Cuatrimestre</th>
							<th>Tutor</th>
							<th>Servicios</th><!--  //services -->
							<th>Asignaturas</th> <!-- //subjects -->
							<th>Tags 🏷️</th> <!-- //tags -->
							<th>Creador</th>
							<th>Fecha limite</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>

						<tr v-for="oferta in data.ofertas" :key="oferta.id" class="hover">
							<td>
								<!-- Imagen -->
								<div class="mask mask-circle h-12 w-12 shrink-0">
									<img :src="oferta.image" alt="Imagen de la oferta" class="h-full w-full object-cover" />
								</div>
							</td>
							<td> {{ oferta.title }} </td>
							<td> {{ oferta.description }}</td>
							<td> {{ oferta.academicYear }}</td>
							<td>  {{ oferta.quarter === 1 ? 'Primer cuatrimestre' : 'Segundo cuatrimestre' }}</td>
							<td>
								<template v-for="professor of JSON.parse(oferta.professors)" :key="professor.id">
									{{ professor.firstName }} {{ professor.lastName }}
								</template>
							</td>
							<td>
								<template v-for="services of JSON.parse(oferta.services)">
									{{services }} 
								</template>
							</td>
							<td>
								<template v-for="subjects of JSON.parse(oferta.subjects)">
									{{subjects }} 
								</template>
							</td>
							<td>
								<template v-for="tags of JSON.parse(oferta.tags)">
									{{tags }} 
								</template>
							</td>
							<td>{{ JSON.parse(oferta.creator).firstName }} {{ JSON.parse(oferta.creator).lastName }}</td>
							<td>{{ new Date(oferta.deadline).toLocaleDateString() }}</td>
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
	title: 'Ofertas',
	description: 'Listado de ofertas de la plataforma.'
});

const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(4);      // Cuántos registros mostrar por página
const query = ref('');      // Cadena de búsqueda ingresada por proyecto
const deadline =  ref<string | null>(null); // Fecha limite de la oferta
const selectedTags = ref<string[]>([]);
const selectedCreators = ref<number[]>([]);
const offerQuarter = ref<number[]>([]); // Cuatrimestre de la oferta


const { data, error } = await useFetch('/api/ofertas', {
	method: 'GET' ,
	query: {
		query,
		skip,
		limit,
		deadline: deadline.value,
		tags: selectedTags.value,
		creators: selectedCreators.value,
		offerQuarter: offerQuarter.value
	}
});


watch([query, skip, limit, deadline, selectedTags, selectedCreators, offerQuarter],async () => {
    const res = await $fetch('/api/partenariados', {
		method: 'GET',
		query: {
			query: query.value,
			skip: skip.value,
			limit: limit.value,
			deadline: deadline.value,
			tags: selectedTags.value,
			creators: selectedCreators.value,
			offerQuarter: offerQuarter.value
		}
	});
	console.log("datos:", data.value);
	
	data.value = res;
	if (data.value?.total != null && data.value?.ofertas.length< 2) {
		skip.value = 0;
	}

});

const skipPreviousDisabled = computed(() => skip.value === 0);
const skipNextDisabled = computed(() => (data.value ? data.value.count < limit.value : true));


const pages = computed(() => (data.value ? Math.ceil(data.value.count / 10) : 0));
const page = ref(0);

const allTags = computed(() => {
  const tags = new Set<string>()
  if (!data.value?.ofertas) return []
  for (const oferta of data.value.ofertas) {
    try {
      JSON.parse(oferta.tags || '[]').forEach((t: string) => tags.add(t))
    } catch (e) {
      console.warn('Error parsing tags', e)
    }
  }
  return Array.from(tags).sort()
})

const allCreators = computed(() => {
  const map = new Map<number, { id: number; firstName: string; lastName: string }>()
  if (!data.value?.ofertas) return []
  for (const oferta of data.value.ofertas) {
    try {
      const creator = JSON.parse(oferta.creator)
      if (creator && creator.id != null) {
        map.set(creator.id, creator)
      }
    } catch (e) {
      console.warn('Error parsing creator', e)
    }
  }
  return Array.from(map.values()).sort((a, b) => a.lastName.localeCompare(b.lastName))
})



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
const role = useAuthRole();

const search = ref('');

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

</script>
