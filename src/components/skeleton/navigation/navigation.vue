<template>
  <a-layout-sider class="sider" :trigger="null" width="256px"
    collapsible v-model="collapsed">
    <div class="logo"><img src="@/assets/u5.png"></div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['0.1']">
      <a-sub-menu key="0">
        <span slot="title"><a-icon type="home" /><span>权限管理</span></span>
        <a-menu-item key="0.1">
          <router-link to="/privilege/companies">
            <span class="nav-text">公司管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="0.2">
          <router-link to="/privilege/roles">
            <span class="nav-text">角色管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="0.3">
          <router-link to="/privilege/users">
            <span class="nav-text">用户管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="0.4">
          <router-link to="/privilege/logs">
            <span class="nav-text">操作日志</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
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
        <router-link to="/monitor" target="_blank">
          <a-icon type="bar-chart" />
          <span class="nav-text">大屏显示</span>
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
        <a-sub-menu key="5.1">
          <span slot="title"><a-icon type="mail" /><span>nav 5.1</span></span>
          <a-menu-item key="5.1.1">Option 5.1.1</a-menu-item>
          <a-menu-item key="5.1.2">Option 5.1.2</a-menu-item>
          <a-menu-item key="5.1.3">Option 5.1.3</a-menu-item>
          <a-menu-item key="5.1.4">Option 5.1.4</a-menu-item>
        </a-sub-menu>
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
    data() {
      return {
        collapsedStyle: {flex: '0 0 102px', maxWidth: '102px', minWidth: '102px', width: '102px'},
        normalStyle: {flex: '0 0 256px', maxWidth: '256px', minWidth: '256px', width: '256px'},
        siderStyle: this.normalStyle,
      }
    },
    watch: {
      'collapsed': function(collapsed){
        this.siderStyle = collapsed ? this.collapsedStyle : this.normalStyle;
      }
    },
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
