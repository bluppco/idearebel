import { z, defineCollection } from "astro:content";
const ideasCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		image: z.string(),
		publish_date: z.string(),
		title: z.string(),
		url: z.string(),

	})

})
export const collections = {

	"ideas": ideasCollection

}
