import type { RequestEvent, RequestHandler } from './$types';
import { editIssue } from '$lib/models/issue';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request, params }: RequestEvent) => {
	const form = await request.formData();
	const risk = form.get('name')?.toString() ?? '';
	const image = form.get('image')?.toString() ?? '';
	const response = await editIssue(
		env.APP_IDENTIFIER,
		env.APPLICATION_ACCESS_KEY,
		params.slug,
		risk,
		image
	);

	if (response.status != 200) {
		return response;
	}
	return new Response(null, { status: 204 });
};
