import Vue from 'vue';

const store = {
	state: {
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
	},
	actions: {
		createTodo(state, todo) {
			state.todos.push({
				_id: Math.random(36)
					.toString()
					.substr(2, 7),
				...todo,
			});
		},
		updateTodo(state, todo) {
			const index = state.todos.findIndex((t) => t._id === todo._id);
			// state.todos[index] = todo;
			Vue.set(state.todos, index, todo);
			// state.todos = Access state object
			// index = index of where the object is in state
			// todo = the new value
		},
	},
};

store.dispatch = function(action, payload) {
	if (!this.actions[action])
		throw new Error(`Action ${action} is not defined in the store`);

	return this.actions[action](this.state, payload);
};

export default store;
