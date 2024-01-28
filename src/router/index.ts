import { locales } from "@/constants/locales"
import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
	type RouteComponent
} from "vue-router"

export type Locale = (typeof locales)[number]

type LocalizedRoute = {
	name: string
	paths: Record<Locale, string>
	component: RouteComponent
	children?: LocalizedRoute[]
}

const localizedRoutes: LocalizedRoute[] = [
	{
		name: "home",
		paths: {
			en: "/",
			fr: "/accueil"
		},
		component: () => import("../views/HomeView.vue"),
		children: [
			{
				name: "homeChild",
				paths: {
					en: "child",
					fr: "enfant"
				},
				component: () => import("../views/HomeViewChild.vue")
			}
		]
	},
	{
		name: "about",
		paths: {
			en: "/about",
			fr: "/a-propos"
		},
		component: () => import("../views/AboutView.vue")
	}
]

const localizedRouteToRecordRaw = (
	route: LocalizedRoute,
	locale: Locale,
	withPrefix = false
): RouteRecordRaw => {
	return {
		name: `${locale}__${route.name}`,
		path: withPrefix
			? `/${locale}${route.paths[locale]}`
			: route.paths[locale],
		component: route.component,
		children: route.children?.map((child) =>
			localizedRouteToRecordRaw(child, locale)
		)
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: locales
		.map((locale) =>
			localizedRoutes.map((route) =>
				localizedRouteToRecordRaw(route, locale, true)
			)
		)
		.flat()
})

export default router
