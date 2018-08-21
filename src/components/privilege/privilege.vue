<template>
  <div class="breadcrumb">
    <a-icon type="home" style="margin: 0 32px 6px"/>
    <a-breadcrumb class="breadcrumb-item" :routes="routes" style="margin-left: -30px">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{route.breadcrumbName}}
        </span>
        <router-link v-else :to="`/${paths.join('/')}`">
          {{route.breadcrumbName}}
        </router-link>
      </template>
    </a-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Breadcrumb, Icon } from 'vue-antd-ui'
  export default {
    components: {
      'a-breadcrumb': Breadcrumb,
      'a-breadcrumb-item': Breadcrumb.Item,
      'a-icon': Icon
    },
    mounted() {
      this.buildBreadCrumb(this.$router.currentRoute.path)
    },
    watch: {
      '$route'(to, from) {
        this.buildBreadCrumb(to.path)
      }
    },
    data(){
      return {
        routes: [],
      }
    },
    methods: {
      buildBreadCrumb(path) {
        this.routes = [];
        const pathArr = path.split('/');
        if(pathArr[1] === 'privilege') this.routes.push({path: 'privilege',breadcrumbName: '权限管理'})
        if(pathArr[2] === 'companies') {
          this.routes.push({path: 'companies', breadcrumbName: '公司管理'})
          if(pathArr[3] === 'access') this.routes.push({path: 'access', breadcrumbName: '公司权限'})
        } else if (pathArr[2] === 'roles') {
          this.routes.push({path: 'roles', breadcrumbName: '角色管理'})
          if(pathArr[3] === 'access') this.routes.push({path: 'access', breadcrumbName: '角色权限'})
        } else if (pathArr[2] === 'users') this.routes.push({path: 'users', breadcrumbName: '用户管理'})
          else if (pathArr[2] === 'logs') this.routes.push({path: 'logs', breadcrumbName: '操作日志'})
      }
    }
  }
</script>

<style lang="scss" scoped src="./privilege.scss">
</style>
