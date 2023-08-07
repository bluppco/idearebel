import { z, defineCollection } from "astro:content";
const blogs = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),
	})

})