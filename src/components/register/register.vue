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
  name: 'Register',
  components: {
    'a-date-picker':  DatePicker
  },
  data () {
    return {
      msg: 'This is Login Page'
    }
  }
}
</script>

<style scoped lang="scss" src="./register.scss">
</style>
