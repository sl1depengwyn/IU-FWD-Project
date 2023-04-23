<script lang="ts">
	export var method = 'edit';
	export var id = '13';

	let action = method === 'edit' ? '/api/issues/' + id + '/' + method : '/api/issues/' + method;

	// function onSubmit(submit : SubmitEvent) : void {
	//   submit.
	// }
	// on:submit={onSubmit}
</script>

<div class="info-block">
	<form method="POST" {action}>
		<dl>
			<dt>Name</dt>
			<dd><input name="name" /></dd>
		</dl>
		<dl>
			<dt>Author</dt>
			<dd><input name="author" /></dd>
		</dl>
		<dl>
			<dt>Image</dt>
			<dd><input name="image" type="file" accept="image/*" /></dd>
		</dl>
		<input type="submit" />
	</form>
</div>

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
