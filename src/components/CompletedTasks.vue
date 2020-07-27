<template>
  <div class="container ">
    <div>
      <div class="col-sm-4 col-md-6 col-lg-12 p-1 ">
        <div class="card-body">
          <div class="header">
            <h4>Your Completed Tasks</h4>
            <h4>
              {{ length }}
              <span v-if="length == 1">item</span>
              <span v-else>items</span>
            </h4>
            <button class="btn btn-custom btn-sm" @click="deleteAll">
              Delete All
            </button>
          </div>
          <ul class="list-group">
            <li v-for="(item, index) in finishedTasks" class="list-group-item">
              {{ item.title }}
              <span
                class="float-right"
                style="cursor: pointer"
                @click="deleteTask(index)"
                >&#x2716;</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
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
    }
  },
  methods: {
    deleteTask(index) {
      console.log(index);

      const b = this.finishedTasks.splice(index, 1);
      this.$store.commit("deleteTask", b[0]);
    },

    deleteAll(){
      this.$store.dispatch('deleteAll')
    }
  }
};
</script>

<style scoped>

.header {
  display: flex;
  background: #8bd3dd;
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
  vertical-align: middle;
}

.card-body {
  padding: 5px;
  background: #8bd3dd;
  color: #001858;
  border-radius: 5px;
  /* border: 2px solid #001858; */
}

h1 {
  text-align: center;
}

.list-group-item {
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 5px 5px;
  border: none;
  background: #8bd3dd;
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

@media (max-width: 576px) {
  * {
    font-size: 14px;
  }
}
</style>
