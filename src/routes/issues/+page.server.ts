import { getIssues } from '$lib/models/issue';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return { issues: await getIssues() };
}) satisfies PageServerLoad;
