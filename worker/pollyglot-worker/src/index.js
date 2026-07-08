export default {
	async fetch(request, env) {
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: corsHeaders,
			});
		}

		if (request.method !== 'POST') {
			return new Response(
				JSON.stringify({
					error: 'Only POST requests are allowed',
				}),
				{
					status: 405,
					headers: {
						...corsHeaders,
						'Content-Type': 'application/json',
					},
				},
			);
		}

		try {
			const body = await request.json();

			const { text, language } = body;

			if (!text || !language) {
				return new Response(
					JSON.stringify({
						error: 'Text and language are required',
					}),
					{
						status: 400,
						headers: {
							...corsHeaders,
							'Content-Type': 'application/json',
						},
					},
				);
			}

			const prompt = `
Translate the following text into ${language}.

Return only the translated text.
Do not add explanations.

Text:
${text}
`;

			const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
				method: 'POST',

				headers: {
					'Content-Type': 'application/json',

					Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
				},

				body: JSON.stringify({
					model: 'openai/gpt-5',

					temperature: 0.4,

					max_tokens: 500,

					messages: [
						{
							role: 'system',
							content: 'You are a professional polyglot translator.',
						},

						{
							role: 'user',
							content: prompt,
						},
					],
				}),
			});

			if (!response.ok) {
				const errorText = await response.text();

				throw new Error(`OpenRouter error: ${errorText}`);
			}

			const data = await response.json();

			const translation = data.choices?.[0]?.message?.content;

			if (!translation) {
				throw new Error('No translation received');
			}

			return new Response(
				JSON.stringify({
					translation,
				}),
				{
					headers: {
						...corsHeaders,
						'Content-Type': 'application/json',
					},
				},
			);
		} catch (error) {
			return new Response(
				JSON.stringify({
					error: error.message,
				}),
				{
					status: 500,

					headers: {
						...corsHeaders,
						'Content-Type': 'application/json',
					},
				},
			);
		}
	},
};
