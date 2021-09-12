<template>
	<div v-if="!editMode" class="todo-item">
		<div class="todo-item-content">
			<div class="todo-item-content-title">{{ title }}</div>
			<div class="todo-item-content-description">{{ description }}</div>
		</div>
		<button class="app-button is-warning" @click="editMode = true">Edit</button>
		<button class="app-button is-danger" @click="deleteTodo">
			Delete
		</button>
	</div>
	<div v-else class="todo-item">
		<form class="app-form">
			<div class="form-control">
				<label class="label">Title</label>
				<input type="text" class="control" v-model="todo.title" />
			</div>
			<div class="form-control">
				<label class="label">Description</label>
				<textarea
					class="control"
					cols="30"
					v-model="todo.description"
					rows="5"
				></textarea>
			</div>
			<button class="app-button is-warning" @click.prevent="editTodo">
				Update
			</button>
			<button class="app-button is-danger" @click.prevent="editMode = false">
				Cancel
			</button>
		</form>
	</div>
</template>

<script>
	import store from '@/store/';
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
			_id: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				editMode: false,
				todo: {
					_id: this._id,
					title: this.title,
					description: this.description,
				},
			};
		},

		methods: {
			editTodo() {
				store.dispatch('updateTodo', { ...this.todo });
				this.editMode = false;
			},
			deleteTodo() {
				store.dispatch('deleteTodo', this._id);
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
				line-break: anywhere;
			}
		}
	}

	.is {
		&-warning {
			background: orange;
			padding: 5px 10px;
			margin: 10px 0px;
		}

		&-danger {
			background: red;
			padding: 5px 10px;
			margin: 10px 0px;
		}
	}
</style>
