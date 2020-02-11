<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home/Home';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  background-color: rgb(21, 32, 43);
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-size: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
}
</style>
