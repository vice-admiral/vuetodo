import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store";

import { routes } from "../src/routes";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
