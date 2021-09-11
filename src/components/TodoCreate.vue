<template lang="">
	<modal>
		<form class="app-form">
			<div class="form-control">
				<label class="label">Title</label>
				<input type="text" class="control" v-model="formData.title" />
			</div>
			<div class="form-control">
				<label class="label">Description</label>
				<textarea
					class="control"
					cols="30"
					rows="5"
					v-model="formData.description"
				></textarea>
			</div>
			<button @click="submitForm" type="button" class="app-button is-primary">
				Confirm
			</button>
		</form>
	</modal>
</template>
<script>
	import modal from '@/components/Modal';

	export default {
		components: {
			modal,
		},
		data() {
			return {
				formData: {
					title: '',
					description: '',
				},
			};
		},
		methods: {
			submitForm() {
				console.log(this.formData);
			},
		},
	};
</script>
<style lang=""></style>
