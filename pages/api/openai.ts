import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai"
import { NextApiRequest, NextApiResponse } from "next"
const apiKey = process.env.OPENAI_API_KEY

export type RequestBody = { prompt: string }
export type ResponseBody = CreateCompletionResponse

async function openai(prompt: string): Promise<CreateCompletionResponse> {
	// https://platform.openai.com/docs/models
	const models = {
		// Good at: Conversation and text generation
		turbo: "gpt-3.5-turbo",
		// Good at: Complex intent, cause and effect, summarization for audience
		davinci: "text-davinci-003"
	}

	return (
		await new OpenAIApi(new Configuration({ apiKey })).createCompletion({
			prompt: prompt,
			model: models.turbo,
			temperature: 1,
			max_tokens: 1000
		})
	).data
}

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
