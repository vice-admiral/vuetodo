<template>
  <div id="app">
    <app-header></app-header>
    <app-add-task></app-add-task>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
   
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 850px;
  height: 550px;
  transform: translate(-50%, -50%);
  background-color: #393f49;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}

body {
  padding: 0;
  background: #f3d2c1;
}

@media (max-width: 578px) {
  body {
    padding: 5px;
  }
}

@media (max-width: 768px) {
  * {
    font-size: 12px;
  }
}
</style>
