// https://quilljs.com/docs/

import "react-quill/dist/quill.snow.css"
import dynamic from "next/dynamic"
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <p>Loading ...</p>
})

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
	return (
		<>
			<QuillNoSSRWrapper
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
