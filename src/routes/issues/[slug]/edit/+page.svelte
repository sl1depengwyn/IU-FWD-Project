<script lang="ts">
	import { page } from '$app/stores';
	import FormIssue from '$lib/components/FormIssue.svelte';
	import type { Issue } from '$lib/models/issue';

	async function getIssue(): Promise<Issue | null> {
		const response = await fetch('/api/issues/' + $page.params.slug);
		if (response.status == 404) {
			return null;
		}
		return response.json();
	}
</script>

<h1>Edit issue #{$page.params.slug}</h1>

<FormIssue method="edit" id={$page.params.slug} issuePromise={getIssue()} />

<style>
</style>
