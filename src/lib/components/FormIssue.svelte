<script lang="ts">
	export var method = 'edit';
	export var id = '';
	export var issuePromise: Promise<Issue | null> = Promise.resolve(null);

	let action = method === 'edit' ? '/api/issues/' + id + '/' + method : '/api/issues/' + method;

	import type { Issue } from '$lib/models/issue';

	import { createForm } from 'felte';
	import * as yup from 'yup';

	const schema = yup.object({
		author: yup.string().email().required()
	});

	const { form, errors } = createForm({
		validate: async (values) => {
			try {
				await schema.validate(values, { abortEarly: false });
			} catch (err) {
				if (err instanceof yup.ValidationError) {
					const errors = err.inner.reduce(
						(res, value) => ({
							[value.path as string]: value.message,
							...res
						}),
						{}
					);

					return errors;
				}
			}
		},
		onSubmit: async (values, { form }) => {
			let formElement = form as HTMLFormElement;
			const data = new FormData(formElement);

			let reader = new FileReader();
			reader.readAsDataURL(data.get('image') as File);
			reader.onload = async function () {
				data.set('image', reader.result as string);
				const response = await fetch(formElement.action, {
					method: 'POST',
					body: data
				});

				if (response.status === 204) {
					document.location.href = '/issues';
				}
			};
		}
	});
</script>

{#if method === 'edit'}
	{#await issuePromise}
		<p>...waiting</p>
	{:then issue}
		<div class="info-block">
			{#if issue == null}
				<p class="error">Not found!</p>
			{:else}
				<form use:form method="POST" {action}>
					<label for="name">Name <input name="name" value={issue.name} /></label>
					<label for="image">Image <input name="image" type="file" accept="image/*" /></label>
					<input type="submit" />
				</form>
			{/if}
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{:else}
	<div class="info-block">
		<form use:form method="POST" {action}>
			<label for="name">Name <input name="name" /></label>
			<label for="author">Author <input name="author" /></label>
			{#if $errors.author}
				<span class="text-red-500">{$errors.author}</span>
			{/if}
			<label for="image">Image <input name="image" type="file" accept="image/*" /></label>
			<input type="submit" />
		</form>
	</div>
{/if}

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

	form {
		display: flex;
		flex-direction: column;
	}

	label {
		margin-bottom: 1rem;
	}

	.text-red-500 {
		color: red;
		font-weight: 500;
	}
</style>
