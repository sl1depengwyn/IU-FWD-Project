<script lang="ts">
	import Tile from '$lib/components/Tile.svelte';
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Safety issues</h1>

<div class="list">
	{#each data.issues as issue}
		<Tile {issue} />
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
