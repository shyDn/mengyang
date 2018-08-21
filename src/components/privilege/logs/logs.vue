<template>
  <div class="logs">
    <div class="filter">
      <p style="margin:10px">筛选</p>
      <div style="margin:10px">
        <label>操作人</label>
        <a-input style="width: 15%; margin-left:10px" placeholder="请输入" v-model="operator" type="text"/>
        <label style="margin-left: 24px">行为描述</label>
        <a-input style="width: 15%; margin-left:10px" placeholder="请输入" v-model="description" type="text"/>
        <label style="margin-left: 24px">操作时间</label>
        <a-range-picker
          style="width: 32%"
          :showTime="{ format: 'HH:mm:ss' }"
          format="YYYY-MM-DD HH:mm:ss"
          :placeholder="['Start Time', 'End Time']"
          @change="onChange"
          @ok="onOk"/>
        <div style="float: right">
          <a-button type="primary" @click="search">查询</a-button>
          <a-button style="margin-left:5px" @click="() => searchUser=''">重置</a-button>
        </div>
      </div>
    </div>

    <a-table style="background-color: rgba(255, 255, 255, 1); border:1px solid rgba(153, 153, 153, 1)" :columns="columns"
      :dataSource="data" :pagination="false">
    </a-table>

    <div style="margin-top: 24px;">
      <label>总共 {{total}}个项目</label>
      <a-pagination style="float: right" size="small" :total="total" showSizeChanger showQuickJumper/>
    </div>
  </div>
</template>

<script>
import { Button, Input, Table, Pagination, Form, DatePicker } from 'vue-antd-ui'
const columns = [{
    title: '行为id',
    dataIndex: 'operationId',
    key: 'operationId',
  },{
    title: '操作人',
    dataIndex: 'operator',
    key: 'operator',
  },{
    title: '操作时间',
    dataIndex: 'operatingTime',
    key: 'operatingTime',
  },{
    title: 'IP地址',
    dataIndex: 'ipAddress',
    key: 'ipAddress',
  },{
    title: '行为描述',
    dataIndex: 'description',
    width: '40%',
    key: 'description',
  }
];
const data = new Array(10).fill({
    operationId: 'XXXXX',
    operator: 'XXXXX',
    operatingTime: '2018-08-08  12:23:34',
    ipAddress: '111.111.111.11',
    description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  });
export default {
  methods: {
    search() {
      console.log(this.searchInput)
      console.log('search');
    },
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    },
    onOk(value) {
      console.log('onOk: ', value);
    }
  },
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-table': Table,
    'a-pagination': Pagination,
    'a-range-picker': DatePicker.RangePicker
  },
  data() {
    return  { data, columns, total: 43, operator: '', description: '' }
  }
}
</script>

<style lang="scss" scoped>
.logs {
  margin: 0 32px;
}
.filter {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(153, 153, 153, 1);
  margin-bottom: 16px;
}
</style>


