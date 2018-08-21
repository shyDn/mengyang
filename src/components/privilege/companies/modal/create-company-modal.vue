<template>
  <a-modal
    :destroyOnClose="true"
    title="新建公司"
    v-model="visible"
    @ok="handleSubmit"
    okText="确定"
    cancelText="取消">
    <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form">
      <a-form-item
        label='公司名称'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="compName"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='超管用户名'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="adminName"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='超管登录密码'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="adminPassword"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input type="password" placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='请重复密码'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="adminPwdDoubleCheck"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input type="password" placeholder="请输入"/>
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
    'a-modal': Modal,
    'a-form': Form,
    'a-form-item': Form.Item,

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
