<template>
  <a-modal
    :destroyOnClose="true"
    title="新建一级功能点 "
    v-model="visible"
    @ok="hideModal"
    okText="确定"
    cancelText="取消">
    <a-form @submit="hideModal" :autoFormCreate="(form) => this.form = form">
      <a-form-item
        label='功能点名称'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="funcName"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='FUNID'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="funcId"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='功能点描述'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="funcDescription"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Button, Input, Modal, Form } from 'vue-antd-ui'
export default {
  props: ['showModal'],
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-textarea': Input.TextArea,
    'a-modal': Modal,
    'a-form': Form,
    'a-form-item': Form.Item
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          // call api to login
          console.log('Received values of form: ', values)
          this.hideModal();
        }
      });
    },
    hideModal() {
      this.visible = false
    }
  },
  watch: {
    'showModal': function(show){
      this.visible = show;
    },
    'visible': function(){
      this.$emit('handleVisible', this.visible);
    }
  },
  data() {
    return { visible: false }
  }
}
</script>
