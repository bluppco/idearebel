/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'contact': "url('https://blupp.b-cdn.net/idearebel/contact.jpg?quality=80')",
				'creative_ideas': "url('https://blupp.b-cdn.net/idearebel/metaverse-marketing.png?quality=80')",

			},
			fontFamily: {
				'garamond': ["garamond-premier-pro", "serif"],
				'karla': ['Karla','sans-serif']
			}
		},
	},
	plugins: [],
}
