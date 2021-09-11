<template lang="">
	<div class="todo-list">
		<TodoItem
			v-for="todo in todos"
			:key="todo.id"
			:title="todo.title"
			:description="todo.description"
		/>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue';

	export default {
		name: 'TodoList',
		components: { TodoItem },
		props: {
			todos: {
				required: true,
				type: Array,
			},
		},
	};
</script>

<style scoped lang="scss">
	.todo-list {
		flex-grow: 1;
	}
</style>
