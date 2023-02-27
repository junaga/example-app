import AppHead from "~/lib/AppHead"

const title = "Online Bewerbung mit KI generieren lassen - Bewerbung.gg"

export default function IndexPage() {
	return (
		<>
			<AppHead title={title} />
			<div>
				<header>
					<h1>
						Bewerbung<span>.gg</span>
					</h1>
				</header>
				<main>Main page</main>
			</div>
		</>
	)
}
