/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'garamond': ["garamond-premier-pro", "serif"],
				'karla': ["Karla","Courier","monospace"],
				'larsseit': ['Larsseit','Helvetica','Arial','sans-serif'],
				'ir': ["IR_Sans","Helvetica","sans-serif"]
			},
			transitionProperty: {
                'height': 'height'
            },
			colors: {
				"ir_green": "#46f1b2",
				"primary": "#B3B3B3",
				"secondary": "#eeeeee",
				"grey": "#989898"
			}
		},
	},
	plugins: [],
}
