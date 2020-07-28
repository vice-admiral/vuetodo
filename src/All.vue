<template>
  <div class="container">
      <div class="parent">
      <div class="child">
        <app-active-tasks></app-active-tasks>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from "./components/Tasks";
import ActiveTasks from "./components/ActiveTasks";
import AddTask from "./components/AddTask";

export default {
  components: {
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
  display: inline;
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

  .parent {
    display: flex;
    flex-wrap: wrap;
  }

  .child {
    flex: 0 1 300px;

  border: 1px solid red;
  /* background: lightpink; */
  font-size: 2rem;
  text-align: center;
  }
}
</style>
