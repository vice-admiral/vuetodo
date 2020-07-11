<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
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
