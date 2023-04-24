import type { Comment, CommentID } from './comment';
import type { User, UserID } from './user';
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

export async function getIssue(
	id: string,
	app_identifier: string,
	app_secret_key: string
): Promise<Issue> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{},"Rows":[{"ID":"${id}"}]}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
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

export async function getIssues(app_identifier: string, app_secret_key: string): Promise<Issue[]> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{}}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	});
	const rawIssues: IssueRaw[] = await response.json();
	return rawIssues.map(rawIssueToIssue);
}

export async function getResolvedIssues(
	app_identifier: string,
	app_secret_key: string
): Promise<Issue[]> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{"Selector": "Filter(Risks, ISNOTBLANK([Resolved By]))"}}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	});
	const rawIssues: IssueRaw[] = await response.json();
	return rawIssues.map(rawIssueToIssue);
}

export async function getUnresolvedIssues(
	app_identifier: string,
	app_secret_key: string
): Promise<Issue[]> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Find","Properties":{"Selector": "Filter(Risks, ISBLANK([Resolved By]))"}}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	});
	const rawIssues: IssueRaw[] = await response.json();
	return rawIssues.map(rawIssueToIssue);
}

export async function newIssue(
	app_identifier: string,
	app_secret_key: string,
	risk: string,
	author: string,
	image: string
): Promise<Response> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	console.log(risk);
	console.log(author);
	console.log(image);

	const response = await fetch(url, {
		method: 'POST',
		body: `{"Action":"Add","Properties":{},"Rows":[{
        	"Risk": "${risk}",
        	"Risk Image": "${image}",
        	"Risk Documented By": "${author}"
		}]}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	});

	console.log(response);

	return response;
}

export async function editIssue(
	app_identifier: string,
	app_secret_key: string,
	id: string,
	risk: string | null,
	image: string | null
): Promise<Response> {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const init = {
		method: 'POST',
		body: `{"Action":"Edit","Properties":{},"Rows":[{
					"ID": "${id}",
					${risk == '' ? '' : `"Risk": "${risk}",`}
					${image == 'data:' ? '' : `"Image": "${image}",`}
		}]}`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	};
	console.log(init);
	return await fetch(url, init);
}

export async function resolveIssue(
	app_identifier: string,
	app_secret_key: string,
	id: string,
	author: string,
	resolved_by: string,
	resolution_description: string
) {
	const url = new URL(
		'https://api.appsheet.com/api/v2/apps/' + app_identifier + '/tables/Risks/Action'
	);

	const resolvedAt = new Date();

	await fetch(url, {
		method: 'POST',
		body: `{"Action":"Edit","Properties":{},"Rows":[{
			"ID": "${id}",
        	"Resolved By": "${resolved_by}",
			"Date/Time": "${resolvedAt}",
        	"Resolution Description": "${resolution_description}"
		}]`,
		headers: {
			'Content-Type': 'application/json',
			applicationAccessKey: app_secret_key
		}
	});
}

function rawIssueToIssue(rawIssue: IssueRaw): Issue {
	return {
		author: rawIssue['Risk Documented By'],
		authorAvatar:
			'https://randomuser.me/api/portraits/' +
			(parseInt(rawIssue._RowNumber) % 2 ? 'women' : 'men') +
			'/' +
			rawIssue._RowNumber +
			'.jpg',
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
