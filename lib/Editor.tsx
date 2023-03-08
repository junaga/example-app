// https://github.com/zenoamaro/react-quill#quick-start

import { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
const Quill = dynamic(import("react-quill"), {
	loading: () => <p>Loading ...</p>,
	ssr: false
})
import { DeltaStatic } from "quill"
import type { Range, UnprivilegedEditor } from "react-quill"

export default function Editor() {
	const [document, setDocument] = useState<DeltaStatic | null>(null)
	const [selection, setSelection] = useState<DeltaStatic | null>(null)

	function change(
		htmlString: string,
		delta: Value,
		source: "api" | "user" | "silent",
		editor: UnprivilegedEditor
	) {
		setDocument(editor.getContents())
	}

	function selectionHandle(
		range: Range,
		source: "api" | "user" | "silent",
		editor: UnprivilegedEditor
	) {
		if (source === "user" && range !== null && range.length > 0) {
			const { index, length } = range
			const delta = editor.getContents()
			// console.log("selection", index, length)
			setSelection(editor.getContents(index, length))
		}
	}

	function click() {
		setDocument(document.insert("hello"))
		console.log(document.ops)
	}

	return (
		<>
			<div>{JSON.stringify(document?.ops)}</div>
			<div>{JSON.stringify(selection?.ops)}</div>
			<menu className="toolbar">
				<select className="ql-font" />
				<select className="ql-size">
					<option value="small">Klein</option>
					<option value="normal" selected>
						Normal
					</option>
					<option value="large">Groß</option>
					<option value="huge">Riesig</option>
				</select>
				<button className="ql-bold" />
				<button className="ql-italic" />
				<button className="ql-list" value="ordered" />
				<button className="ql-list" value="bullet" />
				<select className="ql-align" />
				<button className="ql-link" />
				<button className="ql-image" />
				<button onClick={click}>hello</button>
			</menu>
			<Quill
				className="print editor"
				defaultValue={document}
				onChange={change}
				onChangeSelection={selectionHandle}
				modules={{
					toolbar: ".toolbar",
					clipboard: { matchVisual: true }
				}}
				theme="snow"
			/>
			<style jsx>{`
				@media screen {
					.toolbar {
						display: flex;
						flex-direction: row;
						width: min-content;
						margin: 8px;
					}
					:global(.editor) {
						margin: 16px;
						width: 210mm;
						height: 297mm;
						box-shadow: 0 5px 10px #000;
					}

					// does not seem to work without this hack
					:global(.editor ::selection) {
						background-color: #d38d93;
					}
				}
			`}</style>
		</>
	)
}
