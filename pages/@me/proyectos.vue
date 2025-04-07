<template>
	<h1 class="mb-4 text-3xl font-semibold">Mis Proyectos</h1>
	<span class="truncate font-normal">{{ auth.session.value!.firstName }} {{ auth.session.value!.lastName }}</span>
	<span class="truncate font-bold">{{ UserRoleMapping[auth.session.value!.role] }}</span>
  
	<!-- Para el rol de "Socio Comunitario" -->
	<div v-if="auth.session.value?.role === 'CommunityPartner'">
		<h2>Bienvenido, Socio Comunitario</h2>
		<!-- Botón para añadir un nuevo proyecto -->
		<button @click="showCreateProjectForm = !showCreateProjectForm" class="btn btn-primary mb-4">
			Añadir Nuevo Proyecto
		</button>
		<!-- Formulario para añadir un proyecto -->
		<div v-if="showCreateProjectForm" class="bg-gray-100 p-4 rounded-md">
			<h3>Crear un Nuevo Proyecto</h3>
			<form @submit.prevent="createProject">
				<!-- Título -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Título</label>
					<input
					v-model="title"
					type="text"
					class="input grow"
					placeholder="Título del Proyecto"
					autocomplete="off"
					required
					/>
				</label>

				<!-- Descripción -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Descripcion</label>
					<input
					v-model="description"
					type="text"
					class="input grow"
					placeholder="Descripción"
					autocomplete="off"
					required
					/>
				</label>

				<!-- Propósito -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Propósito</label>
					<input
					v-model="purpose"
					type="text"
					class="input grow"
					placeholder="Propósito"
					autocomplete="off"
					required
					/>
				</label>

				<!-- Ciudad -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Ciudad</label>
					<input
					v-model="city"
					type="text"
					class="input grow"
					placeholder="Ciudad"
					autocomplete="off"
					required
					/>
				</label>

				<!-- Comunidad Beneficiaria -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Comunidad Beneficiaria</label>
					<input
					v-model="beneficiaryCommunity"
					type="text"
					class="input grow"
					placeholder="Comunidad Beneficiaria"
					autocomplete="off"
					required
					/>
				</label>

				<!-- Nombre Necesidad Social -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Nombre Necesidad Social</label>
					<input
					v-model="socialNeedName"
					type="text"
					class="input grow"
					placeholder="Nombre Necesidad Social"
					autocomplete="off"
					/>
				</label>

				<!-- Fecha de inicio del periodo de definición -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Inicio Definición</label>
					<input
					v-model="periodDefinitionStart"
					type="date"
					class="input grow"
					placeholder="Inicio Definición"
					required
					/>
				</label>

				<!-- Fecha de fin del periodo de definición -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Fin Definición</label>
					<input
					v-model="periodDefinitionEnd"
					type="date"
					class="input grow"
					placeholder="Fin Definición"
					required
					/>
				</label>

				<!-- Fecha de ejecución -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Inicio Ejecución</label>
					<input
					v-model="periodEjecutionStart"
					type="date"
					class="input grow"
					placeholder="Inicio Ejecución"
					/>
				</label>

				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Fin Ejecución</label>
					<input
					v-model="periodEjecutionEnd"
					type="date"
					class="input grow"
					placeholder="Fin Ejecución"
					/>
				</label>

				<!-- Fecha límite -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Fecha Límite</label>
					<input
					v-model="periodDeadline"
					type="date"
					class="input grow"
					placeholder="Fecha Límite"
					/>
				</label>

				<!-- Observaciones -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Observaciones temporales (Mañana o tarde)</label>
					<select
						v-model="temporaryObservations"
						class="input grow"
						required
					>
						<option disabled value="">Selecciona horario</option>
						<option value="Mañana">Mañana</option>
						<option value="Tarde">Tarde</option>
					</select>
				</label>


				<!-- Áreas de Servicio -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Áreas de Servicio</label>

					<!-- Selector múltiple -->
					<select
						v-model="serviceAreas"
						class="input grow"
						required
					>
						<option
							v-for="servicio in servicios"
							:key="servicio.id"
							:value="servicio.nombre"
							>
							{{ servicio.nombre }}
						</option>
					</select>
				</label>


				<!-- Titulaciones requeridas -->
				<label class="input input-bordered flex items-center gap-2">
					<label class="block">Titulaciones </label>
					<input
					v-model="degrees"
					type="text"
					class="input grow"
					placeholder="Titulaciones "
					/>
				</label>

				<!-- Usuario creador (autocompletado con auth) -->
				<!-- <input type="hidden" :value="auth.session.value!.firstName" v-model="creatorName" /> -->

				<!-- Botón -->
				<div class="mb-2 mt-2">
					<button type="submit" class="btn btn-success">Crear Proyecto</button>
				</div>
			</form>
			<alert v-if="error" type="danger" title="Error">
				{{ error }}
			</alert>
		</div>
  
	  <!-- Mostrar las demandas obtenidas -->
	  <div v-if="demandas && demandas.entries.length > 0">
		<h3>Tus Demandas de Servicio</h3>
		<ul>
			
		  <!-- Iterar sobre las demandas -->
		  <div v-if = "demandas.entries == auth.session.value?.id" class="flex items-center">
		  	<li v-for="entry in demandas.entries" :key="entry.id" class="border-b py-4">
			  <!-- Imagen del proyecto -->
			  <img :src="`/${entry.image}`" alt="Imagen de la demanda" class="w-20 h-20 mr-4" />

			  
			  <!-- Información del proyecto -->
			  <div class="flex-1">
				<h4 class="text-xl font-semibold">{{ entry.title }}</h4>
				<p class="text-gray-600">{{ entry.description }}</p>
				<p class="text-sm text-gray-500">Beneficiarios: {{ entry.beneficiaryCommunity }}</p>
				<p class="text-sm text-gray-500">Periodo de Ejecución: {{ new Date(entry.periodEjecutionStart).toLocaleDateString() }} - {{ new Date(entry.periodEjecutionEnd).toLocaleDateString() }}</p>
				<p class="text-sm text-gray-500">Observaciones: {{ entry.temporaryObservations }}</p>
			  </div>
  
			  <!-- Botón para ver más detalles o interactuar con el proyecto -->
			  <div>
				<button @click="viewProject(entry.id)" class="btn btn-primary">Ver detalles</button>
			  </div>
			</li>
			</div>
			<div v-else>
				<p>No tienes demandas activas actualmente.</p>
			</div>
		</ul>
	  </div>
  
	</div>
  
  </template>
  
  
  <script setup lang="ts">
	const auth = useAuth();
	
	// Simulamos que obtenemos los proyectos del servidor.
	const { data: demandas } = await useFetch('/api/demandas', { method: 'GET' });
	const { data: servicios } = await useFetch('/api/ofertas/areas-servicio', { method: 'GET' });
	const { data: users } = await useFetch('/api/users', { method: 'GET' });
	const router = useRouter();
	const showCreateProjectForm = ref(false);
	const title = ref('');
	const description = ref('');
	const purpose = ref('');
	const city = ref('');
	const beneficiaryCommunity = ref('');
	const socialNeedName = ref('');
	const periodDefinitionStart = ref('');
	const periodDefinitionEnd = ref('');
	const periodEjecutionStart = ref('');
	const periodEjecutionEnd = ref('');
	const periodDeadline = ref('');
	const temporaryObservations = ref('');
	const serviceAreas = ref('');
	const degrees = ref('');

	const error = refAutoReset<string>('', 25000);
	
	async function createProject() {
		try{
			demandas.value = await $fetch('/api/demandas', {
				method: 'POST',
				body: {
					title: title.value,
					description: description.value,
					purpose: purpose.value,
					city: city.value,
					beneficiaryCommunity: beneficiaryCommunity.value,
					socialNeedName: socialNeedName.value,
					periodDefinitionStart: periodDefinitionStart.value,
					periodDefinitionEnd: periodDefinitionEnd.value,
					periodEjecutionStart: periodEjecutionStart.value,
					periodEjecutionEnd: periodEjecutionEnd.value,
					periodDeadline: periodDeadline.value,
					temporaryObservations: temporaryObservations.value,
					serviceAreas: serviceAreas.value,  // Asegúrate de usar '.value' si es una referencia.
					creatorName: users?.users?.find((usuario) => usuario.id === auth.session.value!.id).name,
					creatorId: auth.session.value!.id,
					creatorMission: users?.users?.find((usuario) => usuario.id === auth.session.value!.id).mission,
					creatorUrl: users?.users?.find((usuario) => usuario.id === auth.session.value!.id).url,
					creatorAvatar: users?.users?.find((usuario) => usuario.id === auth.session.value!.id).avatar,
					creatorSector: users?.users?.find((usuario) => usuario.id === auth.session.value!.id).sector,
					createdAt: new Date(),
					updatedAt: new Date(),
					degrees: degrees.value
				}	
			});
		} catch (e: any){
			error.value = String(e.statusMessage ?? e.message ?? e);
		}
	}
	

	// Hacemos que esta página sea accesible solo si el usuario está autenticado.
	definePageMeta({ auth: true });
  </script>
  