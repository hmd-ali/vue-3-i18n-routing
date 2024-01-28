<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { useLocale } from "./composables/locale"
import { useLocalePath } from "./composables/localePath"
import { useSwitchLocale } from "./composables/switchLocale"
import { locales } from "./constants/locales"

const currentLocale = useLocale()
const localePath = useLocalePath()
const switchLocale = useSwitchLocale()
</script>

<template>
	<header>
		<RouterLink
			v-for="locale in locales"
			:key="locale"
			:to="switchLocale(locale)"
			class="link"
			:class="{ active: locale === currentLocale }"
			@click="currentLocale = locale"
		>
			{{ locale }}
		</RouterLink>
	</header>
	<p>Current locale: {{ currentLocale }}</p>

	<RouterView />
</template>

<style scoped>
.link {
	color: white;
}
.link.active {
	color: blue;
}
</style>
