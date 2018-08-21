<template>
  <a-modal
    :destroyOnClose="true"
    title="修改密码"
    v-model="visible"
    @ok="handleSubmit"
    okText="确定"
    cancelText="取消">
    <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form">
      <a-form-item
        label='原密码'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="oldPwd"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input type="password" placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='新密码'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="newPwd"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input type="password" placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='重复新密码'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="newPwdDoubleCheck"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input type="password" placeholder="请输入"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Input, Modal, Form } from 'vue-antd-ui'
export default {
  props: ['showModal'],
  components: {
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

