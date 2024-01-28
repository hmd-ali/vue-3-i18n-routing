import type { Locale } from "@/router"
import { useLocale } from "./locale"
import { useRoute } from "vue-router"

export const useSwitchLocale = () => {
	const route = useRoute()

	const switchLocale = (locale: Locale) => {
		const splitName = route.name?.toString().split("__")

		return {
			name: `${locale}__${splitName?.[1]}`,
			params: route.params,
			query: route.query
			// replace: true // Uncomment this line if you want to replace the current history entry
		}
	}

	return switchLocale
}
