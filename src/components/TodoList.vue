<template lang="">
	<div class="todo-list">
		<div v-if="todos && todos.length > 0">
			<TodoItem
				v-for="todo in todos"
				:key="todo.id"
				:_id="todo._id"
				:title="todo.title"
				:description="todo.description"
			/>
		</div>
		<div v-else class="no-todo">
			<p>No todos yet :(</p>
		</div>
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
	.no-todo {
		padding: 10px 20px 10px;
		font-size: 20px;
		font-weight: bold;
	}
</style>
