<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <navigation :collapsed="collapsed"></navigation>
    <a-layout>
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed">
        </a-icon>
        <img src="@/assets/appropolis_logo.png" class="logo">
        <a-collapse class="collapse">
          <a-collapse-panel class="panel" :header="'欢迎, hahahaha'">
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>
      </a-layout-header>
      <a-layout-content class="content">
        <div class="router-view">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        奥孛睿斯物联 版权所有 ©2018 Created by shy
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
  import { Layout, Menu, Icon, Collapse } from 'vue-antd-ui'
  import Navigation from './navigation/navigation'
  export default {
    name: 'Skeleton',
    components: {
      'a-layout': Layout,
      'a-layout-content': Layout.Content,
      'a-layout-header': Layout.Header,
      'a-layout-footer': Layout.Footer,
      'a-collapse': Collapse,
      'a-collapse-panel': Collapse.Panel,
      'a-icon': Icon,
      'navigation': Navigation
    },
    watch: {
      '$route'(to, from) {
        console.log(to);
        console.log(from);
      }
    },
    data() {
      return  { text: 'this is me', collapsed: false}
    }
  }
</script>
<style lang="scss" scoped src="./skeleton.scss">
</style>