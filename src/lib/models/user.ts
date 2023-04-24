import type { Comment, CommentID } from './comment';
import type { Issue, IssueID } from './issue';

type Email = string;

export type UserID = Email;

export interface User {
	email: Email;
	name: string;
	avatar: string;
	comments: Comment[] | CommentID[];
	issues: Issue[] | IssueID[];
	resolvedIssues: Issue[] | IssueID[];
}

export const dummyUser = {
	email: 'email@mail.com',
	name: 'name',
	avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
	comments: [],
	issues: [],
	resolvedIssues: []
} as User;
