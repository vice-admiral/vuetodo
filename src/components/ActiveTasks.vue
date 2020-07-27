<template>
  <div class="task-list">
    <ul>
      <li class="task-list__item" v-for="(task, index) in tasks" style="cursor: pointer">
        <span v-show="!task.edit">{{ task.title }}</span>

        <span
          class="float-right remove-icon"
          style="cursor: pointer"
          @click="removeTask(index)"
        >&#x2716;</span>
        <span
          class="float-right checked-icon"
          style="cursor: pointer"
          @click="finishedTask(index)"
        >&#x2714;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdding: false,
      isEdit: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getActiveTasks;
    },
  },
  methods: {
    finishedTask(index) {
      const a = this.tasks.splice(index, 1);
      this.$store.dispatch("addFinishedTask", a[0]);
    },

    removeTask(index) {
      const a = this.tasks.splice(index, 1);
      this.$store.commit("removeTask", a[0]);
    },
  },
};
</script>

<style scoped>
.task-list {
  color: white;
  list-style: none;
}

.task-list ul {
  padding: 0 0px;
  overflow-y: scroll;
  height: calc(550px - 227px)
}

.task-list__item {
  border-bottom: 1px solid #8d9196;
  margin: 16px 0;
  padding: 16px;
  list-style: none;
}

.edit-icon,
.remove-icon,
.checked-icon {
  transition: font-size 0.2s ease-in;
}

.edit-icon:hover,
.remove-icon:hover,
.checked-icon:hover {
  font-size: 1.5rem;
}

@media (max-width: 576px) {
  * {
    font-size: 14px;
  }
}
</style>
