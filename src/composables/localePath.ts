import {
	useRouter,
	type RouteRecordRaw,
	type RouteLocationNamedRaw
} from "vue-router"
import { useLocale } from "./locale"

export const useLocalePath = () => {
	const locale = useLocale()
	const localePath = (
		route: RouteLocationNamedRaw
	): RouteLocationNamedRaw => {
		return {
			...route,
			name: `${locale.value}__${route.name?.toString()}`
		}
	}
	return localePath
}
