<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hahahaha</h2>
    <a-date-picker />
    <h2>delete later</h2>
  </div>
</template>

<script>
import { DatePicker } from 'vue-antd-ui';
// import DatePicker from 'vue-antd-ui/lib/date-picker'
export default {
  name: 'HomePageShy',
  components: {
    'a-date-picker':  DatePicker
  },
  data () {
    return {
      msg: 'HPShy test Vue'
    }
  }
}
</script>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
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
-->
