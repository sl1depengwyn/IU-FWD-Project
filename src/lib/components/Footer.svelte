<script lang="ts">
	import githubLogo from '$lib/images/github.svg';
</script>

<footer>
	<div class="contacts">
		<h2>Contact support</h2>
		<p>
			<a id="email" href="mailto:support@gmail.com">support@gmail.com</a>
		</p>
		<p><a id="tg-link" href="https://t.me/support">@support</a></p>
	</div>
	<div class="socials">
		<a id="gh-link" href="https://github.com/sl1depengwyn/IU-FWD-Project"
			><img class="svg-logo" alt="GitHub Logo" src={githubLogo} /></a
		>
	</div>
</footer>

<style>
	footer {
		min-height: 50px;
		background-color: #272727;
		padding: 10px 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		color: white;
	}

	.socials {
		text-align: center;
		vertical-align: bottom;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
	}

	.socials a {
		padding: 5px;
	}

	.svg-logo {
		filter: invert(1);
	}
</style>
