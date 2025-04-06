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
				<div class="mb-2">
				<label for="title" class="block">Título del Proyecto</label>
				<input v-model="newProject.title" type="text" id="title" required class="border rounded p-2 w-full" />
				</div>
				<div class="mb-2">
				<label for="description" class="block">Descripción</label>
				<textarea v-model="newProject.description" id="description" required class="border rounded p-2 w-full"></textarea>
				</div>
				<div class="mb-2">
				<label for="city" class="block">Ciudad</label>
				<input v-model="newProject.city" type="text" id="city" required class="border rounded p-2 w-full" />
				</div>
				<div class="mb-2">
				<label for="beneficiaryCommunity" class="block">Comunidad Beneficiaria</label>
				<input v-model="newProject.beneficiaryCommunity" type="text" id="beneficiaryCommunity" required class="border rounded p-2 w-full" />
				</div>
				<!-- Agrega más campos según sea necesario -->
				<div class="mb-2">
				<button type="submit" class="btn btn-success">Crear Proyecto</button>
				</div>
			</form>
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
  
	  <div v-else>
		<p>No tienes demandas activas actualmente.</p>
	  </div>
	</div>
  
  </template>
  
  
  <script setup lang="ts">
	const auth = useAuth();
	
	// Simulamos que obtenemos los proyectos del servidor.
	const { data: projects } = await useFetch('/api/partenariados', { method: 'GET' });
	const { data: demandas } = await useFetch('/api/demandas', { method: 'GET' });
	
	const filteredDemandas = computed(() => {
		return demandas.entries.filter(entry => entry.creatorId === auth.session.value!.id);
	});

	const showCreateProjectForm = ref(false);

	// Datos del nuevo proyecto
	const newProject = reactive({
		title: '',
		description: '',
		city: '',
		beneficiaryCommunity: '',
		image: '',  // Si quieres permitir subir imágenes, tendrás que gestionarlo aquí
		// Puedes añadir más campos según los detalles que quieras pedir en el formulario
	});
	
	// Hacemos que esta página sea accesible solo si el usuario está autenticado.
	definePageMeta({ auth: true });
  </script>
  