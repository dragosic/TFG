import { onUnmounted } from 'vue'
<template>
    <h1 class="mb-4 text-3xl font-semibold">Mi Resumen</h1>
    <span class="truncate font-normal">{{ auth.session.value!.firstName }} {{ auth.session.value!.lastName }}</span>
    <div v-if="notificaciones?.length === 0" class="mt-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <p class="text-sm text-gray-500">No tienes notificaciones</p>
    </div>
    <div v-else>
    <div v-for="notificacion in notificaciones" :key="notificacion.id" class="mx-auto mt-4 flex min-w-[300px] max-w-sm items-center justify-between rounded-lg bg-white p-4 shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div class="flex flex-grow items-center gap-4 overflow-hidden">
            <div class="flex flex-col gap-1">
                <p class="truncate text-sm font-bold text-gray-1000">{{ notificacion.title }}</p>
                <p class="text-sm text-gray-500 whitespace-normal break-words">{{ notificacion.message }}</p>
                <div v-if="notificacion.pending">
                    <p class="text-sm text-gray-500">Pendiente ⚠️</p>
                    
                </div>
                <div v-else>
                    <p class="text-sm text-gray-500">Completada ✅</p>
                </div>
            </div>
        </div>
        <p v-if="notificacion.deadline" class="ml-4 flex-shrink-0 text-sm text-gray-500">{{ new Date(notificacion.deadline).toLocaleDateString() }}</p>
        <p v-if="!notificacion.read" class="ml-4 flex-shrink-0 text-sm text-gray-500">🔴</p>
    </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({ auth: true });

    const { data: notificaciones } = await useFetch('/api/notificaciones', {method: 'GET'})
    const auth = useAuth();

onUnmounted(async () => {
    
    if (notificaciones.value) {
        const unreadIds = notificaciones.value.filter(n => !n.read).map(n => n.id);
            
            if (unreadIds.length > 0) {
                try {
                    await $fetch('/api/notificaciones/mark-read', {
                        method: 'POST',
                        body: { ids: unreadIds },
                    });
                } catch (error) {
                    console.error('Error marking notifications as read on unmount:', error);
                }
            }
        }
    });
</script>