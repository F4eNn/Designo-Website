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
	},
	plugins: [],
}
