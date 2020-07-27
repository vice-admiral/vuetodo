<template>
  <div class="task-list">
    <ul>
      <li class="task-list__item" v-for="(item, index) in finishedTasks">
        {{ item.title }}
        <span
          class="float-right"
          style="cursor: pointer"
          @click="deleteTask(index)"
        >&#x2716;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    finishedTasks() {
      return this.$store.getters.getFinishedTasks;
    },
    length() {
      return this.$store.getters.getFinishedTaskLen;
    },
  },
  methods: {
    deleteTask(index) {
      console.log(index);

      const b = this.finishedTasks.splice(index, 1);
      this.$store.commit("deleteTask", b[0]);
    },

    deleteAll() {
      this.$store.dispatch("deleteAll");
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

@media (max-width: 576px) {
  * {
    font-size: 14px;
  }
}
</style>
