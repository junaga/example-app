import AppHead from "~/lib/AppHead"
import Header from "~/lib/Header"
const endpoint = "/api/openai"
import type { RequestBody, ResponseBody } from "./api/openai"

const title = "Online Bewerbung mit KI generieren lassen - Bewerbung.gg"

async function submit(event: any) {
	event.preventDefault()

	const body: RequestBody = { prompt: event.target.prompt.value }
	const response = await fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})
	const data: ResponseBody = await response.json()

	console.log(data.choices)
}

export default function IndexPage() {
	return (
		<>
			<AppHead title={title} />
			<main>
				<form onSubmit={submit}>
					<input type="text" name="prompt" />
					<input type="submit" value="Generate names" />
				</form>
			</main>

			<style jsx>
				{`
					main {
						height: 100vh;
					}
				`}
			</style>
		</>
	)
}
