<template>
  <div class="hello">
    <h1 class="shy">{{ msg }}</h1>
    <router-link to="/routertest">Go to shy</router-link>
    <div>
      <p>a: {{ a }}</p>
      <p>b: {{ b }}</p>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Shy HomePage Vue.js App',
      a: 1
    }
  },
  computed: {
    b() {
      console.log('B is computed!!');
      return this.a *2;
    }
  },
  watch: {
    a() {
      console.log('A is watched!!');

    }
  },
  methods: {
    increment() {
      this.a+=1;
    }
  },
  beforeCreate:function(){
      console.log('beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳')
      console.log(this.msg)//undefined
      console.log(this._watchers)//undefined
      console.log(document.getElementsByClassName("shy")[0])//undefined
      this.msg ='martin'
  },
  created:function(){
      console.log(this._watchers);
      console.log('created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数')
      this.msg+='!!!'
      console.log(`${this.msg}`)
      console.log('在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log('接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染')
  },
  beforeMount:function(){
      console.log('beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated')
      this.msg+='@@@@'
      console.log('在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log(document.getElementsByClassName("shy"))
      console.log(document.getElementsByClassName("shy")[0])//undefined
      console.log('接下来开始render，渲染出真实dom')
  },
  // render:function(createElement){
  //     console.log('render')
  //     return createElement('div','hahaha')
  // },
  mounted:function(){
      console.log('mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了')
      console.log(document.getElementsByClassName("shy")[0])
      console.log('可以在这里操作真实dom等事情...')

  //    this.$options.timer = setInterval(function () {
  //        console.log('setInterval')
  //         this.msg+='!'
  //    }.bind(this),500)
  },
  beforeUpdate:function(){
      //这里不能更改数据，否则会陷入死循环
      console.log('beforeUpdate:重新渲染之前触发')
      console.log('然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染')
  },
  updated:function(){
      //这里不能更改数据，否则会陷入死循环
      console.log('updated:数据已经更改完成，dom也重新render完成')
  },
  beforeDestroy:function(){
      console.log('beforeDestory:销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...')
      // clearInterval(this.$options.timer)
      console.log(this._watchers)
  },
  destroyed:function(){
      console.log(this._watchers)
      console.log('destroyed:组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后')
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
