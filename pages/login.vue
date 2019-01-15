<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <logo class="logo"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 8,offset: 8}">
        <login-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LoginForm from '~/components/User/LoginForm.vue'

export default {
  components: {
    Logo,
    LoginForm
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  text-align: center;
  margin-top: 50px;
  padding: 10px;
}
.logo {
  padding: 20px;
}
.el-button {
  width: 100%;
}
</style>
