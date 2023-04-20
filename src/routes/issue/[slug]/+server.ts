import { getIssue } from '$lib/models/issue';
import type { RequestEvent, RequestHandler } from './$types';

import { APP_IDENTIFIER, APPLICATION_ACCESS_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	return new Response(
		JSON.stringify(await getIssue(params.slug, APP_IDENTIFIER, APPLICATION_ACCESS_KEY))
	);
};
