import type { RequestHandler } from './$types';
import { newIssue } from '$lib/models/issue';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
	const form = await request.formData();
	const name = form.get('name') ?? '';
	const author = form.get('author') ?? '';
	const image = form.get('image') ?? '';

	const response = await newIssue(
		env.APP_IDENTIFIER,
		env.APPLICATION_ACCESS_KEY,
		name.toString(),
		author.toString(),
		image.toString()
	);

	if (response.status != 200) {
		return response;
	}

	return new Response(null, { status: 204 });
};
