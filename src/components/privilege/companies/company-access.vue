<template>
  <div class="company-access">
    <h2>编辑【蒙羊牧业有限公司】权限</h2>
    <div class="filter">
      <p style="margin:10px">筛选</p>
      <div style="margin:10px">
        <label>功能点名称</label>
        <a-input style="width: 25%; margin-left:10px" placeholder="请输入" v-model="searchInput" type="text"/>
        <div style="float: right">
          <a-button type="primary" @click="search">查询</a-button>
          <a-button style="margin-left:5px" @click="() => searchInput=''">重置</a-button>
        </div>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <a-button type="primary" @click="() => showAdd1stFunctionPointModal = true">+ 新建一级功能点</a-button>
    </div>

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns"
      :dataSource="data" :pagination="false" :defaultExpandedRowKeys="[1,12,2]">
      <span slot="action" slot-scope="value">
        <a href="#" @click="ControlCreateFunctionPointModal(value, $event)">添加</a>
        <a href="#" @click="ControlEditFunctionPointModal(value, $event)">编辑</a>
        <a href="#" @click="showConfirm(value, $event)">删除</a>
      </span>
    </a-table>

    <div style="float: right; margin: 20px 0">
      <a-button @click="cancel">取消</a-button>
      <a-button type="primary" style="margin-left:5px" @click="submit">提交</a-button>
    </div>

    <add-1stfunction-point-modal :showModal="showAdd1stFunctionPointModal" @handleVisible="(visible) => showAdd1stFunctionPointModal = visible"></add-1stfunction-point-modal>
    <create-function-point-modal :showModal="showCreateFunctionPointModal" @handleVisible="(visible) => showCreateFunctionPointModal = visible"></create-function-point-modal>
    <edit-function-point-modal :showModal="showEditFunctionPointModal" @handleVisible="(visible) => showEditFunctionPointModal = visible"></edit-function-point-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Input, Table, Pagination, Modal, Form } from 'vue-antd-ui'
import Add1stFunctionPointModal from './modal/add-1stfunction-point-modal'
import CreateFunctionPointModal from './modal/create-function-point-modal'
import EditFunctionPointModal from './modal/edit-function-point-modal'

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$error = Modal.error
const columns = [{
    title: '功能点名称',
    dataIndex: 'functionName',
    key: 'functionName',
  },{
    title: 'FUNID',
    dataIndex: 'functionId',
    key: 'functionId',
    width: '30%',
  },{
    title: '功能描述',
    dataIndex: 'description',
    width: '30%',
    key: 'description',
  },{
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  }
];
const data = [
  {
    key: 1,
    functionName: '一级功能点1',
    functionId: 'XXXXXXXXXXXXXX',
    description: 'XXXXXXXXXXXXXX',
    children: [
      {
        key: 11,
        functionName: '二级功能点1-1',
        functionId: 'XXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXX',
      },
      {
        key: 12,
        functionName: '二级功能点1-2',
        functionId: 'XXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXX',
        children: [
          {
            key: 121,
            functionName: '三级功能点1-2-1',
            functionId: 'XXXXXXXXXXXXXX',
            description: 'XXXXXXXXXXXXXX',
          },
          {
            key: 122,
            functionName: '三级功能点1-2-2',
            functionId: 'XXXXXXXXXXXXXX',
            description: 'XXXXXXXXXXXXXX',
          }
        ],
      },
    ],
  },
  {
    key: 2,
    functionName: '一级功能点2',
    functionId: 'XXXXXXXXXXXXXX',
    description: 'XXXXXXXXXXXXXX',
    children: [
      {
        key: 21,
        functionName: '二级功能点2-1',
        functionId: 'XXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXX',
        children: [
          {
            key: 211,
            functionName: '三级功能点2-2-1',
            functionId: 'XXXXXXXXXXXXXX',
            description: 'XXXXXXXXXXXXXX',
          },
        ]
      },
      {
        key: 22,
        functionName: '二级功能点2-2',
        functionId: 'XXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXX',
        children: [
          {
            key: 221,
            functionName: '三级功能点2-2-1',
            functionId: 'XXXXXXXXXXXXXX',
            description: 'XXXXXXXXXXXXXX',
          },
          {
            key: 222,
            functionName: '三级功能点2-2-2',
            functionId: 'XXXXXXXXXXXXXX',
            description: 'XXXXXXXXXXXXXX',
          }
        ],
      },
      {
        key: 23,
        functionName: '二级功能点2-3',
        functionId: 'XXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXX',
      }
    ],
  }
];
export default {
  methods: {
    search() {
      console.log(this.searchInput)
      console.log('search');
    },
    cancel() {
      console.log('cancel');
      this.$router.push('/privilege/companies');
    },
    submit() {
      console.log('submit');
      this.$router.push('/privilege/companies');
    },
    ControlCreateFunctionPointModal(value, event) {
      event.preventDefault();
      this.showCreateFunctionPointModal = true;
    },
    ControlEditFunctionPointModal(value, event) {
      event.preventDefault();
      console.log(value)
      this.showEditFunctionPointModal = true;
    },
    showConfirm(value, event) {
      event.preventDefault();
      const comp = this;
      this.$confirm({
        title: `确认取消【蒙羊牧业有限公司】关于一级功能点1】的授权？`,
        okText: '继续',
        cancelText: '取消',
        iconType: 'info-circle',
        onOk() {
          console.log()
          value.children ? comp.showError() : console.log('ok')
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    showError() {
      this.$error({
        title: '无法删除该功能点',
        content: '请先删除该功能点下的其他子级功能点',
        okText: '确定',
        maskClosable: true
      });
    }
  },
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-table': Table,
    'a-pagination': Pagination,
    'add-1stfunction-point-modal': Add1stFunctionPointModal,
    'create-function-point-modal': CreateFunctionPointModal,
    'edit-function-point-modal': EditFunctionPointModal
  },
  data() {
    return  { data, columns, total: 50, searchInput: '', showCreateFunctionPointModal: false,
      showEditFunctionPointModal: false, showAdd1stFunctionPointModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.company-access {
  margin: 0 32px;
}
.filter {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(153, 153, 153, 1);
}
</style>


