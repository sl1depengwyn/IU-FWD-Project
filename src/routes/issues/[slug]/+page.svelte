<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit [slug] {$page.params.slug}</h1>

<div class="info-block">
	<div>
		<p>author</p>
		<p>{data.issue.author}</p>
	</div>
	<div>
		<p>image</p>
		<img src={data.issue.image.toString()} alt="Report" />
	</div>
	<div>
		<p>createdAt</p>
		<p>{data.issue.createdAt.toISOString()}</p>
	</div>
	<div>
		<p>comments</p>
		<p>{data.issue.comments}</p>
	</div>
	<div>
		<p>resolvedBy</p>
		<p>{data.issue.resolvedBy}</p>
	</div>
	<div>
		<p>resolutionDetails</p>
		<p>{data.issue.resolutionDetails}</p>
	</div>
	<div>
		<p>details</p>
		<p>{data.issue.details}</p>
	</div>
</div>

<style>
</style>
