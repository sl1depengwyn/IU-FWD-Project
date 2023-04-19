<script lang="ts">
	import type { User } from '$lib/models/user';
	export let user: User;
</script>

<div>
	<img src={user.avatar.toString()} alt="" />
	<p>{user.name}</p>
</div>

<style>
</style>
