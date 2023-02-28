import AppHead from "~/lib/AppHead"
import Header from "~/lib/Header"

const title = "Online Bewerbung mit KI generieren lassen - Bewerbung.gg"

export default function IndexPage() {
	return (
		<>
			<AppHead title={title} />
			<Header />
			<main>
				{Array.from({ length: 1000 }).map((_, i) => (
					<p key={i}>Line {i}</p>
				))}
			</main>

			<style jsx>
				{`
					main {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}
