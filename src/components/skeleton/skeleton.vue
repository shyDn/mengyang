<template>
  <a-locale-provider :locale="zh_CN">
    <a-layout id="components-layout-demo-fixed-sider">
    <navigation :collapsed="collapsed"></navigation>
    <a-layout>
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed">
        </a-icon>
        <p class="company-name">蒙羊牧业有限公司</p>
        <div class="collapse">
          <a-icon type="search" class="icon"/>
          <a-icon type="bell" class="icon"/>
          <a-dropdown :trigger="['click']">
            <span style="cursor:pointer"><a-avatar size="small" icon="user" style="top:6px; margin-right:10px" class="ant-dropdown-link"/>admin <a-icon type="down" /></span>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="() => showResetPwd = true">修改密码</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content class="content">
        <modify-password-modal :showModal="showResetPwd" @handleVisible="(visible) => showResetPwd = visible"></modify-password-modal>
        <div class="router-view">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Copyright © approplis.com.cn, All Rights Reserved
      </a-layout-footer>
    </a-layout>
    </a-layout>
  </a-locale-provider>
</template>
<script>
  import { Layout, Menu, Icon, Collapse, LocaleProvider, Avatar, Dropdown, Form } from 'vue-antd-ui'
  import zh_CN from 'vue-antd-ui/lib/locale-provider/zh_CN'
  import Navigation from './navigation/navigation'
  import ModifyPasswordModal from './modal/modify-password-modal'
  export default {
    name: 'Skeleton',
    components: {
      'a-layout': Layout,
      'a-layout-content': Layout.Content,
      'a-layout-header': Layout.Header,
      'a-layout-footer': Layout.Footer,
      'a-icon': Icon,
      'navigation': Navigation,
      'a-locale-provider': LocaleProvider,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu': Menu,
      'a-menu-item': Menu.Item,
      'modify-password-modal': ModifyPasswordModal
    },
    data() {
      return  { showResetPwd:false, collapsed: false, zh_CN }
    }
  }
</script>
<style lang="scss" scoped src="./skeleton.scss">
</style>