<template>
	<h1 class="mb-4 text-3xl font-semibold">Ofertas</h1>
	<alert v-if="error" type="danger" title="Error" class="w-full">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.ofertas.length" type="warning" title="Advertencia" class="w-full">No hay ofertas registradas en el sistema.</alert>
	<div v-else>
		<div v-for="oferta in data.ofertas" :key="oferta.id" class="bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-lg rounded-lg overflow-hidden p-6 mb-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
			<!-- Imagen -->
			<img :src="oferta.image" alt="Imagen de la oferta" class="w-full h-64 object-cover rounded-md lg:w-1/3 lg:h-auto" />

			<!-- Contenido -->
			<div class="flex-1">
				<h2 class="text-3xl font-bold mb-4">{{ oferta.title }}</h2>
				<p class="text-lg"><strong>Descripción:</strong> {{ oferta.description }}</p>
				<p class="text-lg"><strong>Fecha límite:</strong> {{ new Date(oferta.deadline).toLocaleDateString() }} <span class="inline-block text-xl">⏰</span></p>

				<h3 class="mt-6 text-2xl font-semibold">Detalles de la Oferta</h3>
				<p class="mt-2"><strong>Año académico:</strong> {{ oferta.academicYear }}</p>
				<p><strong>Cuatrimestre:</strong> {{ oferta.quarter }}</p>
				<p><strong>Observaciones:</strong> {{ oferta.remarks }}</p>

				<h3 class="mt-6 text-2xl font-semibold">Profesor(es) asignado(s)</h3>
				<p class="text-lg"><strong>Profesor:</strong> <span class="inline-block text-xl">👨‍🏫</span> {{ JSON.parse(oferta.professors)[0].firstName }} {{ JSON.parse(oferta.professors)[0].lastName }}</p>

				<h3 class="mt-6 text-2xl font-semibold">Servicios y Asignaturas</h3>
				<p class="text-lg"><strong>Servicios:</strong> {{ JSON.parse(oferta.services).join(', ') }}</p>
				<p class="text-lg"><strong>Asignaturas:</strong> {{ JSON.parse(oferta.subjects).join(', ') }}</p>

				<h3 class="mt-6 text-2xl font-semibold">Etiquetas</h3>
				<p class="text-lg"><strong>Tags:</strong> <span class="inline-block text-xl">🏷️</span> {{ JSON.parse(oferta.tags).join(', ') }}</p>

				<h3 class="mt-6 text-2xl font-semibold">Creador de la Oferta</h3>
				<p class="text-lg"><strong>Creador:</strong> {{ JSON.parse(oferta.creator).firstName }} {{ JSON.parse(oferta.creator).lastName }}</p>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
const { data, error } = await useFetch('/api/ofertas', { method: 'GET' });
</script>
