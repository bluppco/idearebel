import { z, defineCollection } from "astro:content";
const careersCollection = defineCollection({

	schema: z.object({

		image: z.string(),
		link: z.string(),
		order: z.number(),
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),

	})

})
const ideasCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		image: z.string(),
		link: z.string(),
		order: z.number(),
		publish_date: z.string(),
		// seo_description: z.string(),
		// seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),
		url: z.string(),

	})

})

export const collections = {

	"careers": careersCollection,
	"ideas": ideasCollection,

}
