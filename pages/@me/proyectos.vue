<template>
	<h1 class="mb-4 text-3xl font-semibold">Mis Proyectos</h1>
	<div v-if="auth.loggedIn.value">
		<span class="truncate font-normal">{{ auth.session.value!.firstName }} {{ auth.session.value!.lastName }} </span>
		<div></div>
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
						v-model="periodExecutionStart"
						type="date"
						class="input grow"
						placeholder="Inicio Ejecución"
						required
						/>
					</label>

					<label class="input input-bordered flex items-center gap-2">
						<label class="block">Fin Ejecución</label>
						<input
						v-model="periodExecutionEnd"
						type="date"
						class="input grow"
						placeholder="Fin Ejecución"
						required
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
						required
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
					
					<!-- Necesidad social -->
					<label class="input input-bordered flex items-center gap-2">
					<label class="block">Necesidad social</label>
					<select
						v-model="socialNeedID"
						class="input grow"
						required
					>
						<option disabled value="">Selecciona necesidad</option>
						<option
						v-for="necesidad in ns?.data"
						
						:key="necesidad.id"
						:value="necesidad.id"  
						required
						>
						{{ necesidad.nombre }} <!-- Y esto es lo que se muestra -->
						</option>
					</select>
					</label>


					<!-- Áreas de Servicio -->
					<div class="mb-4">
						<p class="font-semibold mb-1">Áreas de Servicio</p>
						<div class="flex flex-col gap-2">
							<label
							v-for="servicio in servicios"
							:key="servicio.id"
							class="flex items-center gap-2"
							>
							<input
								type="checkbox"
								:value="servicio.id"
								v-model="serviceAreas"
							/>
							{{ servicio.nombre }}
							</label>
						</div>
					</div>


					<!-- Titulaciones requeridas -->
					<div class="mb-4">
						<p class="font-semibold mb-1">Titulaciones</p>
						<div class="flex flex-col gap-2">
							<label
							v-for="titulos in t?.data"
							:key="titulos.id"
							class="flex items-center gap-2"
							>
							<input
								type="checkbox"
								:value="titulos.id"
								v-model="titulaciones"
							/>
							{{ titulos.nombre }}
							</label>
						</div>
					</div>

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
				
				<!-- Iterar sobre las demandas DEL USUARIO ACTUAL -->
				<li
				v-for="entry in demandas.entries.filter(entry => entry.creatorId === auth.session.value?.id)"
				:key="entry.id"
				class="border-b py-4 flex items-center"
				>
					<!-- Imagen del proyecto -->
					<img :src="`/${entry.image}`" alt="Imagen de la demanda" class="w-20 h-20 mr-4" />
					<!-- Información del proyecto -->
					<div class="flex-1">
						<h4 class="text-xl font-semibold">{{ entry.title }}</h4>
						<p class="text-gray-600">{{ entry.description }}</p>
						<p class="text-sm text-gray-500">Beneficiarios: {{ entry.beneficiaryCommunity }}</p>
						<p class="text-sm text-gray-500">Periodo de Definicion: {{ new Date(entry.periodDefinitionStart).toLocaleDateString() }} - {{ new Date(entry.periodDefinitionEnd).toLocaleDateString() }}</p>
						<p class="text-sm text-gray-500">Periodo de Ejecución: {{ new Date(entry.periodEjecutionStart).toLocaleDateString() }} - {{ new Date(entry.periodEjecutionEnd).toLocaleDateString() }}</p>
						<p class="text-sm text-gray-500">Observaciones: {{ entry.temporaryObservations }}</p>
					</div>

					<!-- Botón para ver más detalles o interactuar con el proyecto -->
					<div>
						<button @click="viewProject(entry.id)" class="btn btn-primary">Ver detalles</button>
					</div>
				</li>

				<!-- Mostrar mensaje si no hay demandas -->
				<div v-if="!demandas.entries || !demandas.entries.some(entry => entry.creatorId === auth.session.value?.id)">
					<p>No tienes demandas activas actualmente.</p>
				</div>
			</ul>
			<!-- Formulario para la necesidad social -->
			{{ ns }}
			<form @submit.prevent="checkOrCreateSocialNeed">
				<!-- Campo para el nombre de la necesidad social -->
				<div class="input-group">
					<label for="socialNeedName" class="block"><strong>Necesidad social</strong></label>
					<input
						id="socialNeedName"
						v-model="socialNeedName"
						class="input grow"
						type="text"
						placeholder="Propósito"
						autocomplete="off"
						required
					/>
				</div>
				
				<!-- Botón para comprobar si la necesidad social está registrada -->
				<div class="mb-2 mt-2">
					<button type="submit" class="btn btn-success">Añadir necesidad social</button>
				</div>
			</form>
			{{ t }}
			<!-- Formulario para la Titulacion -->
			<form @submit.prevent="checkOrTitulacion">
				<!-- Campo para el nombre de la titulacion -->
				<div class="input-group">
					<label for="titulacionID" class="block"> <strong>Nombre titulacion (grado)</strong></label>
					<input
						id="titulacionID"
						v-model="titulacionID"
						class="input grow"
						type="text"
						placeholder="Titulación"
						autocomplete="off"
						required
					/>
				</div>
				<!-- Botón para comprobar si la necesidad social está registrada -->
				<div class="mb-2 mt-2">
					<button type="submit" class="btn btn-success">Añadir nueva titulacion</button>
				</div>
			</form>
			
		</div>
	
		</div>
		
		<div v-if="auth.session.value?.role === 'ExternalProfessor'"> <h2>Bienvenido, Profesor</h2> </div>
	</div>
  </template>
  
  
  <script setup lang="ts">
	const auth = useAuth();

	//Para añadir necesidad social
	const { data: ns } = await useFetch('/api/necesidad-social', { method: 'GET' });
	const socialNeedName = ref('');
	const socialNeedID = ref('');

	const checkOrCreateSocialNeed = async () => {
		const { error } = await useFetch('/api/necesidad-social/', {
			method: 'POST',
			body: { name: socialNeedName.value },
		});

		if (error.value) {
			console.error('Error al comprobar/crear necesidad social', error.value);
		}
	};

	const titulacionID = ref('');
	const titulaciones= ref<number[]>([]);
	//Para añadir titulacion
	const { data: t } = await useFetch('/api/titulacion', { method: 'GET' });
	const checkOrTitulacion = async () => {
		const { error } = await useFetch('/api/titulacion/', {
			method: 'POST',
			body: { name: titulacionID.value },
		});

		if (error.value) {
			console.error('Error al comprobar/crear necesidad social', error.value);
		}
	};

	// Simulamos que obtenemos los proyectos del servidor.
	const { data: demandas } = await useFetch('/api/demandas', { method: 'GET' });
	const { data: servicios } = await useFetch('/api/ofertas/areas-servicio', { method: 'GET' });
	const showCreateProjectForm = ref(false);
	const title = ref('');
	const description = ref('');
	const purpose = ref('');
	const city = ref('');
	const beneficiaryCommunity = ref('');
	//La de abajo no tiene nada
	//const { data: socialNeeds } = await useFetch('/api/demandas/necesidad-social'); // ajusta a tu endpoint real
	
	const periodDefinitionStart = ref('');
	const periodDefinitionEnd = ref('');
	const periodExecutionStart = ref('');
	const periodExecutionEnd = ref('');
	const periodDeadline = ref('');
	const temporaryObservations = ref('');
	const serviceAreas = ref<number[]>([]);


	const error = refAutoReset<string>('', 25000);
	
	async function createProject() {
		try{
			if (serviceAreas.value.length === 0) {
				error.value = 'Por favor, selecciona al menos una área de servicio.';
				return;  // Detener la ejecución si no se selecciona ninguna área
			}
			if (titulaciones.value.length === 0){
				error.value = 'Por favor, selecciona al menos una titulación.';
				return;  // Detener la ejecución si no se selecciona ninguna área
			}
			if (!periodDefinitionStart.value || !periodDefinitionEnd.value) {
				error.value = 'Faltan fechas en la definición del periodo.';
				return;
			}
			console.log("Valores que se envían:");
			console.log({
				periodDefinitionStart: periodDefinitionStart.value,
				periodDefinitionEnd: periodDefinitionEnd.value,
				periodExecutionStart: periodExecutionStart.value,
				periodExecutionEnd: periodExecutionEnd.value,
				periodDeadline: periodDeadline.value,
			});
			await $fetch('/api/demandas', {
				method: 'POST',
				body: {
					title: title.value,
					description: description.value,
					purpose: purpose.value,
					city: city.value,
					socialNeed: socialNeedID.value,
					beneficiaryCommunity: beneficiaryCommunity.value,
					periodDefinitionStart: periodDefinitionStart.value,
					periodDefinitionEnd: periodDefinitionEnd.value,
					periodExecutionStart: periodExecutionStart.value,
					periodExecutionEnd: periodExecutionEnd.value,
					periodDeadline: periodDeadline.value,
					temporaryObservations: temporaryObservations.value,
					serviceAreas: serviceAreas.value,
					degrees: titulaciones.value
				}	
			});
			//location.reload();  // Esto recargará la página completa
		} catch (e: any){
			error.value = String(e.statusMessage ?? e.message ?? e);
		}
	}
	

	// Hacemos que esta página sea accesible solo si el usuario está autenticado.
	definePageMeta({ auth: true });
  </script>
  