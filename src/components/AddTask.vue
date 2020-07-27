<template>
  <div class="add-task">
    <div class="alert alert-danger" role="alert" v-if="isInputEmpty">You must enter a task</div>
    <div>
      <input type="text" v-model="task" @keyup.enter="addTask" placeholder="What needs to be done?" />

      <button class="button" type="button" @click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      task: "",
      isInputEmpty: null,
      // tasks: this.$store.getters.getActiveTasks,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getActiveTasks;
    },
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
        isDone: false,
      };
      this.$store.commit("addTask", newTask);
      this.task = "";
      this.task.focus;
    },
  },
};
</script>

<style scoped>
.add-task {
  display: block;
}
input {
  margin-right: 0.5rem;
  padding: 1rem 0 1rem 1rem;
  background-color: white;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  width: 350px;
  height: 40px;
}

input:focus {
  outline: none;
}

button {
  background: #61dbfb;
  height: 40px;
  padding: 0 1rem;
  color: white;
  border: none;
  border-radius: 3px;
  /* font-size: 1.4rem; */
  cursor: pointer;
}
</style>