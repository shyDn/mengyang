<template>
    <a-modal
      :destroyOnClose="true"
      width="785px"
      title="编辑用户可查看公司"
      v-model="visible"
      @ok="hideModal"
      okText="确定"
      cancelText="取消">
      <h3 style="margin-left: 13px">请选择XXX拥有查看权限的公司</h3>
      <a-transfer
        :titles="['可查看公司', '平台所有公司']"
        :dataSource="data"
        showSearch
        :listStyle="{
          width: '285px',
          height: '251px',
          margin: '0 13px'
        }"
        :operations="['加入右侧','加入左侧']"
        :targetKeys="targetKeys"
        @change="handleChange"
        :render="item=>`${item.title}`">
      </a-transfer>
    </a-modal>
</template>

<script>
import { Modal, Transfer } from 'vue-antd-ui'

const data = [
  {
    key: '1',
    title: '公司名称1',
    chosen: true,
  },
  {
    key: '2',
    title: '公司名称2',
    chosen: false,
  },
  {
    key: '3',
    title: '公司名称3',
    chosen: false,
  },
  {
    key: '4',
    title: '公司名称4',
    chosen: true,
  },
  {
    key: '5',
    title: '公司名称5',
    chosen: false,
  },
  {
    key: '6',
    title: '公司名称6',
    chosen: false,
  },
  {
    key: '7',
    title: '公司名称7',
    chosen: false,
  },
  {
    key: '8',
    title: '公司名称8',
    chosen: true,
  },
  {
    key: '9',
    title: '公司名称9',
    chosen: false,
  },
  {
    key: '10',
    title: '公司名称10',
    chosen: false,
  },
]

const targetKeys = data.filter(item => item.chosen).map(item => item.key);
export default {
  props: ['showModal'],
  components: {
    'a-modal': Modal,
    'a-transfer': Transfer
  },
  methods: {
    hideModal() {
      this.visible = false
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys
    },
  },
  watch: {
    'showModal': function(){
      this.visible = this.showModal
    },
    'visible': function(){
      this.$emit('handleVisible', this.visible);
    }
  },
  data() {
    return { visible: false, data, targetKeys, }
  }
}
</script>

