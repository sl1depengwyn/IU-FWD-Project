import type { User } from './user';

export interface Comment {
	author: User;
	createdAt: Date;
	text: string;
}

export type CommentID = string;
