import AppHead from "~/lib/AppHead"

export default function Hello() {
	return (
		<>
			<AppHead title="/hello" />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	)
}
