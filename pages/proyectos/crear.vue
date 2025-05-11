<template>
    <h1 class="mb-4 text-3xl font-semibold">Crear Proyectos</h1>
    
    <div v-if="auth.loggedIn.value">
      <nuxt-link href="/proyectos" class="btn btn-ghost self-start mb-4">
        <Icon name="material-symbols:arrow-back" />
        Volver
      </nuxt-link>
  
      <div class="mb-6 flex items-center gap-2">
        <span class="truncate font-normal">{{ auth.session.value!.firstName }} {{ auth.session.value!.lastName }}</span>
        <span class="truncate font-bold">{{ UserRoleMapping[auth.session.value!.role] }}</span>
      </div>
  
      <!-- Para el rol de "Socio Comunitario" -->
      <div v-if="auth.session.value?.role === 'CommunityPartner'">
        <div class="flex justify-between items-center mb-6">
          <form @submit.prevent="createProject" class="w-full">
            <alert type="info" title="Información" class="mb-6">
              En esta página puedes crear una nueva demanda de servicio para que los profesores y estudiantes puedan participar.
            </alert>
  
            <div class="rounded-lg bg-base-200 p-4 drop-shadow-lg mb-6">
              <h2 class="mb-4 text-2xl font-semibold">
                <Icon name="material-symbols:description" class="-translate-y-0.5" />
                Información básica
              </h2>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Título *</span>
                </div>
                <input
                  v-model="title"
                  type="text"
                  placeholder="Título del Proyecto"
                  autocomplete="off"
                  class="input input-bordered w-full"
                  required
                />
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Descripción *</span>
                </div>
                <textarea
                  v-model="description"
                  placeholder="Descripción del proyecto"
                  autocomplete="off"
                  class="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Propósito *</span>
                </div>
                <input
                  v-model="purpose"
                  type="text"
                  placeholder="Propósito del proyecto"
                  autocomplete="off"
                  class="input input-bordered w-full"
                  required
                />
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Ciudad *</span>
                </div>
                <input
                  v-model="city"
                  type="text"
                  placeholder="Ciudad donde se realizará el proyecto"
                  autocomplete="off"
                  class="input input-bordered w-full"
                  required
                />
              </label>
            </div>
  
            <div class="rounded-lg bg-base-200 p-4 drop-shadow-lg mb-6">
              <h2 class="mb-4 text-2xl font-semibold">
                <Icon name="material-symbols:groups-2-rounded" class="-translate-y-0.5" />
                Beneficiarios
              </h2>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Comunidad Beneficiaria *</span>
                </div>
                <input
                  v-model="beneficiaryCommunity"
                  type="text"
                  placeholder="Comunidad que se beneficiará del proyecto"
                  autocomplete="off"
                  class="input input-bordered w-full"
                  required
                />
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Necesidad social *</span>
                </div>
                <select
                  v-model="socialNeedID"
                  class="select select-bordered w-full"
                  required
                >
                  <option disabled value="">Selecciona necesidad social</option>
                  <option
                    v-for="necesidad in ns?.data"
                    :key="necesidad.id"
                    :value="necesidad.id"
                  >
                    {{ necesidad.nombre }}
                  </option>
                </select>
              </label>
            </div>
  
            <div class="rounded-lg bg-base-200 p-4 drop-shadow-lg mb-6">
              <h2 class="mb-4 text-2xl font-semibold">
                <Icon name="material-symbols:calendar-month-outline-rounded" class="-translate-y-0.5" />
                Fechas
              </h2>
  
              <div class="grid md:grid-cols-2 md:gap-4 mb-4">
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Inicio definición *</span>
                  </div>
                  <input
                    v-model="periodDefinitionStart"
                    type="date"
                    class="input input-bordered w-full"
                    required
                  />
                </label>
  
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Fin definición *</span>
                  </div>
                  <input
                    v-model="periodDefinitionEnd"
                    type="date"
                    class="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
  
              <div class="grid md:grid-cols-2 md:gap-4 mb-4">
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Inicio ejecución</span>
                  </div>
                  <input
                    v-model="periodExecutionStart"
                    type="date"
                    class="input input-bordered w-full"
                  />
                </label>
  
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Fin ejecución</span>
                  </div>
                  <input
                    v-model="periodExecutionEnd"
                    type="date"
                    class="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Fecha límite</span>
                </div>
                <input
                  v-model="periodDeadline"
                  type="date"
                  class="input input-bordered w-full"
                />
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Observaciones temporales</span>
                </div>
                <select
                  v-model="temporaryObservations"
                  class="select select-bordered w-full"
                >
                  <option disabled value="">Selecciona horario</option>
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                </select>
              </label>
            </div>
  
            <div class="rounded-lg bg-base-200 p-4 drop-shadow-lg mb-6">
              <h2 class="mb-4 text-2xl font-semibold">
                <Icon name="material-symbols:school" class="-translate-y-0.5" />
                Requisitos
              </h2>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Áreas de Servicio *</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="servicio in servicios"
                    :key="servicio.id"
                    class="flex items-center gap-2 cursor-pointer label"
                  >
                    <input
                      type="checkbox"
                      :value="servicio.id"
                      v-model="serviceAreas"
                      class="checkbox checkbox-sm"
                    />
                    <span class="label-text">{{ servicio.nombre }}</span>
                  </label>
                </div>
              </label>
  
              <label class="form-control w-full mb-4">
                <div class="label">
                  <span class="label-text">Titulaciones requeridas *</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="titulos in t?.data"
                    :key="titulos.id"
                    class="flex items-center gap-2 cursor-pointer label"
                  >
                    <input
                      type="checkbox"
                      :value="titulos.id"
                      v-model="titulaciones"
                      class="checkbox checkbox-sm"
                    />
                    <span class="label-text">{{ titulos.nombre }}</span>
                  </label>
                </div>
              </label>
            </div>
  
            <button type="submit" class="btn btn-primary w-full md:w-auto">
              <Icon name="material-symbols:save" />
              Crear Proyecto
            </button>
  
            <alert v-if="error" type="danger" title="Error" class="mt-4">
              {{ error }}
            </alert>
          </form>
        </div>
  
        <!-- Listado de proyectos existentes -->
        <div v-if="demandas && demandas.entries.length > 0">
          <h3 class="text-xl font-semibold mb-4">Tus Proyectos Activos</h3>
          
          <div class="space-y-4">
            <!-- Iterar sobre las demandas DEL USUARIO ACTUAL -->
            <div
              v-for="entry in demandas.entries.filter(entry => entry.creatorId === auth.session.value?.id)"
              :key="entry.id"
              class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="card-body">
                <div class="flex flex-col md:flex-row gap-4">
                  <!-- Imagen del proyecto -->
                  <div class="flex-shrink-0">
                    <img 
                      :src="entry.image ? `/${entry.image}` : '/placeholder-project.png'" 
                      alt="Imagen del proyecto" 
                      class="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <!-- Información del proyecto -->
                  <div class="flex-grow">
                    <h4 class="card-title">{{ entry.title }}</h4>
                    <p class="text-gray-600 mb-2">{{ entry.description }}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div><span class="font-semibold">Beneficiarios:</span> {{ entry.beneficiaryCommunity }}</div>
                      <div><span class="font-semibold">Estado:</span> {{ entry.status }}</div>
                      <div><span class="font-semibold">Definición:</span> {{ new Date(entry.periodDefinitionStart).toLocaleDateString() }} - {{ new Date(entry.periodDefinitionEnd).toLocaleDateString() }}</div>
                      <div><span class="font-semibold">Ejecución:</span> {{ new Date(entry.periodEjecutionStart).toLocaleDateString() }} - {{ new Date(entry.periodEjecutionEnd).toLocaleDateString() }}</div>
                    </div>
                  </div>
                  
                  <!-- Botón para ver más detalles -->
                  <div class="flex-shrink-0 self-center">
                    <button @click="viewProject(entry.id)" class="btn btn-outline btn-primary">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Mostrar mensaje si no hay demandas -->
          <div 
            v-if="!demandas.entries || !demandas.entries.some(entry => entry.creatorId === auth.session.value?.id)"
            class="alert alert-info"
          >
            <Icon name="material-symbols:info-outline" />
            <span>No tienes proyectos activos actualmente.</span>
          </div>
        </div>
      </div>
      
      <div v-if="auth.session.value?.role === 'ExternalProfessor'" class="alert alert-info">
        <Icon name="material-symbols:info-outline" />
        <span>Bienvenido, Profesor. Aquí puedes ver los proyectos disponibles.</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const auth = useAuth();
  
  // Para añadir necesidad social
  const { data: ns } = await useFetch('/api/necesidad-social', { method: 'GET' });
  const socialNeedID = ref('');
  
  // Para titulaciones
  const { data: t } = await useFetch('/api/titulacion', { method: 'GET' });
  const titulaciones = ref<number[]>([]);
  
  // Obtener proyectos del servidor
  const { data: demandas } = await useFetch('/api/demandas', { method: 'GET' });
  const { data: servicios } = await useFetch('/api/ofertas/areas-servicio', { method: 'GET' });
  
  const showCreateProjectForm = ref(false);
  const title = ref('');
  const description = ref('');
  const purpose = ref('');
  const city = ref('');
  const beneficiaryCommunity = ref('');
  const periodDefinitionStart = ref('');
  const periodDefinitionEnd = ref('');
  const periodExecutionStart = ref('');
  const periodExecutionEnd = ref('');
  const periodDeadline = ref('');
  const temporaryObservations = ref('');
  const serviceAreas = ref<number[]>([]);
  const error = refAutoReset<string>('', 25000);
  
  async function createProject() {
    try {
      if (serviceAreas.value.length === 0) {
        error.value = 'Por favor, selecciona al menos una área de servicio.';
        return;
      }
      if (titulaciones.value.length === 0) {
        error.value = 'Por favor, selecciona al menos una titulación.';
        return;
      }
      if (!periodDefinitionStart.value || !periodDefinitionEnd.value) {
        error.value = 'Faltan fechas en la definición del periodo.';
        return;
      }
  
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
      
      // Recargar los proyectos después de crear uno nuevo
      await refreshNuxtData('proyectos');
      showCreateProjectForm.value = false;
      
      // Resetear el formulario
      title.value = '';
      description.value = '';
      purpose.value = '';
      city.value = '';
      beneficiaryCommunity.value = '';
      periodDefinitionStart.value = '';
      periodDefinitionEnd.value = '';
      periodExecutionStart.value = '';
      periodExecutionEnd.value = '';
      periodDeadline.value = '';
      temporaryObservations.value = '';
      serviceAreas.value = [];
      titulaciones.value = [];
      socialNeedID.value = '';
      
    } catch (e: any) {
      error.value = String(e.statusMessage ?? e.message ?? e);
    }
  }
  
  function viewProject(id: string) {
    navigateTo(`/proyectos/${id}`);
  }
  
  // Hacemos que esta página sea accesible solo si el usuario está autenticado.
  definePageMeta({ auth: true });
  </script>