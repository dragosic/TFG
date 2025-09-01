<template>
    <h1 class="mb-4 text-3xl font-semibold">Mis Ofertas</h1>

    <alert v-if="role === null" type="warning" title="Atención">
        Estás en la aplicación como invitado. Por favor,
        <nuxt-link to="/login">inicie sesión</nuxt-link> si desea presentar demandas.
    </alert>

    <div v-else-if="isCommunityPartnerRole(role) || isAdminRole(role)" class="mb-4">
        <nuxt-link href="/ofertas/crear" class="btn btn-neutral">Crear Oferta</nuxt-link>
    </div>

    <alert v-if="error" type="danger" title="Error">
        {{ error.statusMessage ?? error.message ?? error }}
    </alert>

    <alert v-else-if="!data?.ofertas.length" type="warning" title="Advertencia">
        No hay ofertas registradas en el sistema.
    </alert>

    <div class="flex flex-col md:flex-row p-4 gap-6">
    <!-- Sidebar -->
    <aside class="w-full md:w-1/4 space-y-6">
        <!-- Filtros Card -->
        <div class="rounded-lg shadow p-4 bg-white">
            <h2 class="text-lg font-semibold mb-4">Filtros</h2>
        </div>
        <!-- Aqui hay cambios: nuevos filtros -->
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Título</strong></h3>
            <input v-model="title" type="text" class="input input-bordered w-full" placeholder="Filtrar por título..." />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Descripción</strong></h3>
            <input v-model="description" type="text" class="input input-bordered w-full" placeholder="Filtrar por descripción..." />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Asignaturas</strong></h3>
            <input-select-multiple
                v-model="subjects"
                :entries="allSubjects?.map(subject => ({ name: subject, value: subject })) ?? []"
                tooltip="Seleccione asignaturas"
            />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Cuatrimestre</strong></h3>
            <select v-model="quarter" class="input input-bordered w-full">
                <option value="">Todos</option>
                <option value="1">Primer</option>
                <option value="2">Segundo</option>
                <option value="3">Anual</option>
            </select>
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Año académico</strong></h3>
            <input v-model="academicYear" type="number" class="input input-bordered w-full" placeholder="Ej: 2024" />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Fecha límite</strong></h3>
            <input v-model="deadline" type="date" class="input input-bordered w-full" />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Observaciones</strong></h3>
            <input v-model="remarks" type="text" class="input input-bordered w-full" placeholder="Filtrar por observaciones..." />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Áreas de servicio</strong></h3>
            <input-select-multiple
                v-model="serviceAreas"
                :entries="servicios?.map(servicio => ({
                    name: servicio.nombre,
                    value: servicio.nombre
                })) ?? []"
                tooltip="Seleccione las áreas de servicio"
            />
        </div>
        <div class="rounded-lg shadow p-4 bg-white">
            <h3 class="text-md font-semibold mb-2"><strong>Etiquetas</strong></h3>
            <input-select-multiple
                v-model="tags"
                :entries="allTags?.map(tag => ({ name: tag, value: tag })) ?? []"
                tooltip="Seleccione etiquetas"
            />
        </div>
        <!-- Fin cambios filtros -->
    </aside>
    <!-- Contenido principal -->
    <main class="w-full md:w-3/4">
        <div class="rounded-lg shadow p-4 bg-white">
            <h2 class="text-lg font-semibold mb-4">Listado de ofertas</h2>
            <!-- Info -->
            <div class="text-xs text-gray-500 mt-2">
                {{ data?.ofertas.length ?? 0 }} resultados / Total {{ data?.total ?? 0 }}
            </div>
            <div v-if="filteredEntries" class="w-full overflow-x-auto">
                <table class="table ">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Asignaturas</th>
                            <th>Cuatrimestre</th>
                            <th>Año académico</th>
                            <th>Fecha límite</th>
                            <th>Observaciones</th>
                            <th>Áreas de servicio</th>
                            <th>Etiquetas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entry in filteredEntries" :key="entry.id">
                            <td class="font-medium">{{ entry.title }}</td>
                            <td>{{ entry.description }}</td>
                            <td>{{ Array.isArray(entry.subjects) ? entry.subjects.join(', ') : entry.subjects }}</td>
                            <td>{{ entry.quarter }}</td>
                            <td>{{ entry.academicYear }}</td>
                            <td>{{ formatDate(entry.deadline) }}</td>
                            <td>{{ entry.remarks }}</td>
                            <td>{{ Array.isArray(entry.services) ? entry.services.join(', ') : entry.services }}</td>
                            <td>{{ Array.isArray(entry.tags) ? entry.tags.join(', ') : entry.tags }}</td>
                            <th>
                                <div class="join">
                                    <nuxt-link :href="`/ofertas/${entry.id}`" class="btn btn-ghost join-item">
                                        <Icon name="material-symbols:visibility" aria-label="Ver oferta" class="h-6 w-6" />
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
    title: 'Ofertas',
    description: 'Listado de ofertas de la plataforma.'
});

