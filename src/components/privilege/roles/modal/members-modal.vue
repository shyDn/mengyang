<template>
    <a-modal
      :destroyOnClose="true"
      width="785px"
      title="角色成员编辑"
      v-model="visible"
      @ok="hideModal"
      okText="确定"
      cancelText="取消">
      <a-transfer
        :dataSource="data"
        showSearch
        :titles="['角色成员(角色名称)', '公司成员']"
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
    title: '真实姓名1',
    chosen: true,
  },
  {
    key: '2',
    title: '真实姓名2',
    chosen: false,
  },
  {
    key: '3',
    title: '真实姓名3',
    chosen: false,
  },
  {
    key: '4',
    title: '真实姓名4',
    chosen: true,
  },
  {
    key: '5',
    title: '真实姓名5',
    chosen: false,
  },
  {
    key: '6',
    title: '真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6真实姓名6',
    chosen: false,
  },
  {
    key: '7',
    title: '真实姓名7',
    chosen: false,
  },
  {
    key: '8',
    title: '真实姓名8',
    chosen: true,
  },
  {
    key: '9',
    title: '真实姓名9',
    chosen: false,
  },
  {
    key: '10',
    title: '真实姓名10',
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

