import Head from "next/head"

const favicons = (
	<>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/favicon/apple-touch-icon.png"
		/>
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/16x16.png" />
	</>
)

type Props = {
	title: string
	description?: string
}

const defaultDescription =
	"Schnell und einfach ohne Registrierung eine Bewerbung generieren lassen, mit unserer KI basierten App Oberfläche!"

export default function AppHead({ title, description }: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description ?? defaultDescription} />

			{favicons}
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
	)
}
