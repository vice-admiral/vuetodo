<template>
  <div class="nav-bar">
    <div>
      <router-link to="/" class="btn active">{{date}}</router-link>
      <p>{{getLength()}} Active Tasks</p>
      <app-add-task></app-add-task>
    </div>

    <div class="button-group" role="group">
      <router-link to="/active" class="btn active">Incomplete Tasks</router-link>

      <router-link to="/completed" class="btn active">Completed Tasks</router-link>
    </div>
  </div>
</template>

<script>
import AddTask from "./AddTask";

export default {
  data() {
    return {
      date: null,
    };
  },
  created() {
    this.date = new Date().toDateString();
    console.log("created");
  },
  methods: {
    getLength() {
      return this.$store.getters.getActiveTasks.length;
    },
  },
  components: {
    appAddTask: AddTask,
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
  border-bottom: 1px solid #8d9196;
  color: white;
}

.nav-bar a {
  margin: 0;
  color: white;
  padding: 0 8px;
}

a {
  color: #172c66;
  font-weight: 500;
}

p {
  padding: 0 10px;
  font-size: 0.8rem;
  color: #61DBFB;
}

.button-group {
  margin: 0;
  color: #172c66;
  outline: none;
}

.button-group:focus {
  outline: none;
}

.add-task {
  padding: 12px 0px 0px 6px;
}
</style>