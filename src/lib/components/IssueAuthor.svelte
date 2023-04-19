<script lang="ts">
	export let avatarUrl = '';
	export let name = '';
</script>

<div class="container">
	<img src={avatarUrl} alt="{name} avatar" class="avatar" />
	<p class="name">{name}</p>
</div>

<style>
	.avatar {
		width: 40px;
		height: 40px;
	}

	.container {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.name {
		margin: 0;
		margin-left: 1rem;
		font-weight: 700;
	}
</style>
