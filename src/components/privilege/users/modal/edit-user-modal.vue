<template>
    <a-modal
      :destroyOnClose="true"
      title="编辑用户"
      v-model="visible"
      @ok="handleSubmit"
      okText="确定"
      cancelText="取消">
      <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form">
        <a-form-item
          label='用户名'
          :labelCol="{ span: 5 }"
          :wrapperCol="{ span: 12 }"
          fieldDecoratorId="userName"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
          <a-input placeholder="请输入" disabled/>
        </a-form-item>
        <a-form-item
          label='用户密码'
          :labelCol="{ span: 5 }"
          :wrapperCol="{ span: 12 }"
          fieldDecoratorId="userPassword"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
          <a-input type="password" placeholder="请输入"/>
        </a-form-item>
        <a-form-item
          label='联系方式'
          :labelCol="{ span: 5 }"
          :wrapperCol="{ span: 12 }"
          fieldDecoratorId="contact"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
          <a-input placeholder="请输入"/>
        </a-form-item>
        <a-form-item
          label='角色'
          :labelCol="{ span: 5 }"
          :wrapperCol="{ span: 12 }"
          fieldDecoratorId="role"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }],initialValue: ['role1', 'role2']}">
          <a-select mode="multiple">
            <a-select-option :key="'role1'">角色1</a-select-option>
            <a-select-option :key="'role2'">角色2</a-select-option>
            <a-select-option :key="'role3'">角色3</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
</template>

<script>
import { Input, Modal, Form, Select } from 'vue-antd-ui'
export default {
  props: ['showModal'],
  components: {
    'a-input': Input,
    'a-modal': Modal,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-select': Select,
    'a-select-option': Select.Option
  },
  mounted() {
    console.log('@@@@@@@@@@@@');
    console.log(this.form);
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
    },
  },
  watch: {
    'showModal': function(show){
      this.visible = show
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

