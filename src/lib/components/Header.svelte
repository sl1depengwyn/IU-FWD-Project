<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<h3 class="title">Your safety</h3>
	<nav>
		<ul>
			<li>
				<a href="{base}/">Home</a>
			</li>
			<li>
				<a href="{base}/issues">Issues</a>
			</li>
			<li>
				<a href="{base}/team">Team</a>
			</li>
			<li>
				<a href="{base}/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		background: gray;
		text-align: left;
		color: #213547;
	}

	.title {
		padding: 10px 50px;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		flex-grow: 1;
		align-items: center;
		margin-right: 2rem;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a {
		color: #213547;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		flex-grow: 1;
		justify-content: flex-end;
	}
</style>
