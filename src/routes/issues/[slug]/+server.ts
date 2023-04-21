import { getIssues, getResolvedIssues, getUnresolvedIssues } from '$lib/models/issue';
import type { RequestEvent, RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	switch (params.slug) {
		case 'resolved':
			return new Response(
				JSON.stringify(await getResolvedIssues(env.APP_IDENTIFIER, env.APPLICATION_ACCESS_KEY))
			);
		case 'unresolved':
			return new Response(
				JSON.stringify(await getUnresolvedIssues(env.APP_IDENTIFIER, env.APPLICATION_ACCESS_KEY))
			);
		default:
			return new Response(
				JSON.stringify(await getIssues(env.APP_IDENTIFIER, env.APPLICATION_ACCESS_KEY))
			);
	}
};
