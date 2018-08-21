<template>
  <a-modal
    :destroyOnClose="true"
    title="编辑功能点"
    v-model="visible"
    @ok="handleSubmit"
    okText="确定"
    cancelText="取消">
    <a-form @submit="handleSubmit" :autoFormCreate="(form) => this.form = form">
      <a-form-item
        label='父级功能点'
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="parentNode">
        <label>父级功能点名称XXXXX</label>
      </a-form-item>
      <a-form-item
        label='子级功能点'
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="childNode"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='子级功能点FUNID'
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="childNodeFuncId"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-input placeholder="请输入"/>
      </a-form-item>
      <a-form-item
        label='是否包含下级功能点'
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="ifContainsChild">
        <a-radio-group name="radioGroup" :defaultValue="1">
          <a-radio :value="1">是</a-radio>
          <a-radio :value="2">否</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label='子集功能点描述'
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId="childNodeDescription"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}">
        <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Button, Input, Modal, Form, Radio } from 'vue-antd-ui'
export default {
  props: ['showModal'],
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-textarea': Input.TextArea,
    'a-modal': Modal,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-radio-group': Radio.Group,
    'a-radio': Radio
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
