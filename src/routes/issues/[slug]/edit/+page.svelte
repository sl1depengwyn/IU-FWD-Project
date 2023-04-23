<script lang="ts">
	import { page } from '$app/stores';
	import FormIssue from '$lib/components/FormIssue.svelte';
</script>

<h1>Edit issue #{$page.params.slug}</h1>

<FormIssue method='edit' id={$page.params.slug}/>

<style>
</style>
