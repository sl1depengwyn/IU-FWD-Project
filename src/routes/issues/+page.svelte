<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';

	let type = 'all';

	async function getIssues(route: string) {
		const response = await fetch('/api/issues/?type=' + route);
		return response.json();
	}

	function handleClick(newType: string) {
		type = newType;
	}
</script>

<h1>Safety issues</h1>

<div class="nav-box">
	<button on:click={() => handleClick('resolved')}>resolved</button>

	<button on:click={() => handleClick('unresolved')}>unresolved</button>
</div>

{#await getIssues(type)}
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

<a class="button" href="/issues/new">Add issue</a>

<style>
	button {
		color: white;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.nav-box {
		display: inline;
	}
</style>
