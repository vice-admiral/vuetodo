<template>
  <div class="task-list">
    <ul>
      <li class="task-list__item" v-for="(task, index) in tasks" style="cursor: pointer">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="6px"
          width="14px"
          viewBox="0 0 367.805 367.805"
          style="enable-background:new 0 0 367.805 367.805;"
          xml:space="preserve"
          @click="finishedTask"
        >
          <g>
            <path
              style="fill:#3BB54A;"
              d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
		S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
            />
            <polygon
              style="fill:#D4E1F4;"
              points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
		256.001,103.968 	"
            />
          </g>
        </svg>

        <span v-show="!task.edit">{{ task.title }}</span>

        <span
          class="float-right remove-icon"
          style="cursor: pointer"
          @click="removeTask(index)"
        >&#x2716;</span>

        <!-- <span
          class="float-right checked-icon"
          style="cursor: pointer"
          @click="finishedTask(index)"
        >&#x2714;</span>-->
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
  height: calc(550px - 227px);
}

.task-list__item {
  display: block;
  border-bottom: 1px solid #8d9196;
  margin: 16px 0;
  padding: 12px;
  list-style: none;
}

.task-list__item span {
  padding: 0 0 0 5px;
}

img {
  margin: 2px;
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
