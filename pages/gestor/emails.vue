<template></template>

<script setup lang="ts">
import type { PageMeta } from '#app';

definePageMeta({ 
  auth: true, 
  roles: ['Admin'] 
});

definePrivateAreaSeo({ title: 'Gestor de Emails' });
</script>
