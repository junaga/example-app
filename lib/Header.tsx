import Link from "next/link"

export default function Header() {
	return (
		<div className="margin">
			<header>
				<Link href="/" passHref legacyBehavior>
					<a className="title">
						<span className="typewriter">Bewerbung</span>
						<span className="extensionWrapper">
							<span className="extension">.GG</span>
						</span>
					</a>
				</Link>
				<Link href="new">Generieren</Link>
			</header>

			<style jsx>{`
				.margin {
					height: 64px;
				}

				header {
					z-index: 1;
					position: fixed;
					width: 100%;
					top: 0;

					height: 64px;
					padding-inline: 4vw;
					background-color: var(--background);
					box-shadow: 0 -2px 10px black;

					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.title {
					display: flex;
					align-items: baseline;
					font-size: 32px;
					text-decoration: none;
				}
				.title:hover {
					text-decoration-line: underline;
					text-decoration-thickness: 4px;
				}

				.extensionWrapper {
					margin-block: 4px;
					margin-inline: 4px;
					padding-right: 4px;

					transform: skew(-10deg);
					background-color: var(--highlight);
					border-radius: 1px;
					box-shadow: 0 0 5px var(--highlight);
				}

				.extension {
					padding-inline: 1px;
					font-weight: 500;
				}
			`}</style>
		</div>
	)
}
