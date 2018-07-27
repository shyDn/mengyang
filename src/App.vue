<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>This is my first VUE project!!!</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./App.scss"
</style>
