/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				peach: '#e7816b',
				grey: '#8d8d8e',
				'light-peach': '#ffac9b',
				black: '#1d1c1e',
				'dark-grey': '#333136',
				white: '#ffff',
				'light-grey': '#f1f3f5',
			},
		},
		backgroundImage: {
			app_design_mobile: "url('/assets/home/mobile/image-app-design.jpg')",
			app_design_tablet: "url('/assets/home/tablet/image-app-design.jpg')",
			app_design_desktop: "url('/assets/home/desktop/image-app-design.jpg')",
			graphic_design_mobile: "url('/assets/home/mobile/image-graphic-design.jpg')",
			graphic_design_tablet: "url('/assets/home/tablet/image-graphic-design.jpg')",
			graphic_design_desktop: "url('/assets/home/desktop/image-graphic-design.jpg')",
			web_design_mobile: "url('/assets/home/mobile/image-web-design.jpg')",
			web_design_tablet: "url('/assets/home/tablet/image-web-design.jpg')",
			web_design_desktop: "url('/assets/home/desktop/image-web-design-large.jpg')",
		},
	},
	plugins: [],
}
