<template>
	<div class="box">
		<div class="card">
			<div class="card-body">
				<div class="alert alert-danger" role="alert" v-if="isInputEmpty">You must enter a task</div>
				<div class="input-group mb-3">
					<input class="form-control shadow-none" type="text" v-model="task" @keyup.enter="addTask" />
					<div class="input-group-append">
						<button class="btn btn-dark shadow-none" type="button" id="button-addon2" @click="addTask">
							<svg
								class="bi bi-plus-square-fill"
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="alert alert-success" role="alert" v-if="tasks.length <= 0">
					<p class="mb-0">You currently have no tasks</p>
				</div>

				<ul class="list-group list-group-flush">
					<li v-for="(task, index) in tasks" class="list-group-item">
						{{ task.title }}
						<span
							class="float-right"
							style="cursor: pointer"
							@click="finishedTask(index)"
						>&#x2714;</span>
					</li>
					<li
						v-for="(task, index) in finishedTasks"
						class="list-group-item finished-item list-group-item-success"
					>{{ task.title }}</li>
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
					id: this.id++,
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
			}
		},
		components: {
			appHeader: Header
		}
	};
</script>

<style scoped>
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
	}
</style>