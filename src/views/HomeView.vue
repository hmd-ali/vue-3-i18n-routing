<script setup lang="ts">
import { useLocalePath } from "@/composables/localePath"

const localePath = useLocalePath()
</script>

<template>
	<main>
		<div>
			<RouterLink
				:to="
					localePath({
						name: 'home'
					})
				"
			>
				Home
			</RouterLink>
			<RouterLink
				:to="
					localePath({
						name: 'homeChild'
					})
				"
			>
				Home Child
			</RouterLink>
		</div>
		<h1>Home View</h1>
		<RouterView />
	</main>
</template>
