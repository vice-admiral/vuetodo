<template>
	<div class="box">
		<div class="card">
			<div class="card-body">
				<div class="alert alert-danger" role="alert" v-if="isInputEmpty">You must enter a task</div>
				<div class="input-group mb-3">
					<input
						class="form-control shadow-none"
						type="text"
						v-model="task"
						@keyup.enter="addTask"
						placeholder="What needs to be done?"
					/>
					<div class="input-group-append">
						<button class="btn shadow-none" type="button" @click="addTask">
							<span>&#x271A;</span>
						</button>
					</div>
				</div>
				<div class="alert alert-success" role="alert" v-if="tasks.length <= 0">
					<p class="mb-0">You currently have no tasks</p>
				</div>

				<ul class="list-group list-group-flush">
					<li v-for="(task, index) in tasks" class="list-group-item">
						<span class="float-right" style="cursor: pointer" @click="removeTask(index)">&#x2716;</span>
						<span class="float-right" style="cursor: pointer" @click="finishedTask(index)">&#x2714;</span>
						{{ task.title }}
					</li>
					<hr />
					<li
						v-for="(task, index) in finishedTasks"
						class="list-group-item finished-item list-group-item-success"
					>
						{{ task.title }}
						<span
							class="float-right"
							style="cursor: pointer"
							@click="deleteTask(index)"
						>&#x2716;</span>
					</li>
				</ul>
				<app-header></app-header>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "./Header";
	export default {
		data() {
			return {
				id: 0,
				task: "",
				isInputEmpty: null,
				tasks: this.$store.getters.getActiveTasks,
				finishedTasks: this.$store.state.finishedTasks

				// user: this.$store.state.users.user1.tasks
			};
		},

		methods: {
			addTask() {
				if (this.task.trim() === "") {
					this.isInputEmpty = true;
					return;
				}
				this.isInputEmpty = false;
				let arr = this.task.split("");
				arr[0] = arr[0].toUpperCase();
				this.task = arr.join("");

				const newTask = {
					id: this.tasks.length,
					title: this.task,
					isDone: false
				};
				this.$store.commit("addTask", newTask);
				this.task = "";
				this.task.focus;
			},
			finishedTask(index) {
				const a = this.tasks.splice(index, 1);
				this.$store.commit("addFinishedTask", a[0]);
			},
			removeTask(index) {
				const a = this.tasks.splice(index, 1);
				this.$store.commit("removeTask", a[0]);
			},
			deleteTask(index) {
				const b = this.finishedTasks.splice(index, 1);
				this.$store.commit("deleteTask", b[0]);
			}
		},
		components: {
			appHeader: Header
		}
	};
</script>

<style scoped>
	::placeholder {
		font-family: cursive;
		color: lightgray;
	}

	p {
		font-family: cursive;
	}
	h1 {
		text-align: center;
	}

	.list-group-item {
		font-size: 1.5rem;
		line-height: 50px;
	}

	.finished-item {
		text-decoration: line-through;
	}

	.box {
		box-shadow: 10px 10px 10px #c5ccdb;
		border-radius: 0.5rem;
	}

	.btn {
		background: #fcf3de;
		color: #a3978d;
	}

	.card {
		border-radius: 0.5rem;
	}
</style>