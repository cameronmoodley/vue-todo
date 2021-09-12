import Vue from 'vue';

const INITIAL_DATA = {
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

const store = {
	state: { todos: [] },
	actions: {
		initStore(state) {
			const todos = JSON.parse(localStorage.getItem('my_todos'));

			// With Objects you need the name 2nd argument
			if (!todos) {
				Vue.set(state, 'todos', INITIAL_DATA.todos);
			} else {
				Vue.set(state, 'todos', todos);
			}

			return state.todos;
		},
		createTodo(state, todo) {
			state.todos.push({
				_id: Math.random(36)
					.toString()
					.substr(2, 7),
				...todo,
			});
			return state.todos;
		},
		updateTodo(state, todo) {
			const index = state.todos.findIndex((t) => t._id === todo._id);
			// state.todos[index] = todo;
			Vue.set(state.todos, index, todo);
			// state.todos = Access state object
			// index = index of where the object is in state
			// todo = the new value
			return state.todos;
		},
		deleteTodo(state, id) {
			const index = state.todos.findIndex((t) => t._id === id);
			state.todos.splice(index, 1);
			return state.todos;
		},
	},
};

function persistData(value) {
	const stringfyValue = JSON.stringify(value);
	localStorage.setItem('my_todos', stringfyValue);
}

store.dispatch = function(action, payload) {
	if (!this.actions[action])
		throw new Error(`Action ${action} is not defined in the store`);

	const result = this.actions[action](this.state, payload);

	if (!result) return;
	persistData(result);
	return result;
};

export default store;
