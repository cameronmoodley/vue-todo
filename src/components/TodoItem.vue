<template>
	<div class="todo-item">
		<div class="todo-item-content">
			<div class="todo-item-content-title">{{ title }}</div>
			<div class="todo-item-content-description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
				default: 'Some test',
			},
			description: {
				type: String,
				required: true,
				default: 'Some test',
			},
		},
	};
</script>

<style lang="scss" scoped>
	.todo {
		&-item {
			background-color: gray;
			margin: 10px;
			padding: 20px;
			color: white;
			border-radius: 5px;
			font-size: 23px;
			&-content-title {
				font-weight: bold;
			}
			&-content-description {
				font-size: 19px;
			}
		}
	}
</style>
