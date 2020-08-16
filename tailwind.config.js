const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [
		'src/**/*.js',
		'src/**/*.jsx',
		'src/**/*.ts',
		'src/**/*.tsx',
		'public/**/*.html',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
				logo: ['Reenie Beanie', 'cursive'],
			},
			colors: {
				zeal: '#29D877',
			},
		},
	},
	variants: {},
	plugins: [],
};
