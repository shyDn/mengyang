<template>
  <div class="role-access">
    <h2>编辑【XXXXXX】角色权限</h2>
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

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns"
      :dataSource="data" :pagination="false" :defaultExpandedRowKeys="[1,12,2]" :rowSelection="{}">
    </a-table>

    <div style="float: right; margin: 20px 0">
      <a-button @click="cancel">取消</a-button>
      <a-button type="primary" style="margin-left:5px" @click="submit">提交</a-button>
    </div>
  </div>
</template>

<script>
import { Button, Input, Table, Form } from 'vue-antd-ui'
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
      console.log('search');
    },
    cancel() {
      console.log('cancel');
      this.$router.push('/privilege/roles');
    },
    submit() {
      console.log('submit');
      this.$router.push('/privilege/roles');
    }
  },
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-table': Table
  },
  data() {
    return  { data, columns, total: 50, searchInput: '', showCreateAndEditModal: false, showAddFunctionPointModal: false}
  }
}
</script>

<style lang="scss" scoped>
.role-access {
  margin: 0 32px;
}
.filter {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(153, 153, 153, 1);
  margin-bottom: 16px;
}
</style>


