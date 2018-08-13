<template>
  <a-layout-sider class="sider" :trigger="null"
    collapsible v-model="collapsed">
    <div class="title">蒙羊Logo</div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <router-link to="/">
          <a-icon type="upload" />
          <span class="nav-text">DashBoard</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/maptest">
          <a-icon type="user" />
          <span class="nav-text">Baidu Map</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/hp">
          <a-icon type="bar-chart" />
          <span class="nav-text">HP Shy Test</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/video">
          <a-icon type="video-camera" />
          <span class="nav-text">Hikivision</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="5">
        <span slot="title"><a-icon type="mail" /><span>nav 5</span></span>
        <a-menu-item key="5.1" @click="goTO('map')">Option 5</a-menu-item>
        <a-menu-item key="5.2">Option 6</a-menu-item>
        <a-menu-item key="5.3">Option 7</a-menu-item>
        <a-menu-item key="5.4">Option 8</a-menu-item>
      </a-sub-menu>
      <!-- <a-menu-item key="5">
        <a-icon type="cloud-o" />
        <span class="nav-text">nav 5</span>
      </a-menu-item> -->
      <a-menu-item key="6">
        <a-icon type="appstore-o" />
        <span class="nav-text">nav 6</span>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="team" />
        <span class="nav-text">nav 7</span>
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="shop" />
        <span class="nav-text">nav 8</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  import {Layout, Menu, Icon, Collapse} from 'vue-antd-ui';
  export default {
    name: 'Navigation',
    props: ['collapsed'],
    components: {
      'a-layout-sider': Layout.Sider,
      'a-menu': Menu,
      'a-menu-item': Menu.Item,
      'a-icon': Icon,
      'a-sub-menu': Menu.SubMenu
    },
    methods: {
      goTO (params) {
        console.log(params)
        this.$router.push('/login')
      }

    }
  }
</script>

<style lang="scss" scoped src="./navigation.scss">
</style>
