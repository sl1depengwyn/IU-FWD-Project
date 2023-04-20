<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import type { Issue } from '$lib/models/issue';
	import { writable, derived, type Readable } from 'svelte/store';

	let kind = 'all';
	let issuesPromise: Promise<Issue[]>;
	async function getIssues(route: string) {
		const response = await fetch('issues/' + route);
		return response.json();
	}

	function handleClick(newKind: string) {
		kind = newKind;
	}
</script>

<h1>Safety issues</h1>

{#await getIssues(kind)}
	<p>...waiting</p>
{:then issues}
	<div class="list">
		{#each issues as issue}
			<Tile {issue} />
		{/each}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<button on:click={() => handleClick('resolved')}>resolved</button>

<button on:click={() => handleClick('unresolved')}>unresolved</button>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
