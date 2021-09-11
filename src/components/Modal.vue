<!--dont mutate props-->
<template>
	<div>
		<div class="todo-create-button-container">
			<div class="app-button" @click="isOpen = true">
				Create New Todo
			</div>
		</div>
		<div class="modal" :class="{ 'is-active': isOpen }">
			<div class="modal-content">
				<span class="close" @click="isOpen = false">&times;</span>
				<!-- Slots allow you to embed HTML inside the wrapper component the name must be lowercase -->
				<slot />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isOpen: false,
			};
		},
	};
</script>
<style scoped lang="scss">
	.modal {
		display: none;
		position: fixed;
		width: 100%;
		z-index: 9999;
		left: 0px;
		top: 0px;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
		&-content {
			width: 80%;
			background-color: #fefefe;
			padding: 30px;
			padding-top: 10px;
			margin: 15% auto;
			border: solid 1px #888;
		}
	}
	.is-active {
		display: block;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 30px;
		font-weight: bold;
		line-height: 20px;

		&:hover {
			cursor: pointer;
		}
	}
</style>
