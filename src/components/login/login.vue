<template>
  <div class="hello">
    <div class="company-info">
      <h1><img src="@/assets/appropolis_logo.png"/>    欢迎来到奥孛睿斯物联</h1>
      <h2>奥孛睿斯为您提供专业的物联解决方案</h2>
      <br>
    </div>
    <div class="login-panel">
      <a-form @submit="handleSubmit" class="login-form" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item label="用户名" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }" fieldDecoratorId="userName"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入用户名' }]}">
          <a-input placeholder="用户名" v-model="userName" ref="userNameInput">
            <a-icon slot="prefix" type="user" />
          />
          </a-input>
        </a-form-item>
        <a-form-item label="密码" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }" fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码' }]}">
          <a-input placeholder="密码" v-model="password" ref="passwordInput" type="password">
            <a-icon slot="prefix" type="lock" />
          />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-row>
            <a-col :span="12"><a-checkbox>Remember me</a-checkbox></a-col>
            <a-col :span="12"><a class='login-form-forgot' href=''>Forgot password</a></a-col>
          <br>
          </a-row>
          <a-row>
            <a-col :span="10" :offset="2"><a-button type='primary' htmlType='submit' class='login-form-button'>
              Log in</a-button>
            </a-col>
            <a-col  :offset="6" :span="6">Or <router-link to='/register'>register now!</router-link></a-col>
          </a-row>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { Form, Checkbox, Button, Icon, Input, Row, Col } from 'vue-antd-ui';

export default {
  name: 'Login',
  components: {
    'a-form':  Form,
    'a-form-item': Form.Item,
    'a-checkbox': Checkbox,
    'a-button': Button,
    'a-icon': Icon,
    'a-input': Input,
    'a-row': Row,
    'a-col': Col
  },
  data () {
    return {
      msg: 'This is Login Page',
      userName: '',
      password: ''
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // call api to login
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss" src="./login.scss">
</style>
