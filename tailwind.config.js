// https://tailwindcss.com/docs/configuration
const typography = require("@tailwindcss/typography")
const daisyui = require("daisyui")
const themes = require("daisyui/src/colors/themes")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.tsx", "./lib/**/*.tsx"],
	plugins: [typography, daisyui],

	// https://daisyui.com/docs/config/
	daisyui: {
		themes: [
			{
				myLemonade: {
					...themes["[data-theme=lemonade]"],
					primary: "#8C0327" // autumn red #8C0327 // generate button red #FC0404
				}
			}
		]
	}
}
