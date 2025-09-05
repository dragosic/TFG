<template>
	<h1 class="mb-4 text-3xl font-semibold">Gestor de Usuarios</h1>
	
	<alert v-if="error" type="danger" title="Error" class="col-span-3">
		No se pudo descargar la lista de usuarios. Por favor, inténtelo de nuevo más tarde.
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	
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
					placeholder="Buscar usuasrios..."
					/>
				</div>
				<!-- Botones de navegación -->
				<div class="flex gap-2">
					<button class="btn btn-outline w-1/2" :disabled="skipPreviousDisabled" @click="skipPrevious">Anterior</button>
					<button class="btn btn-outline w-1/2" :disabled="skipNextDisabled" @click="skipNext">Siguiente</button>
				</div>
			</div>
			<label class="form-control w-full">
				<!-- Roles -->
				<div class="rounded-lg shadow p-4 bg-white">
					<h3 class="text-md font-semibold mb-2">Roles</h3>
					<div class="flex flex-col gap-2">
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Gestor"  />
							Gestor
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Profesor"  />
							Profesor
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Estudiante" />
							Estudiante
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Oficina ApS"  />
							Oficina ApS
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Socio comunitario" />
							Socio comunitario
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Tutor"  />
							Tutor
						</label>
						<label>
							<input v-model="selectedRoles" type="checkbox" value="Colaborador"  />
							Colaborador
						</label>
					</div>
				</div>
			</label>
	</aside>
	<!-- Contenido principal -->
	<main class="w-full md:w-3/4">
			<div class="rounded-lg shadow p-4 bg-white">
				<h2 class="text-lg font-semibold mb-4">Listado de usuarios</h2>
				<div v-if="data" class="w-full overflow-x-auto">
					<table class="table">
						<!-- head -->
						<thead>
							<tr>
								<th>Usuario</th>
								<th>Rol</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="entry of data.users" :key="entry.id" class="hover">
								<td class="flex items-center gap-4">
									<div class="mask mask-circle h-12 w-12 shrink-0">
										<avatar :src="entry.avatar" :size="64" />
									</div>
									<div class="grid gap-1">
										<span class="font-semibold"> {{ entry.firstName }} {{ entry.lastName }} </span>
										<span class="badge badge-ghost badge-sm">{{ entry.email }}</span>
									</div>
								</td>
								<td>
									{{ UserRoleMapping[entry.role] }}
								</td>
								<th>
									<div class="join">
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
						<!-- foot -->
						<tfoot>
							<tr>
								<th>Usuario</th>
								<th>Rol</th>
								<th>Acciones</th>
							</tr>
						</tfoot>
					</table>
				</div>

				<dialog ref="dialogElement" class="modal" @click="onDialogClick">
					<div class="modal-box">
						<h3 class="text-lg font-bold">¡Atención!</h3>
						<p class="py-4">Esta acción es permanente, ¿desea proceder al borrado del usuario?</p>
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

definePageMeta({ auth: true, roles: ['Admin'] } );
definePrivateAreaSeo({ title: 'Gestor de Usuarios' });

const skip = ref(0);
const limit = ref(25);
const query = ref('');

const rolMap: Record<string, string> = {
	'Gestor': 'Admin',
	'Profesor': 'InternalProfessor',
	'Estudiante': 'InternalStudent',
	'Oficina ApS': 'ApSOffice',
	'Socio comunitario': 'CommunityPartner',
	'Tutor': 'Tutor',
	'Colaborador': 'Collaborator',
};

const selectedRoles = ref<string[]>([]);

const rol = computed(() => {
  const mappedRoles = selectedRoles.value.map(label => rolMap[label]);
  const filteredRoles = mappedRoles.filter(Boolean);
  return filteredRoles;
});

onMounted(() => {
  rol.value.push('');
});


const { data, error } = useFetch('/api/users', {
  method: 'GET',
  query: {
    query: query.value,
    skip: skip.value,
    limit: limit.value,
    roles: rol.value.length > 0 ? rol.value : undefined
  }
});

watch([query, skip, limit, rol], async () => {
  try {
    const params = new URLSearchParams();
    params.set('query', query.value);
    params.set('skip', skip.value.toString());
    params.set('limit', limit.value.toString());

    // Añade cada rol como parámetro individual
    for (const r of rol.value) {
      params.append('roles', r);
    }

    const res = await $fetch(`/api/users?${params.toString()}`, {
      method: 'GET',
    });

    data.value = res;
  } catch (err) {
    error.value = err;
    console.error('Error en fetch reactivo:', err);
  }
});



const skipPreviousDisabled = computed(() => skip.value === 0);
const skipNextDisabled = computed(() => (data.value ? data.value.users.length < limit.value : true));



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

function skipPrevious() {
	if (data.value?.total != null && data.value?.total >= skip.value && limit.value > skip.value) {
		skip.value -= 25;
		limit.value -= 25;
	}
}

function skipNext() {
	
	if (data.value?.total != null && data.value?.total >= limit.value) {
		skip.value += limit.value;
		limit.value += limit.value;
	}
	
}


</script>
