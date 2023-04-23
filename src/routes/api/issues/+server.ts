import { getUnresolvedIssues, getResolvedIssues, getIssues } from '$lib/models/issue';

import { env } from '$env/dynamic/private';
import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	switch (url.searchParams.get('type')) {
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
