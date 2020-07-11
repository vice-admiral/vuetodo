<template>
	<div>
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
				<button class="btn btn-dark shadow-none" type="button" @click="addTask">
					<span>&#x271A;</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				task: "",
				isInputEmpty: null
				// tasks: this.$store.getters.getActiveTasks,
			};
		},
		computed: {
			tasks() {
				return this.$store.getters.getActiveTasks;
			}
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
          edit: false,
					isDone: false
				};
				this.$store.commit("addTask", newTask);
				this.task = "";
				this.task.focus;
			}
		}
	};
</script>

<style>


</style>