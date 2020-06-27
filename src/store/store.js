import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: "Jogging", isDone: false },
      { id: 2, title: "Grocery", isDone: false }
    ],

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
    }
  },
  mutations: {
    addTask: (state, newTask) => {
      state.tasks.push(newTask);
    },
    addFinishedTask: (state, finishedTask) => {
      finishedTask.isDone = true
    
      state.finishedTasks.push(finishedTask)
      console.log(state.finishedTasks);
      
    },
    
  }
});
