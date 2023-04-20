<script lang="ts">
	import { page } from '$app/stores';
	import type { Issue } from '$lib/models/issue';

	async function getIssue() {
		const response = await fetch('');
		return response.json() as Promise<Issue>;
	}
</script>

<h1>Welcome to SvelteKit [slug] {$page.params.slug}</h1>

{#await getIssue()}
	<p>...waiting</p>
{:then issue}
	<div class="info-block">
		<dl>
			<dt>author</dt>
			<dd>{issue.author}</dd>
		</dl>
		<dl>
			<p>image</p>
			<img src={issue.image.toString()} alt="Report" />
		</dl>
		<dl>
			<p>createdAt</p>
			<p>{issue.createdAt}</p>
		</dl>
		<dl>
			<p>comments</p>
			<p>{issue.comments}</p>
		</dl>
		<dl>
			<p>resolvedBy</p>
			<p>{issue.resolvedBy}</p>
		</dl>
		<dl>
			<p>resolutionDetails</p>
			<p>{issue.resolutionDetails}</p>
		</dl>
		<dl>
			<p>details</p>
			<p>{issue.details}</p>
		</dl>
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.info-block {
		padding: 10px;
		background-color: #fff;
		border: none;
		border-radius: 10px;
		-webkit-box-shadow: 0 0 30px 0 rgba(202, 199, 226, 0.5);
		box-shadow: 0 0 30px 0 rgba(202, 199, 226, 0.5);
		margin-bottom: 50px;
	}

	dl {
		display: flex;
	}
</style>
