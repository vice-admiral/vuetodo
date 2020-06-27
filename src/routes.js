import Completed from "./components/CompletedTasks.vue";
import Home from "../src/Home.vue";
import Active from "./components/ActiveTasks.vue";
import Login from './components/Login.vue'

export const routes = [
  { path: "", component: Home },
  { path: "/completed", component: Completed },
  { path: "/active", component: Active },
  { path: "/login", component: Login },
  
];
