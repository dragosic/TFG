<template>
	<h1 class="mb--4 text-3xl font-semibold">Partenariados</h1>
	<alert v-if="error" type="danger" title="Error">
		{{ error.statusMessage ?? error.message ?? error }}
	</alert>
	<alert v-else-if="!data?.entries.length" type="warning" title="Advertencia" class="w-full">No hay partenariados registrados en el sistema.</alert>
	<div v-else>
    <div v-for="entry in data.entries" :key="entry.id" class="bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-lg rounded-lg overflow-hidden p-6 mb-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <!-- Imagen -->
        <img :src="entry.image" alt="Imagen de la oferta" class="w-full h-64 object-cover rounded-md lg:w-1/3 lg:h-auto" />

        <!-- Contenido -->
        <div class="flex-1">
            <h2 class="text-3xl font-bold mb-4">{{ entry.title }}</h2>
            <p class="text-lg"><strong>Descripción:</strong> {{ entry.description }}</p>
            <p class="text-lg"><strong>Estado:</strong> {{ entry.status }}</p>

            <h3 class="mt-6 text-2xl font-semibold">Detalles de la Demanda</h3>
            <p class="mt-2"><strong>Ciudad:</strong> <span class="inline-block text-xl">🏙️ {{ entry.demandCity }}</span></p>
            <p><strong>Propósito:</strong> {{ entry.demandPurpose }}</p>
            <p><strong>Observaciones:</strong> {{ entry.demandTemporaryObservations }}</p>

            <h3 class="mt-6 text-2xl font-semibold">Fechas Clave</h3>
            <p><strong>Inicio Periodo de Definición:</strong> {{ new Date(entry.demandDefinitionPeriodStart).toLocaleDateString() }}</p>
            <p><strong>Fin Periodo de Definición:</strong> {{ new Date(entry.demandDefinitionPeriodEnd).toLocaleDateString() }}</p>

            <h3 class="mt-6 text-2xl font-semibold">Participantes</h3>
            <p><strong>Estudiantes:</strong> <span class="inline-block text-xl">👩‍🎓</span></p>
            <ul class="list-disc pl-5">
                <li v-for="student in JSON.parse(entry.students)" :key="student.id" class="text-lg">
                    {{ student.firstName }} {{ student.lastName }}
                </li>
            </ul>

            <p class="mt-4"><strong>Profesores:</strong> <span class="inline-block text-xl">👨‍🏫</span></p>
            <ul class="list-disc pl-5">
                <li v-for="professor in JSON.parse(entry.professors)" :key="professor.id" class="text-lg">
                    {{ professor.firstName }} {{ professor.lastName }}
                </li>
            </ul>
        </div>
    </div>
</div>



</template>

<script setup lang="ts">
const { data, error } = await useFetch('/api/partenariados', { method: 'GET' });
</script>
