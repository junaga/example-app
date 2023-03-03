// https://quilljs.com/docs/

import { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <p>Loading ...</p>
})
import type { Range, UnprivilegedEditor } from "react-quill"

const config = {
	toolbar: [
		[{ font: [] }],
		[{ size: [] }],
		["bold", "italic"],
		[{ list: "ordered" }, { list: "bullet" }],
		["link", "image"],
		["clean"]
	],
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
			<QuillNoSSRWrapper
				onChangeSelection={selectionHandle}
				id="editor"
				className="prose"
				theme="snow"
				modules={config}
			/>

			<style jsx>{`
				@media screen {
					:global(#editor) {
						margin: 0 auto;

						max-width: none;
						width: 210mm;
						box-shadow: 0 5px 10px #000;
					}
					:global(#editor .ql-editor) {
						height: 297mm;
					}
					:global(#editor ::selection) {
						background: #d38d93;
					}
				}

				@media print {
					@page {
						margin: 0;
					}
					:global(#editor .ql-toolbar) {
						display: none;
					}
					:global(#editor *) {
						width: 100%;
						margin: none;
						padding: none;
						border: none;
					}
				}
			`}</style>
		</>
	)
}
