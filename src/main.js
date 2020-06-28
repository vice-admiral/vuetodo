import Vue from "vue";
import VueRouter from "vue-router";
// import VuexPersistence from "vuex-persist";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store";

import { routes } from "../src/routes";

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// });

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
 beforeCreate() {
   this.$store.commit('initStore')
  //  this.$store.commit('finished')
 },
  render: h => h(App)
});
