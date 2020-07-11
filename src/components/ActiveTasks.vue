<template>
  <div class="container ">
    <div class="row justify-content-md-center align-items-center">
      <div class="col-sm-4 col-md-6 col-lg-12 p-1">
        <div class="card-body">
          <div class="header">
            <h4>Your Active Tasks</h4>
            <h4>
              {{ length }}
              <span v-if="length == 1">item</span>
              <span v-else>items</span> left
            </h4>

            <button class="btn btn-custom btn-sm" @click="addNewTask">
              Add New Task
            </button>
          </div>
          <app-modal
            v-if="isModalOpen"
            @addTask="isModalOpen = !isModalOpen"
          ></app-modal>

          <ul class="list-group">
            <li
              class="list-group-item card-text"
              v-for="(task, index) in tasks"
              style="cursor: pointer"
            >
              <span v-show="!task.edit">{{ task.title }}</span>

              <span
                class="float-right remove-icon"
                style="cursor: pointer"
                @click="removeTask(index)"
                >&#x2716;</span
              >
              <span
                class="float-right checked-icon"
                style="cursor: pointer"
                @click="finishedTask(index)"
                >&#x2714;</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  data() {
    return {
      isAdding: false,
      isModalOpen: false,
      isEdit: false
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getActiveTasks;
    },
    length() {
      return this.$store.getters.getActiveLen;
    }
  },
  methods: {
    addNewTask() {
      this.isModalOpen = !this.isModalOpen;
    },
    finishedTask(index) {
      const a = this.tasks.splice(index, 1);
      this.$store.dispatch("addFinishedTask", a[0]);
    },

    removeTask(index) {
      const a = this.tasks.splice(index, 1);
      this.$store.commit("removeTask", a[0]);
    }
  },

  components: {
    appModal: Modal
  }
};
</script>

<style scoped>
.header {
  display: flex;
  background: #fef6e4;
  padding: 10px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header h4 {
  flex-grow: 4;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
}

.card-body {
  padding: 5px;
  background: #fef6e4;
  color: #001858;
  border-radius: 5px;
  /* border: 2px solid #001858; */
}

.list-group-item {
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 5px 5px;
  border: none;
  background: #fef6e4;
}

.input-custom {
  background: #fef6e4;
  border: 1px solid #001858;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
}

.btn-custom {
  background: #f582ae;
  color: #001858;
  font-weight: 500;
  font-size: 1.2rem;
  vertical-align: middle;
}

.btn-custom:hover {
  background: #fa5e9a;
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
