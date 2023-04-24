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

<button on:click={() => handleClick('resolved')}>resolved</button>

<button on:click={() => handleClick('unresolved')}>unresolved</button>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
