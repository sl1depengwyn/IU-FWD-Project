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
			<dt>image</dt>
			<dd><img src={issue.image.toString()} alt="Report" /></dd>
		</dl>
		<dl>
			<dt>createdAt</dt>
			<dd>{issue.createdAt}</dd>
		</dl>
		<dl>
			<dt>comments</dt>
			<dd>{issue.comments}</dd>
		</dl>
		<dl>
			<dt>resolvedBy</dt>
			<dd>{issue.resolvedBy}</dd>
		</dl>
		<dl>
			<dt>resolutionDetails</dt>
			<dd>{issue.resolutionDetails}</dd>
		</dl>
		<dl>
			<dt>details</dt>
			<dd>{issue.details}</dd>
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
		text-align: left;
	}

	dl {
		display: flex;
	}

	dt {
		flex: 0 0 16.66666667%;
		max-width: 16.66666667%;
	}
	dd {
		flex: 0 0 83.33333333%;
		max-width: 83.33333333%;
	}
</style>
