<script setup lang="ts">
import { useLocale } from "@/composables/locale"

const locale = useLocale()
</script>

<template>
	<div>Home view Child</div>
	<p>locale: {{ locale }}</p>
</template>
