<template>
  <div class="companies">
    <div class="filter">
      <p style="margin:10px">筛选</p>
      <div style="margin:10px">
        <label>公司名称</label>
        <a-input style="width: 25%; margin-left:10px" placeholder="请输入" v-model="searchInput" type="text"/>
        <div style="float: right">
          <a-button type="primary" @click="search">查询</a-button>
          <a-button style="margin-left:5px" @click="() => searchInput=''">重置</a-button>
        </div>
      </div>
    </div>

    <div style="margin: 16px 0">
      <a-button type="primary" @click="showCreateModal"> + 新建</a-button>
    </div>

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns" :dataSource="data" :pagination="false">
      <span slot="action" slot-scope="text, record">
        <a href="#" @click="showResetModal(text, $event)">重置</a>
        <router-link to='/privilege/companies/access'>权限</router-link>
      </span>
    </a-table>

    <div style="margin-top: 24px;">
      <label>总共 {{total}}个项目</label>
      <a-pagination style="float: right" size="small" :total="total" showSizeChanger showQuickJumper/>
    </div>

    <reset-pwd-modal :resetObj="resetObj" :showModal="showResetPwdModal" @handleVisible="(visible) => showResetPwdModal = visible"></reset-pwd-modal>
    <create-comp-modal :showModal="showCreateCompModal" @handleVisible="(visible) => showCreateCompModal = visible"></create-comp-modal>
  </div>

</template>

<script>
  import { Button, Input, Table, Pagination, Form, Radio } from 'vue-antd-ui'
  import ResetPwdModal from './modal/reset-pwd-modal'
  import CreateCompModal from './modal/create-company-modal'

  const columns = [{
    title: '公司id',
    dataIndex: 'companyId',
    key: 'companyId',
    }, {
      title: '公司名称',
      dataIndex: 'companyName',
      key: 'companyName',
    }, {
      title: '授权',
      dataIndex: 'authorization',
      key: 'authorization',
    }, {
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
    companyId: '1',
    companyName: '蒙羊牧业有限公司',
    authorization: '是',
    createdTime: '2018-08-08  12:23:34'
    }, {
      companyId: '2',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    }, {
      companyId: '3',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '4',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '5',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '6',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '7',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '8',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '9',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    },{
      companyId: '10',
      companyName: '蒙羊牧业有限公司',
      authorization: '是',
      createdTime: '2018-08-08  12:23:34'
    }
  ];
  export default {
    name: 'companies',
    components: {
      'a-button': Button,
      'a-input': Input,
      'a-table': Table,
      'a-pagination': Pagination,
      'reset-pwd-modal': ResetPwdModal,
      'create-comp-modal': CreateCompModal
    },
    methods: {
      search() {
        console.log('search');
      },
      showCreateModal() {
        this.showCreateCompModal = true;
      },
      showResetModal(obj, event) {
        event.preventDefault();
        this.resetObj = obj;
        this.showResetPwdModal = true;
      },
      hideCreateModal() {
        this.showCreateCompModal = false;
      },

    },
    data() {
      return  { data, columns, total: 50, searchInput:'', showCreateCompModal: false, showResetPwdModal: false, resetObj: null}
    }
  }
</script>

<style lang="scss" scoped src="./companies.scss">
</style>
