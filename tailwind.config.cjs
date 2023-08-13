/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'garamond': ["garamond-premier-pro", "serif"],
				'karla': ['Karla','sans-serif'],
				'larsseit': ['Larsseit','Helvetica','Arial','sans-serif'],
			},
			transitionProperty: {
                'height': 'height'
            },
			colors: {
				"primary": "#B3B3B3",
				"secondary": "#eeeeee"
			}
		},
	},
	plugins: [],
}
