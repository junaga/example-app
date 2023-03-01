import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai"
import { NextApiRequest, NextApiResponse } from "next"
const apiKey = process.env.OPENAI_API_KEY

async function openai(prompt: string): Promise<CreateCompletionResponse> {
	return (
		await new OpenAIApi(new Configuration({ apiKey })).createCompletion({
			prompt: prompt,
			model: "text-davinci-003",
			temperature: 1,
			max_tokens: 1000
		})
	).data
}

export type RequestBody = { prompt: string }
export type ResponseBody = CreateCompletionResponse

export default async function Handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { prompt }: RequestBody = req.body

	// Check if "prompt" is valid
	if (typeof prompt !== "string" || prompt.length === 0) {
		res.status(400).json({ error: { message: "Please enter a valid prompt" } })
		return
	}

	res.status(200).json(await openai(prompt))
}
