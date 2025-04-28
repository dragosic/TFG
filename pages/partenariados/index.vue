<template>
	<h1 class="mb--4 text-3xl font-semibold">Partenariados</h1>
	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.entries.length" type="warning" title="Advertencia" class="w-full">No hay partenariados registrados en el sistema.</alert>
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
                            placeholder="Buscar partenariados..."
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
                                    <th>Titulo</th>
                                    <th>Descripción</th>
                                    <th>Estado</th>
                                    <th>Ciudad 🏙️</th>
                                    <th>Periodo ejecucion</th>
                                    <th>Periodo definición</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in data.entries" :key="entry.id" class="hover">
                                    <td class="text-3xl font-bold mb-4">
                                        <!-- Imagen -->
                                        <img :src="entry.image" alt="Imagen de la oferta" class="w-full h-64 object-cover rounded-md lg:w-1/3 lg:h-auto" />
                                        <h2 >{{ entry.title }}</h2>
                                    </td>
                                    <td>
                                        <p > {{ entry.description }}</p>
                                    </td>
                                    <td>
                                        <p >{{ entry.status }}</p>
                                    </td>
                                    <td>
                                        <p ><span> {{ entry.demandCity }}</span></p>
                                    </td>
                                        <!-- <p>Propósito: {{ entry.demandPurpose }}</p>
                                        <p>Observaciones: {{ entry.demandTemporaryObservations }}</p> -->
                                    <td>
                                        <p>{{ new Date(entry.demandExecutionPeriodStart).toLocaleDateString() }}  {{ new Date(entry.demandExecutionPeriodStart).toLocaleDateString() }}</p>
                                    </td>
                                    <td>
                                        <p>{{ new Date(entry.demandDefinitionPeriodStart).toLocaleDateString() }} {{ new Date(entry.demandDefinitionPeriodEnd).toLocaleDateString() }}</p>
                                    </td>
                                    <th>
                                        <div v-if="auth.session.value?.role === 'Admin'" class="join">
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
                                        <!-- <p>Estudiantes: <span class="inline-block text-xl">👩‍🎓</span></p>
                                        <ul class="list-disc pl-5">
                                            <li v-for="student in JSON.parse(entry.students)" :key="student.id" class="text-lg">
                                                {{ student.firstName }} {{ student.lastName }}
                                            </li>
                                        </ul>

                                        <p class="mt-4">Profesores: <span class="inline-block text-xl">👨‍🏫</span></p>
                                        <ul class="list-disc pl-5">
                                            <li v-for="professor in JSON.parse(entry.professors)" :key="professor.id" class="text-lg">
                                                {{ professor.firstName }} {{ professor.lastName }}
                                            </li>
                                        </ul> -->
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
                    </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">

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

const pages = computed(() => (data.value ? Math.ceil(data.value.count / 10) : 0));
const page = ref(0);

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
