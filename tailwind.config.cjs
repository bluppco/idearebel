/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'garamond': ["garamond-premier-pro", "serif"],
				'karla': ['Karla','sans-serif'],
				'larsseit': ['Larsseit','Helvetica','Arial','sans-serif'],
			}
		},
	},
	plugins: [],
}
