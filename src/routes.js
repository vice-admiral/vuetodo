import Completed from "./components/CompletedTasks.vue";
import All from "../src/All.vue";
import Active from "./components/ActiveTasks.vue";

export const routes = [
  { path: "", component: All },
  { path: "/completed", component: Completed },
  { path: "/active", component: Active }
];
