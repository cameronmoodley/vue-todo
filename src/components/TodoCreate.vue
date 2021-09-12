<template lang="">
	<modal ref="modal">
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
				forceClose: false,
			};
		},
		// Computed methods are what?
		computed: {
			isFormValid() {
				return this.validateForm(this.formData.title, 7) &&
					this.validateForm(this.formData.description, 25)
					? true
					: false;
			},
			modal() {
				return this.$refs.modal;
			},
		},
		methods: {
			submitForm() {
				if (this.isFormValid) {
					this.$emit('formSubmitted', { ...this.formData });
					this.modal.closeModal();
					this.resetForm();
				}
			},
			resetForm() {
				this.formData.title = '';
				this.formData.description = '';
			},
			validateForm(value, charLen) {
				if (value.length > charLen) {
					return true;
				}
				return false;
			},
		},
	};
</script>
<style lang=""></style>
