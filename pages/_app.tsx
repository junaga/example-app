import "react-quill/dist/quill.snow.css"

import type { AppProps } from "next/app"
import Head from "next/head"
import "~/lib/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Labrada&display=swap"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
