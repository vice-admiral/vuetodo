<template>
<div class="container col-xs-12">
	<h1>Todos</h1>
  <app-tasks></app-tasks>
</div>
</template>

<script>
  import Completed from "./components/CompletedTasks";
  import Tasks from "./components/Tasks";
  
	export default {
		components: {
      appCompleted: Completed,
      appTasks: Tasks
		}
	};
</script>

<style scoped>
 h1 {
   text-align: center;
 }

</style>