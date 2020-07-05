<template>
	<div class="container">
		<h1>Todos</h1>
		<div class="container-content">

		<app-active-tasks></app-active-tasks>
		<app-completed></app-completed>
		</div>
	</div>
</template>

<script>
	import Completed from "./components/CompletedTasks";
	import Tasks from "./components/Tasks";
	import ActiveTasks from "./components/ActiveTasks";
	import AddTask from "./components/AddTask";

	export default {
		components: {
			appCompleted: Completed,
			appTasks: Tasks,
			appActiveTasks: ActiveTasks,
			appAddTask: AddTask
		}
	};
</script>

<style scoped>
	h1 {
		text-align: center;
		margin-bottom: 15px;
			color: #001858;
	}

	.container-content .container {
		display: inline
	}

	@media (max-width: 768px) {
		* {
			font-size: 12px;
		}
		.col-sm-4 {
			margin: 10px 0;
		}

		h1 {
			font-size: 3rem;
			color: #001858;
		}
	}
</style>