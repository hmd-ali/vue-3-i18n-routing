import type { Locale } from "@/router"
import { ref } from "vue"

const locale = ref<Locale>("en")

export const useLocale = () => {
	return locale
}
