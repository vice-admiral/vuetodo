<template>
  <div class="nav-bar">
    <div>
      <router-link to="/active" class="active">{{date}}</router-link>
      <p>{{getLength()}} Active Tasks</p>
      <app-add-task></app-add-task>
    </div>

    <div class="button-group" role="group">
      <router-link to="/active" class="link" >Incomplete Tasks</router-link>

      <router-link to="/completed" class="link" >Completed Tasks</router-link>
    </div>
  </div>
</template>

<script>
import AddTask from "./AddTask";

export default {
  data() {
    return {
      date: null,
      links: [],
    };
  },
  created() {
    this.date = new Date().toDateString();
    this.links = document.getElementsByClassName("link");
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

/* .nav-bar a {
  margin: 0;
  color: white;
  padding: 0 8px;
  text-decoration: none;
} */

.active {
  margin: 0;
  color: white;
  padding: 0 8px;
  text-decoration: none;
}

.link {
  margin: 0;
  color: #8d9196;
  padding: 0 8px;
  text-decoration: none;
}

p {
  padding: 0 8px;
  font-size: 0.8rem;
  color: #61dbfb;
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

.router-link-active {
  text-decoration: none;
  color: white !important;
}
</style>