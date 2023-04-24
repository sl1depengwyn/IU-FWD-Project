<script lang="ts">
	import { base } from '$app/paths';
	import searchIcon from '$lib/images/search.svg';

	function onClickSearch(event: KeyboardEvent): void {
		let keyCode: string = event.code || event.key;
		if (keyCode === 'Enter') {
			event.preventDefault();
			let input = document.getElementById('issue-by-id') as HTMLInputElement;
			if (input && input.value) window.location.href = '/issues/' + input.value;
		}
	}
</script>

<div class="description-container">
	<h1 class="app-name">Your Safety</h1>
	<p class="description">
		This site provides information about company community. And helps track safety issues. See About
		for an overview of the site.
	</p>
</div>

<h2>Via Your Safety you can:</h2>
<div class="links">
	<a class="button" href="{base}/issues">Browse all issues</a>
	<a class="button" href="{base}/team">Our team</a>
	<a class="button" href="{base}/about">Info</a>
</div>

<h2>Search issue by ID:</h2>
<form class="search-form">
	<input id="issue-by-id" on:keypress={onClickSearch} />
	<img class="search-button" src={searchIcon} alt="Search" />
</form>

<style>
	.search-button {
		margin-left: -30px;
		width: 25px;
	}

	.search-form {
		height: 50px;
		margin-bottom: 50px;
		width: 50%;
		display: flex;
	}

	.search-form input {
		height: 100%;
		width: 100%;
		font-size: 25px;
		padding-right: 50px;
	}

	p {
		font-family: halyard-text, sans-serif;
	}

	.description-container {
		width: 70%;
		background-color: #f3f5f8;
		min-height: 160px;
		margin-top: 50px;
	}

	.app-name {
		margin-top: -2rem;
		margin-bottom: 0;
		margin-left: 1rem;
		font-family: halyard-display, sans-serif;
		font-style: normal;
		font-weight: 600;
		text-align: left;
	}

	.description {
		max-width: 80%;
		text-align: justify;
		margin: 0;
		margin-left: 90px;
		margin-top: 20px;
		font-size: 20px;
	}

	.links {
		margin-bottom: 20px;
	}
</style>
