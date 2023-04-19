import { getIssue } from '$lib/models/issue';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return { issue: await getIssue(params.slug) };
}) satisfies PageServerLoad;
