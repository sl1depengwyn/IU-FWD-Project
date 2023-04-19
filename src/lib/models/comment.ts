import type { User } from './user';

interface CommentRaw {
	_RowNumber: string;
	ID: string;
	Risk: string;
	Comment: string;
	Commenter: string;
	'Date/Time': string;
	Headshot: string;
}

export interface Comment {
	author: User;
	createdAt: Date;
	text: string;
}

export type CommentID = string;
