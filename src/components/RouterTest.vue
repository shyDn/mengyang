<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/maptest">Test Map</router-link>
    <router-link to="/videotest">Test Haikang</router-link>
    <div>
      Below is child compoennt.
      <hpshy></hpshy>
    </div>
  </div>
</template>

<script>
import hpshy from './test/index.js'
import Vue from 'vue'
Vue.use(hpshy)
export default {
  name: 'RouterTest',
  data () {
    return {
      msg: 'RouterTest Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
