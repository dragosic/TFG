<template>
	<div class="prose w-full max-w-screen-md mx-auto p-4 bg-base-200 rounded-lg drop-shadow-lg">
	  <!-- Botón Volver -->
	  <nuxt-link to="/gestor/usuarios" class="btn btn-ghost mb-6">
		<Icon name="material-symbols:arrow-back" />
		Volver
	  </nuxt-link>
  
	  <!-- Título -->
	  <h1 class="text-3xl font-semibold mb-4">Editar usuario</h1>
	  {{ form.id }}
  
	  <!-- Error -->
	  <alert v-if="error" type="danger" title="Error">
		No se pudo descargar el usuario seleccionado.
		{{ error.statusMessage ?? error.message ?? error }}
	  </alert>
  
	  <!-- Formulario -->
	  <form v-else @submit.prevent="saveChanges" class="grid md:grid-cols-2 gap-4">
		<!-- Nombre -->
		<label class="form-control w-full">
		  <div class="label">
			<span class="label-text">Nombre</span>
		  </div>
		  <input v-model="form.firstName" type="text" class="input input-bordered w-full" required />
		</label>
  
		<!-- Apellidos -->
		<label class="form-control w-full">
		  <div class="label">
			<span class="label-text">Apellidos</span>
		  </div>
		  <input v-model="form.lastName" type="text" class="input input-bordered w-full" required/>
		</label>
  
		<!-- Email -->
		<label class="form-control w-full">
		  <div class="label">
			<span class="label-text">Correo electrónico</span>
		  </div>
		  <input v-model="form.email" type="email" class="input input-bordered w-full !border-base-300 !bg-base-300" disabled/>
		</label>
  
		<!-- Teléfono -->
		<label class="form-control w-full">
		  <div class="label">
			<span class="label-text">Teléfono</span>
		  </div>
		  <input v-model="form.phone" type="tel" class="input input-bordered w-full" />
		</label>
  
		<!-- Tipo de perfil -->
		<div class="col-span-2">
		  <div class="label">
			<span class="label-text">Rol de usuario</span>
		  </div>
		  <select v-model="form.type" class="select select-bordered w-full">
			<option disabled value="">Selecciona un tipo</option>
			<option value="ExternalStudent">Estudiante Externo</option>
			<option value="InternalStudent">Estudiante Interno</option>
			<option value="ExternalProfessor">Profesor Externo</option>
			<option value="InternalProfessor">Profesor Interno</option>
			<option value="CommunityPartner">Socio Comunitario</option>
			<option value="Tutor">Tutor</option>
			<option value="Colaborator">Colaborador</option>
			<option value="Admin">Administrador</option>
		  </select>
		</div>
  
		<!-- Campos dinámicos según tipo -->
		<!-- Estudiante Interno -->
		<template v-if="form.type === 'InternalStudent'">
			{{ user }}
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Carrera</span>
				</div>
				<template v-for="titulacion in titulaciones.data" :key="titulacion.id">
					<template v-if="titulacion.id === user.degree">
						<input v-model="titulacion.nombre" type="text" class="input input-bordered w-full" />
					</template>
				</template>
			</label>
		</template>


		<!-- Estudiante Externo -->
		<template v-if="form.type === 'ExternalStudent'">
			<label class="form-control w-full">
				<div class="label">
				<span class="label-text">Universidad</span>
				</div>

				<template v-for="titulacion in titulaciones.data" :key="titulacion.id">
					<template v-if="titulacion.id === user.university">
						<input v-model="titulacion.nombre" type="text" class="input input-bordered w-full" />
					</template>
				</template>
			</label>

			<label class="form-control w-full">
				<div class="label">
				<span class="label-text">Carrera</span>
				</div>
				<input v-model="user.degree" type="text" class="input input-bordered w-full" />
			</label>
		</template>


		<!-- Profesor Interno -->
		<template v-else-if="form.type === 'InternalProfessor'">
			
			<template v-for="profe in profesoresInt" :key="profe.id">
				<template v-if="profe.id === form.id">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Carrera</span>
						</div>
						<template v-for="grados in titulaciones.data" :key="grados.id">
							<template v-if="profe.degrees.includes(grados.id) ">
								<input v-model="grados.nombre" type="text" class="input input-bordered w-full" />
							</template>
						</template>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Área conocimiento</span>
						</div>

						<!-- SOLO UN V-FOR: combinamos area y areaProf directamente -->
						<template v-for="area in areaCon" :key="area.id">
							<template v-if="profe.knowledgeAreas.includes(area.id)">
								<input v-model="area.nombre" type="text" class="input input-bordered w-full" />
							</template>
						</template>
					</label>
				</template>
			</template>
		</template>


		<!-- Profesor Externo -->
		<template v-else-if="form.type === 'ExternalProfessor'">
			{{ profesoresExt }}
			<template v-for="profe in profesoresExt" :key="profe.id">
				<template v-if="profe.id === form.id">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Universidad</span>
						</div>
						<template v-for="titulacion in titulaciones.data" :key="titulacion.id">
							<template v-if="titulacion.id === profe.university">
								<input v-model="titulacion.nombre" type="text" class="input input-bordered w-full" />
							</template>
						</template>
					</label>

					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Facultad</span>
						</div>
						<input v-model="profe.faculty" type="text" class="input input-bordered w-full" />
					</label>

					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Área conocimiento</span>
						</div>

						<!-- SOLO UN V-FOR: combinamos area y areaProf directamente -->
						<template v-for="area in areaCon" :key="area.id">
							<template v-if="profe.knowledgeAreas.includes(area.id)">
								<input v-model="area.nombre" type="text" class="input input-bordered w-full" />
							</template>
						</template>
					</label>
				</template>
			</template>
		</template>

  
		<!-- Socio Comunitario -->
		<template v-else-if="form.type === 'CommunityPartner'">
			<template v-for="socio in socios" :key="socio.id">
				<template v-if="socio.id === form.id">
				<label class="form-control w-full">
					<div class="label">
					<span class="label-text">Sector</span>
					</div>
					<input v-model="socio.sector" type="text" class="input input-bordered w-full" />
				</label>

				<label class="form-control w-full">
					<div class="label">
					<span class="label-text">Nombre socio</span>
					</div>
					<input v-model="socio.name" type="text" class="input input-bordered w-full" />
				</label>

				<label class="form-control w-full">
					<div class="label">
					<span class="label-text">Sitio web</span>
					</div>
					<input v-model="socio.url" type="url" class="input input-bordered w-full" />
				</label>

				<div class="col-span-2">
					<div class="label">
					<span class="label-text">Misión</span>
					</div>
					<textarea v-model="socio.mission" class="textarea textarea-bordered w-full"></textarea>
				</div>
				</template>
			</template>
		</template>

		<!-- Tutor -->

		<!-- Colaborador -->

		

		<!-- Avatar -->
		<div ref="avatarContainerElement" class="relative h-48 w-48 shrink-0">
				<div class="relative mx-auto block">
					<img v-if="preview" :src="preview" class="block overflow-hidden rounded-full" />
					<avatar v-else :src="avatarId" :size="256" class="block overflow-hidden rounded-full" />

					<div
						class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 rounded-full bg-black/40 opacity-0 outline outline-info transition-opacity"
						:class="{ 'opacity-100': isOverDropZone }"
					>
						<div class="h-full w-full content-center text-center text-xl font-semibold drop-shadow-md">
							<span
								class="rounded-lg border-2 border-dotted border-base-300/80 bg-info p-2 text-info-content outline outline-4 outline-info"
							>
								<Icon name="material-symbols:imagesmode-rounded" class="h-6 w-6" />
								Subir
							</span>
						</div>
					</div>

					<div class="absolute bottom-0 left-0">
						<div class="dropdown dropdown-hover">
							<div tabindex="0" role="button" class="btn btn-neutral btn-sm">
								<Icon name="material-symbols:edit-rounded" />
								Editar
							</div>
							<ul tabindex="0" class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
								<li>
									<label for="avatar-file-upload">
										<Icon name="material-symbols:add-a-photo-rounded" />
										Subir imagen
									</label>
								</li>
								<li v-if="avatarId">
									<button
										class="text-error"
										@click.prevent="
											file = null;
											avatarId = null;
										"
									>
										<Icon name="material-symbols:delete-rounded" />
										Eliminar imagen
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		
		<!-- Botón guardar -->
		<div class="col-span-2 flex justify-end">
		  <button type="submit" class="btn btn-primary">Guardar cambios</button>
		</div>
	  </form>
	</div>
  </template>
  
  <script setup lang="ts">
  import { reactive, onMounted } from 'vue';
  
  definePageMeta({ auth: true, roles: ['Admin'] });
  
  const endpoint = asTypeParameterizedRoute(`/api/users/${useRouteNumber('id')}`);
  const { data: user, error } = await useFetch(endpoint, { method: 'GET' });
  
  const { data: socios } = await useFetch('/api/users/socios', { method: 'GET' });
  
  const { data: profesoresExt } = await useFetch('/api/users/profesoresExt', { method: 'GET' });

  const { data: profesoresInt } = await useFetch('/api/users/profesoresInt', { method: 'GET' });

  const { data: areaCon } = useFetch('/api/knowledge-areas', { method: 'GET'});
 

  const { data: titulaciones } = useFetch('/api/titulacion', { method: 'GET'});


  const form = reactive({
	id: 0,
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	type: '',
	university: '',
	degree: '',
	faculty: '',
	sector: '',
	url: '',
	mission: '',
  });
  
  onMounted(() => {
	if (user.value) {
	  Object.assign(form, {
		id : user.value.id,
		firstName: user.value.firstName,
		lastName: user.value.lastName,
		email: user.value.email,
		phone: user.value.phone,
		type: user.value.role,
		degree: user.value.degree,
		university: user.value.university,
		faculty: user.value.data?.faculty ?? '',
		sector: user.value.data?.sector ?? '',
		url: user.value.data?.url ?? '',
		mission: user.value.data?.mission ?? '',
	  });
	  definePrivateAreaSeo({ title: `Editando ${user.value.firstName} ${user.value.lastName}` });
	} else {
	  definePrivateAreaSeo({ title: 'Usuario no encontrado' });
	}
  });
  
  async function saveChanges() {
	try {
	  const body = {
		firstName: form.firstName,
		lastName: form.lastName,
		email: form.email,
		phone: form.phone,
		role: form.type,
		data: {
		  university: form.university,
		  degree: form.degree,
		  faculty: form.faculty,
		  sector: form.sector,
		  url: form.url,
		  mission: form.mission,
		}
	  };
	//   await $fetch(endpoint, { method: 'PUT', body });
	//   alert('Cambios guardados correctamente.');
	} catch (e) {
	  console.error(e);
	  alert('Error al guardar los cambios.');
	}
  }
  </script>
  