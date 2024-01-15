/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth:{
				'8xl': '94.5rem'
			},
			colors:{
				'main-Bg': '#FBFBFB',
				'fain-white': '#F3F3F3',
				'card-border': '#EBEBEB',
				'Black-10%': 'rgb(21, 21, 21, 0.1)',
				'Card-Border-dark': '#383737',
				'Basic-Light-Gray': '#C5C5C5',
				'Basic-Dark-Gray': '#808080',
				'Basic-White': '#FFF',
				'Basic-Onyx': '#181818',
			},
			height:{
				15: '3.75rem'
			}
			
		},
	},
	plugins: [],
}
