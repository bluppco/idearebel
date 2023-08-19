import { z, defineCollection } from "astro:content";
const careersCollection = defineCollection({

	schema: z.object({

		image: z.string(),
		link: z.string(),
		location: z.array(z.string()),
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
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),
		url: z.string(),

	})

})
const workCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		image: z.string(),
		link: z.string(),
		order: z.number(),
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),
		url: z.string(),
		video_flag: z.boolean(),
		video: z.string(),

	})

})
const servicesCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		image: z.string(),
		link: z.string(),
		listing_icon:  z.string(),
		listing_title: z.string(),
		order: z.number(),
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),
		url: z.string(),

	})

})

const teammemberCollection = defineCollection({

	schema: z.object({

		image: z.string(),
		link: z.string(),
		order: z.number(),
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string(),
		title: z.string(),
		url: z.string(),

	})

})
const footerCollection = defineCollection({

	schema: z.object({

		link: z.string(),
		live: z.boolean(),
		order: z.number(),
		title: z.string(),

	})

})

const officeCollection = defineCollection({

	schema: z.object({

		image: z.string(),
		link: z.string(),
		seo_description: z.string(),
		seo_title: z.string(),
		sub_title: z.string().nullable(),
		title: z.string(),
		location: z.string(),
		time_offset: z.number(),
		cover: z.string(),
		office_location: z.string(),
		address_1: z.string(),
		address_2: z.string(),
		phone: z.string(),
		office_link: z.string(),
		button_link: z.string(),
		phone_link: z.string(),

	})

})

export const collections = {

	"careers": careersCollection,
	"footer": footerCollection,
	"ideas": ideasCollection,
	"services": servicesCollection,
	"teammember" : teammemberCollection,
	"work": workCollection,
	"office" : officeCollection,

}
