import type { Comment, CommentID } from './comment';
import type { User, UserID } from './user';
import { PUBLIC_APPLICATION_ACCESS_KEY, PUBLIC_APP_IDENTIFIER } from '$env/static/public';
import { error } from '@sveltejs/kit';

interface IssueRaw {
	_RowNumber: string;
	ID: string;
	Risk: string;
	'Risk Image': string;
	'Risk Documented By': string;
	'Risk Date/Time': string;
	'Resolution Description': string;
	'Resolved By': string;
	'Date/Time': string;
	Comments: string;
	Details: string;
	'Time since documented': string;
	'Risk Headshot': string;
	'Resolution Headshot': string;
	'Resolution Details': string;
}

export type IssueID = string;

export interface Issue {
	author: UserID;
	authorAvatar: string;
	image: string;
	createdAt: Date;
	comments: Comment[] | CommentID[];
	resolvedBy: User | UserID | null;
	resolutionDetails: string;
	details: string;
	name: string;
	id: string;
}

export async function getIssue(id: string) {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + PUBLIC_APP_IDENTIFIER + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{},"Rows":[{"ID":"${id}"}]}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: PUBLIC_APPLICATION_ACCESS_KEY
		}
	});
	const rawIssues: IssueRaw[] = await response.json();
	if (rawIssues.length != 0) {
		const rawIssue = rawIssues[0];
		return rawIssueToIssue(rawIssue);
	}
	throw error(404, {
		message: 'Not found'
	});
}

export async function getIssues() {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + PUBLIC_APP_IDENTIFIER + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{}}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: PUBLIC_APPLICATION_ACCESS_KEY
		}
	});
	const rawIssues: IssueRaw[] = await response.json();
	return rawIssues.map(rawIssueToIssue);
}

export function getResolvedIssues() {
	return;
}

export function getUnresolvedIssues() {
	return;
}

function rawIssueToIssue(rawIssue: IssueRaw) {
	return {
		author: rawIssue['Risk Documented By'],
		authorAvatar: rawIssue['Risk Headshot'],
		image: rawIssue['Risk Image'],
		createdAt: new Date(rawIssue['Date/Time']),
		comments: rawIssue['Comments'].split(' , '),
		resolvedBy: rawIssue['Resolved By'] == '' ? null : rawIssue['Resolved By'],
		resolutionDetails: rawIssue['Resolution Details'],
		details: rawIssue['Details'],
		name: rawIssue.Risk,
		id: rawIssue.ID
	} as Issue;
}

export function getIssueAuthor(issue: Issue) {
	return;
}
