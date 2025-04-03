<template>
	<h1 class="mb-4 text-3xl font-semibold">Proyectos</h1>
	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.count" type="warning" title="Advertencia"> No hay proyectos registrados en el sistema. </alert>
	<div v-else>
		<div v-for="proyecto in data.entries" :key="proyecto.id" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg overflow-hidden p-6 mb-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
			<!-- Imagen -->
			<img :src="proyecto.image" alt="Imagen del proyecto" class="w-full h-64 object-cover rounded-md lg:w-1/3 lg:h-auto" />

			<!-- Contenido -->
			<div class="flex-1">
				<h2 class="text-3xl font-bold mb-4">{{ proyecto.title }}</h2>
				<p class="text-lg"><strong>Descripción:</strong> {{ proyecto.description }}</p>
				<p class="text-lg"><strong>Estado:</strong> {{ proyecto.status }} <span class="inline-block text-xl">📅</span></p>

				<h3 class="mt-6 text-2xl font-semibold">Detalles del Proyecto</h3>
				<p><strong>Observaciones de la Oferta:</strong> {{ proyecto.offerTemporaryObservations }}</p>
				<p><strong>Observaciones de la Demanda:</strong> {{ proyecto.demandTemporaryObservations }}</p>
				
				<p><strong>Cuatrimestre de la Oferta:</strong> {{ proyecto.offerQuarter }}</p>
				<p><strong>Año Académico de la Oferta:</strong> {{ proyecto.offerAcademicYear }}</p>

				<h3 class="mt-6 text-2xl font-semibold">Fechas Importantes</h3>
				<p><strong>Fecha Límite de la Oferta:</strong> {{ new Date(proyecto.offerDeadline).toLocaleDateString() }} <span class="inline-block text-xl">⏳</span></p>
				<p><strong>Fecha de Inicio de la Demanda:</strong> {{ new Date(proyecto.demandDefinitionPeriodStart).toLocaleDateString() }} <span class="inline-block text-xl">📆</span></p>
				<p><strong>Fecha de Fin de la Demanda:</strong> {{ new Date(proyecto.demandDefinitionPeriodEnd).toLocaleDateString() }} <span class="inline-block text-xl">📅</span></p>
				<p><strong>Fecha de Ejecución de la Demanda:</strong> {{ new Date(proyecto.demandExecutionPeriodStart).toLocaleDateString() }} - {{ new Date(proyecto.demandExecutionPeriodEnd).toLocaleDateString() }} <span class="inline-block text-xl">⚡</span></p>

				<h3 class="mt-6 text-2xl font-semibold">Participantes</h3>
				<p><strong>Estudiantes:</strong> <span class="inline-block text-xl">🎓</span></p>
				<ul>
					<li v-for="student in JSON.parse(proyecto.students)" :key="student.id">
						{{ student.firstName }} {{ student.lastName }}
					</li>
				</ul>

				<p><strong>Profesores:</strong> <span class="inline-block text-xl">👨‍🏫</span></p>
				<ul>
					<li v-for="professor in JSON.parse(proyecto.professors)" :key="professor.id">
						{{ professor.firstName }} {{ professor.lastName }}
					</li>
				</ul>

				<h3 class="mt-6 text-2xl font-semibold">Ciudad de la Demanda</h3>
				<p>{{ proyecto.demandCity }} <span class="inline-block text-xl">🌆</span></p>

				<h3 class="mt-6 text-2xl font-semibold">Propósito de la Demanda</h3>
				<p>{{ proyecto.demandPurpose }} <span class="inline-block text-xl">🎯</span></p>

				<h3 class="mt-6 text-2xl font-semibold">Beneficiarios de la Demanda</h3>
				<p>{{ proyecto.demandBeneficiaryCommunity }} <span class="inline-block text-xl">❤️</span></p>
			</div>
		</div>
	</div>


	<div class="mt-8 w-full rounded-lg bg-base-200 p-4 drop-shadow-lg">
		<div v-if="data">
			<p>
				<strong>{{ data.count }} resultados</strong> (mostrando del {{ page * 10 + 1 }} al {{ page * 10 + 1 + data.entries.length }})
			</p>
		</div>
		<div v-if="data" class="overflow-x-auto">
			<table class="w-full table-auto border-collapse border border-gray-200 rounded-lg shadow-md">
    <!-- head -->
    <thead class="bg-blue-500 text-white">
        <tr>
            <th class="p-3 text-left">Profesores</th>
            <th class="p-3 text-left">Entidad</th>
            <th class="p-3 text-left">Estudiantes</th>
            <th class="p-3 text-left">Proyecto</th>
            <th class="p-3 text-left">Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="entry of data.entries" :key="entry.id" class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="p-4">
                <div v-for="professor of JSON.parse(entry.professors)" :key="professor.id" class="text-gray-700">
                    {{ professor.firstName }} {{ professor.lastName }}
                </div>
            </td>

            <td class="p-4 text-gray-700">{{ entry.offerCreatorName }}</td>

            <td class="p-4">
                <div v-for="student of JSON.parse(entry.students)" :key="student.id" class="text-gray-700">
                    {{ student.firstName }} {{ student.lastName }}
                </div>
            </td>

            <td class="p-4 space-y-1 text-sm text-gray-600">
                <div><strong class="text-gray-900">Título:</strong> {{ entry.title }}</div>
                <div><strong class="text-gray-900">Descripción:</strong> {{ entry.description }}</div>
                <div><strong class="text-gray-900">Observaciones:</strong> {{ entry.offerTemporaryObservations || 'Ninguna' }}</div>
                <div><strong class="text-gray-900">Ciudad:</strong> {{ entry.demandCity }}</div>
                <div><strong class="text-gray-900">Propósito:</strong> {{ entry.demandPurpose }}</div>
                <div><strong class="text-gray-900">Comunidad Beneficiaria:</strong> {{ entry.demandBeneficiaryCommunity }}</div>
                <div>
                    <strong class="text-gray-900">Periodo de Definición:</strong>
                    {{ new Date(entry.demandDefinitionPeriodStart).toLocaleDateString() }} -
                    {{ new Date(entry.demandDefinitionPeriodEnd).toLocaleDateString() }}
                </div>
                <div>
                    <strong class="text-gray-900">Periodo de Ejecución:</strong>
                    {{ new Date(entry.demandExecutionPeriodStart).toLocaleDateString() }} -
                    {{ new Date(entry.demandExecutionPeriodEnd).toLocaleDateString() }}
                </div>
                <div><strong class="text-gray-900">Fecha de Fin:</strong> {{ new Date(entry.demandEndDate).toLocaleDateString() }}</div>
            </td>
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
</template>

<script setup lang="ts">
const { data, error } = await useFetch('/api/partenariados', { method: 'GET' });

const pages = computed(() => (data.value ? Math.ceil(data.value.count / 10) : 0));
const page = ref(0);

const firstPage = computed(() => page.value === 0);
const lastPage = computed(() => pages.value <= 1 || page.value === pages.value);
</script>
