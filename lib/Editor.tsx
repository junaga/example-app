// https://github.com/zenoamaro/react-quill#quick-start

import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
const Quill = dynamic(import("react-quill"), {
	loading: () => <p>Loading ...</p>,
	ssr: false
})
import type { Range, UnprivilegedEditor } from "react-quill"

const config = {
	toolbar: ".toolbar",
	clipboard: { matchVisual: true }
}

export default function Editor() {
	function selectionHandle(
		selection: Range,
		source: "user" | "api" | "silent",
		quill: UnprivilegedEditor
	) {
		if (source === "user" && selection !== null && selection.length > 0) {
			const { index, length } = selection

			const before = quill.getText(0, index)
			const selected = quill.getText(index, length)
			const after = quill.getText(index + length, quill.getLength())

			console.log({ before, selection: selected, after })
		}
	}

	return (
		<>
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
				<div>hello</div>
			</menu>
			<Quill className="prose" modules={config} theme="snow">
				<div className="print editor" />
			</Quill>
			<style jsx>{`
				@media screen {
					.toolbar {
						display: flex;
						flex-direction: row;
						width: min-content;
						margin: 8px;
					}
					.editor {
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
