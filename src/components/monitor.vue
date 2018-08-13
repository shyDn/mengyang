<template>
  <div class="container">
      <!-- <object data="https://datav.aliyun.com/screen/159768?spm=datav.10712490.0.0.71793967TKwXWc" width="100%" height="100%">
          <embed src="https://datav.aliyun.com/screen/159768?spm=datav.10712490.0.0.71793967TKwXWc" width="100%" height="100%" />
          Error: Embedded data could not be displayed.
      </object> -->

      <iframe class="datav" :src="url"></iframe>
      <div class="tupian" @click="alert1"><img src="@/assets/touming.png" class="touming"/></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Monitor',
  data () {
    return {
      screenWidth: 1440,
      screenHeight: 900,
      url: ""
    }
  },
  created() {
    this.fetchData();
  },
  mounted () {
    this.shy();
    var self = this;
    window.onresize = function(){
        self.shy()
    }
  },
  methods: {
    fetchData () {
      var self = this
      return axios.get('http://localhost:3000/datav')
        .then(function (response) {
          self.url = response.data.url
        })
        .catch(function (error) {
          console.log('error')
        })
    },
    alert1() {
      alert('click')
    },
    shy() {
      // document.getElementById("datavLoading").style.display="none"
      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
      document.getElementsByClassName("tupian")[0].style.left = this.screenWidth/1920 *36 + 'px';
      document.getElementsByClassName("tupian")[0].style.top = this.screenWidth/1920 *144 + 'px';
      document.getElementsByClassName("tupian")[0].style.width = this.screenWidth/1920 *364 + 'px';
      document.getElementsByClassName("tupian")[0].style.height = this.screenWidth/1920 *188 + 'px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  position: relative;
  min-height: 100vh;
}
.touming {
  width: 100%;
  height: 100%;
  background-color: red;
  opacity:0.5;
}
.tupian {
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
}
.datav {
  z-index:0;
  width:100%;
  height: 100vh;
}
</style>

