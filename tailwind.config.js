const daisyui = require("daisyui")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.tsx", "./lib/**/*.tsx"],
	theme: {
		extend: {}
	},
	plugins: [daisyui]
}
