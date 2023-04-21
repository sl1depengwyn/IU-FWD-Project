import { getIssue } from '$lib/models/issue';
import type { RequestEvent, RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	return new Response(
		JSON.stringify(await getIssue(params.slug, env.APP_IDENTIFIER, env.APPLICATION_ACCESS_KEY))
	);
};
