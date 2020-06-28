import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [],
    finishedTasks: []
  },
  getters: {
    getActiveTasks: state => {
      return state.tasks;
    },
    getFinishedTasks: state => {
      return state.finishedTasks;
    },
    getActiveLen: state => {
      return state.tasks.length;
    },
    getFinishedTaskLen: state => {
      return state.finishedTasks.length;
    },
  },
  mutations: {
    initStore: state => {
      // localStorage.removeItem('tasks');
      // localStorage.removeItem('finished');
      if (localStorage.getItem("tasks")) {
        state.tasks = JSON.parse(localStorage.getItem("tasks"));
      }
      if (localStorage.getItem("finished")) {
        state.finishedTasks = JSON.parse(localStorage.getItem("finished"));
      }
    },
    addTask: (state, newTask) => {
      state.tasks.push(newTask);
    },
    addFinishedTask: (state, finishedTask) => {
      finishedTask.isDone = true;
      state.finishedTasks.push(finishedTask);
    },
    removeTask: (state, payload) => {
      state.tasks.filter(item => item !== payload.id)
    },
    deleteTask: (state, payload) => {
      state.finishedTasks.filter(item => item !== payload.id);
    }
  }
});

store.subscribe((mutations, state) => {
  var parsed = JSON.stringify(state.tasks);
  var parsed2 = JSON.stringify(state.finishedTasks);
  localStorage.setItem("tasks", parsed);
  localStorage.setItem("finished", parsed2);
});
