import { getIssues, getResolvedIssues, getUnresolvedIssues } from '$lib/models/issue';
import type { RequestEvent, RequestHandler } from './$types';

import { APP_IDENTIFIER, APPLICATION_ACCESS_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
	switch (params.slug) {
		case 'resolved':
			return new Response(
				JSON.stringify(await getResolvedIssues(APP_IDENTIFIER, APPLICATION_ACCESS_KEY))
			);
		case 'unresolved':
			return new Response(
				JSON.stringify(await getUnresolvedIssues(APP_IDENTIFIER, APPLICATION_ACCESS_KEY))
			);
		default:
			return new Response(JSON.stringify(await getIssues(APP_IDENTIFIER, APPLICATION_ACCESS_KEY)));
	}
};
