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
	},
};

store.dispatch = function(action, payload) {
	if (!this.actions[action]) {
		throw new Error(`Action ${action} is not defined in the store`);
	}

	return this.actions[action](this.state, payload);
};

export default store;