const skip = ref(0);        // Desde qué registro empezar (para paginación)
const limit = ref(15);      // Cuántos registros mostrar por página
const title = ref('');      // Filtro por título
const description = ref(''); // Filtro por descripción
const subjects = ref<string[]>([]); // Filtro por asignaturas
const quarter = ref('');    // Filtro por cuatrimestre
const academicYear = ref<number | null>(null); // Filtro por año académico
const deadline = ref<string | null>(null); // Filtro por fecha límite
const remarks = ref('');    // Filtro por observaciones
const serviceAreas = ref<string[]>([]); // Filtro por áreas de servicio
const tags = ref<string[]>([]); // Filtro por etiquetas

// Para los selectores de asignaturas y etiquetas
const allSubjects = ref<string[]>([]);
const allTags = ref<string[]>([]);

const { data, error } = await useFetch('/api/ofertas', {
  method: 'GET',
  query: {
    skip: skip.value,
    limit: limit.value,
    title: title.value,
    description: description.value,
    subjects: subjects.value,
    quarter: quarter.value,
    academicYear: academicYear.value,
    deadline: deadline.value,
    remarks: remarks.value,
    serviceAreas: serviceAreas.value,
    tags: tags.value
  }
});

watch(
  [skip, limit, title, description, subjects, quarter, academicYear, deadline, remarks, serviceAreas, tags],
  async () => {
    const res = await $fetch('/api/ofertas', {
      method: 'GET',
      query: {
        skip: skip.value,
        limit: limit.value,
        title: title.value,
        description: description.value,
        subjects: subjects.value,
        quarter: quarter.value,
        academicYear: academicYear.value,
        deadline: deadline.value,
        remarks: remarks.value,
        serviceAreas: serviceAreas.value,
        tags: tags.value
      }
    });

    data.value = res;

    if (data.value?.total != null && data.value?.ofertas.length < 2) {
      skip.value = 0;
    }
  }
);

watchEffect(() => {
  if (data.value?.ofertas) {
    // Asignaturas
    const subjectsSet = new Set<string>();
    data.value.ofertas.forEach(entry => {
      if (Array.isArray(entry.subjects)) {
        entry.subjects.forEach((s: string) => subjectsSet.add(s));
      } else if (entry.subjects) {
        subjectsSet.add(entry.subjects);
      }
    });
    allSubjects.value = Array.from(subjectsSet);

    // Etiquetas
    const tagsSet = new Set<string>();
    data.value.ofertas.forEach(entry => {
      if (Array.isArray(entry.tags)) {
        entry.tags.forEach((t: string) => tagsSet.add(t));
      } else if (entry.tags) {
        tagsSet.add(entry.tags);
      }
    });
    allTags.value = Array.from(tagsSet);
  }
});

const { data: servicios } = await useFetch('/api/ofertas/areas-servicio', { method: 'GET' });

const skipNextDisabled = computed(() => (data.value ? data.value.total < limit.value : true));

const pages = computed(() => (data.value ? Math.ceil(data.value.total / 10) : 0));
const page = ref(0);

function skipPrevious() {
    if (data.value?.total != null && data.value?.total >= skip.value && limit.value > skip.value) {
        skip.value -= 10;
        limit.value -= 10;
    }
}

function skipNext() {
    if (data.value?.total != null && data.value?.total >= limit.value) {
        skip.value += limit.value;
        limit.value += limit.value;
    }
}

const firstPage = computed(() => page.value === 0);
const lastPage = computed(() => pages.value <= 1 || page.value === pages.value);

const role = useAuthRole();

const search = ref('');

const filteredEntries = computed(() => {
    if (!data?.value?.ofertas) return [];
    const searchText = search.value.toLowerCase();
    return data.value.ofertas.filter((entry: any) => {
        return (
            entry.title?.toLowerCase().includes(searchText) ||
            entry.description?.toLowerCase().includes(searchText) ||
            (Array.isArray(entry.subjects) ? entry.subjects.join(', ').toLowerCase().includes(searchText) : entry.subjects?.toLowerCase().includes(searchText)) ||
            (Array.isArray(entry.tags) ? entry.tags.join(', ').toLowerCase().includes(searchText) : entry.tags?.toLowerCase().includes(searchText))
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
</script>