<template>
	<section class="mx-auto w-full max-w-screen-md">
		<h1 class="mb-4 text-center text-3xl font-semibold">Inicio de sesión</h1>

		<button class="btn btn-primary mt-4 w-full">Acceder con SSO {{ organization }}</button>

		<div class="mt-8 rounded-lg bg-base-200 p-4 drop-shadow-lg">
			<form @submit.prevent="performLogin">
				<label class="input input-bordered flex items-center gap-2">
					<Icon name="ph:envelope-simple-fill" />
					<input v-model="email" type="text" class="input grow" placeholder="Correo electrónico" autocomplete="email" required />
				</label>

				<label class="input input-bordered flex items-center gap-2">
					<Icon name="ph:key-fill" />
					<input v-model="password" type="password" class="input grow" placeholder="Contraseña" autocomplete="current-password" required />
				</label>

				<label class="label cursor-pointer">
					<span class="label-text">Recordarme</span>
					<input v-model="remember" type="checkbox" class="checkbox" />
				</label>

				<input type="submit" value="Iniciar Sesión" class="btn btn-info mt-4 w-full text-info-content" />
			</form>
		</div> 
		<alert v-if="error" type="danger" title="Error">
			{{ error }}
		</alert>
	</section>
</template>

<script setup lang="ts">
	const { organization } = useRuntimeConfig().public;

	const email = ref('');
	const password = ref('');
	const remember = ref(false);

	const error = refAutoReset<string>('', 25000);

	const auth = useAuth();
	const router = useRouter();
	async function performLogin() {
		try {
			auth.session.value = await $fetch('/api/auth/login', {
				method: 'POST',
				body: { email: email.value, password: password.value }
			});
			await router.push(auth.redirectTo.value);
		} catch (e: any) {
			error.value = String(e.statusMessage ?? e.message ?? e);
		}
	}
</script>

<style scoped>
.tab-info {
	background-color: theme('colors.info') !important;
	color: theme('colors.info-content') !important;
}
</style>
