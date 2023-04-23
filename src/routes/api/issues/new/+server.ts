import type { RequestEvent, RequestHandler } from './$types';
import { newIssue } from '$lib/models/issue';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ params }: RequestEvent) => {
	// app_identifier: string, app_secret_key: string, risk:string, author:string, image:string
	await newIssue(env.APP_IDENTIFIER, env.APPLICATION_ACCESS_KEY, "name", "author", "image")
	return new Response(null, { status: 204 });
};
