<template>
  <div class="roles">
    <div class="filter">
      <p style="margin:10px">筛选</p>
      <div style="margin:10px">
        <label>角色名称</label>
        <a-input style="width: 25%; margin-left:10px" placeholder="请输入" v-model="searchInput" type="text"/>
        <label style="margin-left: 24px">角色状态</label>
        <a-select labelInValue :defaultValue="{ key: 'all' }" style="width: 120px">
          <a-select-option value="all">全部</a-select-option>
          <a-select-option value="active">开</a-select-option>
          <a-select-option value="inactive">关</a-select-option>
        </a-select>
        <div style="float: right">
          <a-button type="primary" @click="search">查询</a-button>
          <a-button style="margin-left:5px" @click="() => searchInput=''">重置</a-button>
        </div>
      </div>
    </div>

    <div style="margin: 16px 0">
      <a-button type="primary" @click="() => showCreateRoleModal = true"> + 新建角色</a-button>
    </div>

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns" :dataSource="data" :pagination="false">
      <div slot="status" slot-scope="value">
        <a-switch v-if="value.status !== undefined" v-model="value.status" checkedChildren="开" unCheckedChildren="关"  @change="onChange(value)"/>
        <div v-else> -- </div>
      </div>
      <div slot="action" slot-scope="value">
        <span v-if="value.status !== undefined">
          <a href="javascript:;" @click="() => showEditRoleModal = true">编辑</a>
          <a href="javascript:;" @click="() => showMembersModal = true">成员</a>
          <router-link to='/privilege/roles/access'>权限</router-link>
        </span>
        <div v-else> -- </div>
      </div>
    </a-table>

    <div style="margin-top: 24px;">
      <label>总共 {{total}}个项目</label>
      <a-pagination style="float: right" size="small" :total="total" showSizeChanger showQuickJumper/>
    </div>

    <create-role-modal :showModal="showCreateRoleModal" @handleVisible="(visible) => showCreateRoleModal = visible"></create-role-modal>
    <edit-role-modal :showModal="showEditRoleModal" @handleVisible="(visible) => showEditRoleModal = visible"></edit-role-modal>
    <members-modal :showModal="showMembersModal" @handleVisible="(visible) => showMembersModal = visible"></members-modal>
  </div>

</template>

<script>
  import Vue from 'vue'
  import { Button, Input, Table, Pagination, Form, Select, Switch, Modal } from 'vue-antd-ui'
  import CreateRoleModal from './modal/create-role-modal'
  import EditRoleModal from './modal/edit-role-modal'
  import MembersModal from './modal/members-modal'

  Vue.prototype.$confirm = Modal.confirm
  Vue.prototype.$success = Modal.success
  const columns = [{
    title: '角色id',
    dataIndex: 'roleId',
    key: 'roleId',
    }, {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    }, {
      title: '角色描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '授权',
      dataIndex: 'authorization',
      key: 'authorization',
    },
    {
      title: '角色人数',
      dataIndex: 'roleNum',
      key: 'roleNum',
    },
    {
      title: '状态',
      key: 'status',
      scopedSlots: { customRender: 'status'}
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
    },{
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    }
  ];

  const data = [{
    roleId: '1',
    roleName: '超级管理员',
    description: '超级管理员',
    authorization: '--',
    roleNum: 1,
    status: undefined,
    createdTime: '2018-08-08  12:23:34'
    }, {
    roleId: '2',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    }, {
    roleId: '3',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '4',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '5',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '6',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '否',
    roleNum: 1,
    status: false,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '7',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '8',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '否',
    roleNum: 1,
    status: false,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '9',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '是',
    roleNum: 1,
    status: true,
    createdTime: '2018-08-08  12:23:34'
    },{
    roleId: '10',
    roleName: 'XXXXXXXXXXXX',
    description: 'XXXXXXXXXXXX',
    authorization: '否',
    roleNum: 1,
    status: false,
    createdTime: '2018-08-08  12:23:34'
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
      'create-role-modal': CreateRoleModal,
      'edit-role-modal': EditRoleModal,
      'members-modal': MembersModal
    },
    methods: {
      search() {
        console.log('search');
      },
      onChange(value) {
        if(!value.status) {
          this.showConfirm(value);
        }
        console.log(value);
      },
      showConfirm(value) {
        const comp = this;
        this.$confirm({
          title: `确定要停用【蒙羊牧业有限公司】的【XXX】吗？`,
          okText: '确定',
          cancelText: '取消',
          iconType: 'info-circle',
          onOk() {
            console.log()
            comp.showSuccess();
          },
          onCancel() {
            value.status = true;
            console.log('Cancel');
          },
        });
      },
      showSuccess() {
        this.$success({
          title: '【蒙羊牧业有限公司】的【XXX】已停用',
          content: '',
          okText: '确定',
          maskClosable: true
        });
      }
    },
    data() {
      return  { data, columns, total: 50, searchInput:'', showMembersModal: false, showCreateRoleModal: false,
        showEditRoleModal: false,}
    }
  }
</script>

<style lang="scss" scoped src="./role.scss">
</style>
