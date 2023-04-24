<script lang="ts">
	// import website from '$lib/config/website';
	let siteTitle = 'Pechenen Project';
	export let metaDescription: string;
	export let title: string;

	const pageTitle = `${siteTitle} ${title}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en-GB" />
</svelte:head>
