<template>
  <div class="users">
    <div class="filter">
      <p style="margin:10px">筛选</p>
      <div style="margin:10px">
        <label>用户名</label>
        <a-input style="width: 25%; margin-left:10px" placeholder="请输入" v-model="searchUser" type="text"/>
        <label style="margin-left: 24px">状态</label>
        <a-select labelInValue :defaultValue="{ key: 'all' }" style="width: 120px">
          <a-select-option value="all">全部</a-select-option>
          <a-select-option value="active">开</a-select-option>
          <a-select-option value="inactive">关</a-select-option>
        </a-select>
        <label style="margin-left: 24px">角色</label>
        <a-select labelInValue :defaultValue="{ key: 'all' }" style="width: 120px">
          <a-select-option value="all">全部</a-select-option>
          <a-select-option value="superAdmin">超级管理员</a-select-option>
          <a-select-option value="role1">角色1</a-select-option>
          <a-select-option value="role2">角色2</a-select-option>
          <a-select-option value="role3">角色3</a-select-option>
        </a-select>
        <div style="float: right">
          <a-button type="primary" @click="search">查询</a-button>
          <a-button style="margin-left:5px" @click="() => searchUser=''">重置</a-button>
        </div>
      </div>
    </div>

    <div style="margin: 16px 0">
      <a-button type="primary" @click="() => showCreateUserModal = true"> + 新增用户</a-button>
    </div>

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns" :dataSource="data" :pagination="false">
      <div slot="status" slot-scope="value">
        <a-switch v-if="value.status !== undefined" v-model="value.status" checkedChildren="开" unCheckedChildren="关"  @change="onChange(value)"/>
        <div v-else> -- </div>
      </div>
      <div slot="action" slot-scope="value">
        <span v-if="value.status !== undefined">
          <a href="javascript:;" @click="() => showEditUserModal = true">编辑</a>
          <a href="javascript:;" @click="() => showEditAvailableCompanyModal = true">公司</a>
        </span>
        <div v-else> -- </div>
      </div>
    </a-table>

    <div style="margin-top: 24px;">
      <label>总共 {{total}}个项目</label>
      <a-pagination style="float: right" size="small" :total="total" showSizeChanger showQuickJumper/>
    </div>

    <create-user-modal :showModal="showCreateUserModal" @handleVisible="(visible) => showCreateUserModal = visible"></create-user-modal>
    <edit-user-modal :showModal="showEditUserModal" @handleVisible="(visible) => showEditUserModal = visible"></edit-user-modal>
    <edit-available-company-modal :showModal="showEditAvailableCompanyModal" @handleVisible="(visible) => showEditAvailableCompanyModal = visible"></edit-available-company-modal>
  </div>

</template>

<script>
  import { Button, Input, Table, Pagination, Form, Select, Switch } from 'vue-antd-ui'
  import CreateUserModal from './modal/create-user-modal'
  import EditUserModal from './modal/edit-user-modal'
  import EditAvailableCompanyModal from './modal/edit-available-company-modal'
  const columns = [{
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
    }, {
      title: '真实姓名',
      dataIndex: 'realName',
      key: 'realName',
    }, {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    }, {
      title: '联系方式',
      dataIndex: 'contact',
      key: 'contact'
    }, {
      title: '状态',
      key: 'status',
      scopedSlots: { customRender: 'status'}
    }, {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
    }, {
      title: '最后登录时间',
      dataIndex: 'lastLoginTime',
      key: 'lastLoginTime',
    }, {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    }
  ];

  const data = [{
    userName: '超级管理员',
    realName: '---',
    role: '超级管理员',
    contact: 'XXXXXXXXX',
    status: undefined,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色1',
    contact: 'XXXXXXXXX',
    status: false,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色2',
    contact: 'XXXXXXXXX',
    status: true,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: false,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: true,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: false,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: true,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: false,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: true,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }, {
    userName: 'XXXXX',
    realName: 'XXXXX',
    role: '角色3',
    contact: 'XXXXXXXXX',
    status: false,
    createdTime: '2018-08-08  12:23:34',
    lastLoginTime: '2018-08-08  12:23:34'
    }
  ];
  export default {
    components: {
      'a-button': Button,
      'a-input': Input,
      'a-table': Table,
      'a-pagination': Pagination,
      'a-select': Select,
      'a-select-option': Select.Option,
      'a-switch': Switch,
      'create-user-modal': CreateUserModal,
      'edit-user-modal': EditUserModal,
      'edit-available-company-modal': EditAvailableCompanyModal
    },
    methods: {
      search() {
        console.log('search');
      },
      onChange(value) {
        console.log(value);
      }
    },
    data() {
      return  { data, columns, total: 43, searchUser:'', showMembersModal: false, showCreateUserModal: false,
        showEditUserModal: false, showEditAvailableCompanyModal: false}
    }
  }
</script>

<style lang="scss" scoped>
.filter {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(153, 153, 153, 1);
}

.users {
  margin: 0 32px;
}
</style>
