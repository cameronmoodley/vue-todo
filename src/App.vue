<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<TodoCreate @formSubmitted="createTodo" />
			</div>
		</div>
	</div>
</template>

<script>
	import TodoList from '@/components/TodoList.vue';
	import TodoCreate from '@/components/TodoCreate.vue';

	export default {
		name: 'app',
		components: {
			TodoList,
			TodoCreate,
		},
		data() {
			return {
				todos: [
					{
						_id: '1',
						title: 'Walk the dog',
						description: 'Go to forest near the zoo',
					},
					{
						_id: '2',
						title: 'Buy Bread',
						description: 'Whole wheat bread would be good',
					},
					{
						_id: '3',
						title: 'Learn Programming',
						description: 'Maybe Tomorrow',
					},
				],
			};
		},
		methods: {
			createTodo(todo) {
				this.todos.push(todo);
			},
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}

	.app-button {
		font-size: 20px;
		padding: 12px;
		border-radius: 5px;
		background-color: #795899;
		color: #fff;
		font-weight: bold;
		text-align: center;
		border: solid white 2px;

		&:hover {
			cursor: pointer;
			background-color: hotpink;
		}
	}

	.todo {
		&-wrapper {
			display: flex;
			justify-content: center;
			width: 100%;
		}

		&-create-button-container {
			margin: 10px;
		}
		&-container {
			flex-direction: column;
			width: 400px;
			min-height: 400px;
			background-color: #ededed;
			border-radius: 10px;
		}
	}

	.is-primary {
		background-color: yellowgreen;
		margin-top: 20px;
		padding: 10px;
		border: none;
	}

	.app-form {
		text-align: left;
		.label {
			display: block;
			font-size: 18px;
			font-weight: bold;
		}

		input {
			padding: 10px;
			font-size: 17px;
		}

		.form-control {
			margin-top: 20px;
		}
	}
</style>
