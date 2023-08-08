import { z, defineCollection } from "astro:content";
const ideasCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		sub_title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		url: z.string(),
		image: z.string(),

	})

})
export const collections = {

	"ideas": ideasCollection

}
