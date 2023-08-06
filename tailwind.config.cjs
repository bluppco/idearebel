/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'contact': "url('https://blupp.b-cdn.net/idearebel/contact.jpg?quality=80')",
				'creative_ideas': "url('https://blupp.b-cdn.net/idearebel/metaverse-marketing.png?quality=80')",
				'home': "url('https://blupp.b-cdn.net/idearebel/NBA-Idea-Rebel.jpg?quality=80')",
				'digital_services': "url('https://blupp.b-cdn.net/idearebel/idea-rebel-tornoto-digital-ageny.jpg?quality=80')",
				'careers': "url('https://blupp.b-cdn.net/idearebel/Idea-Rebel-We-Are-Rebels-Agency-2.jpeg?quality=80')",
				'about': "url('https://blupp.b-cdn.net/idearebel/About_Header_Widescreen-1-3840x2160.jpg?quality=80')",
			}
		},
	},
	plugins: [],
}
