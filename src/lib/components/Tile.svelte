<script lang="ts">
	import type { Issue } from '$lib/models/issue';
	import IssueAuthor from './IssueAuthor.svelte';
	export let issue: Issue;
</script>

<a href={`/issue/${issue.id}`} class="tile">
	<IssueAuthor avatarUrl={issue.authorAvatar} name={issue.author} />
	<img class="picture" src={issue.image} alt="Issue" />
	<p>{issue.name}</p>
	<p>{issue.details}</p>
	<div>
		<button
			on:click={(event) => {
				event.preventDefault();
			}}
			class="comment">Add comment</button
		>
		<button class="resolve">Resolve</button>
	</div>
</a>

<style>
	.picture {
		width: 250px;
	}

	.tile {
		width: 300px;
		border-radius: 3px;
		border-color: black;
		padding: 1rem;
		border-style: solid;
		margin-bottom: 1rem;
		margin-right: 1rem;
	}

	.comment {
		background-color: gray;
	}

	.resolve {
		background-color: yellowgreen;
	}
</style>
